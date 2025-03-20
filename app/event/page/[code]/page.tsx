"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import { FaTwitter } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { use } from 'react';

// API 기본 URL 설정
const API_BASE_URL = process.env.EVENT_API_URL || 'http://localhost:8080';

// 스타일 컴포넌트 정의
const Container = styled.div<{ petType?: string }>`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  /* 강아지 타입별 배경 스타일 적용 */
  background-color: ${({ petType }) => 
    petType === 'cat' ? '#f0f5ff' : 
    petType === 'other' ? '#faf5ff' : 
    '#ebf8ff'};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const LoadingText = styled.p`
  font-size: 1.25rem;
  color: #4a5568;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const ErrorText = styled.p`
  font-size: 1.25rem;
  color: #e53e3e;
  margin-bottom: 2rem;
`;

const PageHeader = styled.header`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h1`
  color: #2d3748;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const HeaderDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PageCreator = styled.div`
  display: flex;
  justify-content: space-between;
  color: #718096;
  font-size: 0.95rem;
`;

const ShareSection = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const ShareTitle = styled.h2`
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const ShareControls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ShareUrlInput = styled.input`
  flex: 1;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  color: #4a5568;
  word-break: break-all;
`;

const CopyButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #edf2f7;
  color: #4a5568;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e2e8f0;
  }
`;

const TwitterShareButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #1DA1F2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #0c85d0;
  }
`;

const MainSection = styled.div`
  margin-bottom: 2rem;
`;

const MessagesSection = styled.section`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const NoMessagesText = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 2rem 0;
`;

const MessagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MessageItem = styled.div`
  background-color: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const MessageContent = styled.p`
  color: #4a5568;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const MessageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
`;

const MessageSender = styled.span`
  font-weight: 600;
  color: #2d3748;
`;

const MessageDate = styled.span`
  font-size: 0.85rem;
  color: #718096;
`;

const LoadMoreButton = styled.button`
  display: block;
  width: 100%;
  background-color: #edf2f7;
  color: #4a5568;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e2e8f0;
  }
  
  &:disabled {
    background-color: #edf2f7;
    color: #a0aec0;
    cursor: not-allowed;
  }
`;

const ActionSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const WriteMessageButton = styled.button`
  background-color: #5a67d8;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #4c51bf;
  }
`;

const BackToEventButton = styled.button`
  background-color: white;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

// 메시지 타입 정의
interface Message {
  id: number;
  content?: string;
  message?: string; // 백엔드 응답 필드명 지원
  sender_name: string;
  created_at: string;
}

// 페이지 타입 정의
interface PageDetails {
  id: number;
  title: string;
  description: string;
  user?: {  // user를 옵셔널로 변경
    id: number;
    name: string;
  };
  creator_name?: string; // creator_name 추가
  page_code: string;
  pet_type?: string; // pet_type도 옵셔널로 변경
  created_at: string;
}

// 간소화된 API 호출 함수들
const fetchPageDetails = async (code: string): Promise<PageDetails> => {
  const { data } = await axios.get(`${API_BASE_URL}/api/pages/code/${code}`);
  return data;
};

const fetchMessages = async (code: string) => {
  try {
    console.log('메시지 불러오기 시도:', code);
    const { data } = await axios.get(`${API_BASE_URL}/api/messages/code/${code}`);
    console.log('메시지 응답 데이터:', data);
    
    // 응답이 배열인 경우 그대로 사용, 아니면 빈 배열 반환
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('메시지 로드 오류:', error);
    return [];
  }
};

// 페이지 컴포넌트
export default function Page({ params }: { params: { code: string } }) {
  // 현재 Next.js 버전에서는 params를 직접 접근할 수 있지만, 
  // 미래 버전에서는 React.use()로 unwrap 해야 한다는 경고가 발생합니다.
  // 아래 주석은 미래 버전을 위한 참고용 코드입니다:
  // const resolvedParams = use(params);
  // const { code } = resolvedParams;
  
  const { code } = params;
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [formattedCreatedAt, setFormattedCreatedAt] = useState('');

  // 페이지 정보 가져오기
  const { 
    data: pageDetails,
    isLoading: isLoadingPage,
    error: pageError
  } = useQuery({
    queryKey: ['pageDetails', code],
    queryFn: () => fetchPageDetails(code),
    staleTime: 1000 * 60 * 5, // 5분
    retry: 2,
  });
  
  // 메시지 목록 가져오기 - 무한 스크롤 대신 단순 쿼리로 변경
  const {
    data: messages = [],
    isLoading: isLoadingMessages,
    error: messagesError,
    refetch: refetchMessages
  } = useQuery({
    queryKey: ['messages', code],
    queryFn: () => fetchMessages(code),
    staleTime: 1000 * 60 * 1, // 1분
    enabled: !!code
  });
  
  // 클라이언트 사이드에서만 URL 생성 및 날짜 포맷팅 (하이드레이션 오류 방지)
  useEffect(() => {
    setShareUrl(`${window.location.origin}/event/visit?code=${code}`);
    
    // 페이지 생성일 포맷팅도 클라이언트에서만 수행
    if (pageDetails?.created_at) {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      setFormattedCreatedAt(new Date(pageDetails.created_at).toLocaleDateString('ko-KR', options));
    }
  }, [code, pageDetails?.created_at]);
  
  // 로딩 및 에러 상태 통합
  const isLoading = isLoadingPage || isLoadingMessages;
  const error = pageError || messagesError;

  // 메시지 작성 페이지로 이동
  const handleWriteMessage = () => {
    router.push(`/event/visit?code=${code}`);
  };

  // 날짜 포맷팅 - 메시지 날짜용
  const formatDate = (dateString: string) => {
    if (typeof window === 'undefined') return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  // 공유 URL 복사
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // 트위터 공유
  const shareToTwitter = () => {
    if (!pageDetails) return;
    const text = `${pageDetails.title || '감사 페이지'}에 감사 메시지를 남겨주세요!`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  // 로딩 중 표시
  if (isLoadingPage) {
    return (
      <Container>
        <LoadingContainer>
          <LoadingText>페이지 정보를 불러오는 중...</LoadingText>
        </LoadingContainer>
      </Container>
    );
  }

  // 에러 표시
  if (error || !pageDetails) {
    return (
      <Container>
        <ErrorContainer>
          <ErrorText>페이지 정보를 불러올 수 없습니다. 다시 시도해주세요.</ErrorText>
          <Link href="/event">
            <BackToEventButton className="btn-back">이벤트 메인으로 돌아가기</BackToEventButton>
          </Link>
        </ErrorContainer>
      </Container>
    );
  }

  // 생성자 이름 가져오기 - user 객체가 있으면 user.name, 없으면 creator_name 사용
  const creatorName = pageDetails.user?.name || pageDetails.creator_name || '익명';

  // 메인 페이지 렌더링
  return (
    <Container petType={pageDetails.pet_type}>
      <PageHeader>
        <HeaderTitle>{pageDetails.title}</HeaderTitle>
        <HeaderDescription>{pageDetails.description}</HeaderDescription>
        <PageCreator>
          <span>by {creatorName}</span>
          <span>생성일: {formattedCreatedAt}</span>
        </PageCreator>
      </PageHeader>

      <ShareSection>
        <ShareTitle>이 페이지 공유하기</ShareTitle>
        <ShareControls>
          <ShareUrlInput value={shareUrl} readOnly />
          <CopyButton onClick={copyToClipboard}>
            {copied ? '복사됨!' : '복사'}
          </CopyButton>
          <TwitterShareButton onClick={shareToTwitter}>
            <FaTwitter size={16} />
            트위터에 공유
          </TwitterShareButton>
        </ShareControls>
      </ShareSection>

      <MainSection>
        <MessagesSection>
          <SectionTitle>감사 메시지 ({messages.length})</SectionTitle>
          
          {isLoadingMessages ? (
            <LoadingText>메시지를 불러오는 중...</LoadingText>
          ) : messages.length === 0 ? (
            <NoMessagesText>아직 감사 메시지가 없습니다. 첫 번째 메시지를 작성해보세요!</NoMessagesText>
          ) : (
            <>
              <MessagesList>
                {messages.map((message: Message) => (
                  <MessageItem key={message.id}>
                    <MessageContent>{message.content || message.message}</MessageContent>
                    <MessageFooter>
                      <MessageSender>{message.sender_name}</MessageSender>
                      <MessageDate>{formatDate(message.created_at)}</MessageDate>
                    </MessageFooter>
                  </MessageItem>
                ))}
              </MessagesList>
            </>
          )}
        </MessagesSection>

        <ActionSection>
          <WriteMessageButton onClick={handleWriteMessage}>
            감사 메시지 남기기
          </WriteMessageButton>
          
          <Link href="/event">
            <BackToEventButton className="btn-back">이벤트 메인으로 돌아가기</BackToEventButton>
          </Link>
        </ActionSection>
      </MainSection>
    </Container>
  );
}