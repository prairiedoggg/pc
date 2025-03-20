"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// API 기본 URL 설정
const API_BASE_URL = process.env.EVENT_API_URL || 'http://localhost:8080';

// 페이지 타입 정의
interface PageDetails {
  id: number;
  title: string;
  description: string;
  user?: {
    id: number;
    name: string;
  };
  creator_name?: string;
  page_code: string;
  pet_type?: string;
}

// 메시지 폼 타입 정의
interface MessageFormInputs {
  content: string;
  sender_name: string;
}

// 코드 폼 타입 정의
interface CodeFormInputs {
  code: string;
}

// API 호출 함수
const fetchPageDetails = async (code: string): Promise<PageDetails> => {
  if (!code) throw new Error('페이지 코드가 필요합니다');
  const { data } = await axios.get(`${API_BASE_URL}/api/pages/code/${code}`);
  return data;
};

export default function VisitPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCode = searchParams?.get('code') || '';
  
  // 현재 단계 (코드 입력 / 메시지 폼 / 완료)
  const [step, setStep] = useState<'input' | 'form' | 'success'>(pageCode ? 'form' : 'input');
  
  // 페이지 코드 입력 폼
  const codeForm = useForm<CodeFormInputs>({
    defaultValues: {
      code: pageCode
    }
  });

  // 메시지 작성 폼
  const messageForm = useForm<MessageFormInputs>({
    defaultValues: {
      content: '',
      sender_name: ''
    }
  });
  
  // 페이지 정보 쿼리
  const {
    data: pageDetails,
    isLoading: isLoadingPage,
    error: pageError,
    refetch: refetchPage
  } = useQuery({
    queryKey: ['visitPageDetails', pageCode],
    queryFn: () => fetchPageDetails(pageCode),
    enabled: !!pageCode && step === 'form',
    retry: 1,
    staleTime: 1000 * 60 * 5 // 5분
  });
  
  // 메시지 전송 뮤테이션
  const messageMutation = useMutation({
    mutationFn: async (data: MessageFormInputs & { page_code: string }) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/messages/code/${data.page_code}`, {
          sender_name: data.sender_name,
          message: data.content
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 429) {
            // 요청 제한 오류
            const errorMsg = error.response.data?.error || '너무 많은 요청이 발생했습니다.';
            throw new Error(`제한 초과: ${errorMsg}`);
          }
          throw new Error(`오류 발생: ${error.response.status} - ${error.response.data?.error || '알 수 없는 오류'}`);
        }
        throw error;
      }
    },
    onSuccess: () => {
      setStep('success');
    },
    onError: (error) => {
      console.error('메시지 전송 중 오류 발생:', error);
    }
  });
  
  // 코드 폼 제출
  const onCodeSubmit = codeForm.handleSubmit((data) => {
    if (!data.code) return;
    router.push(`/event/visit?code=${data.code}`);
    setStep('form');
    refetchPage();
  });
  
  // 메시지 폼 제출
  const onMessageSubmit = messageForm.handleSubmit((data) => {
    if (!pageCode) return;
    messageMutation.mutate({
      ...data,
      page_code: pageCode
    });
  });
  
  // 메시지 작성 결과 페이지에서 이벤트 메인으로 돌아가기
  const handleBackToEvent = () => {
    router.push('/event');
  };
  
  // 메시지 작성 결과 페이지에서 방금 작성한 페이지로 돌아가기
  const handleViewPage = () => {
    router.push(`/event/page/${pageCode}`);
  };

  // 페이지 내용 렌더링 부분
  const renderContent = () => {
    // 코드 입력 단계
    if (step === 'input') {
      return (
        <FormContainer>
          <SectionTitle>감사 페이지 방문하기</SectionTitle>
          <Description>방문하려는 페이지의 코드를 입력하세요.</Description>
          
          <form onSubmit={onCodeSubmit}>
            <FormGroup>
              <Label htmlFor="code">페이지 코드</Label>
              <Input
                id="code"
                placeholder="예: ABC123"
                {...codeForm.register('code', { 
                  required: '코드를 입력해주세요',
                  minLength: { value: 4, message: '올바른 코드를 입력해주세요' }
                })}
              />
              {codeForm.formState.errors.code && (
                <ErrorText>{codeForm.formState.errors.code.message}</ErrorText>
              )}
            </FormGroup>
            
            {pageError && <ErrorText>해당 코드의 페이지를 찾을 수 없습니다. 코드를 확인해주세요.</ErrorText>}
            
            <SubmitButton type="submit" disabled={codeForm.formState.isSubmitting || isLoadingPage}>
              {isLoadingPage ? '확인 중...' : '방문하기'}
            </SubmitButton>
          </form>
          
          <BackLink href="/event">이벤트 메인으로 돌아가기</BackLink>
        </FormContainer>
      );
    }
    
    // 메시지 작성 폼 단계
    if (step === 'form' && pageDetails) {
      // 사용자 이름 가져오기 - user 객체가 있으면 user.name, 없으면 creator_name 사용
      const ownerName = pageDetails.user?.name || pageDetails.creator_name || '익명';
      
      // 오류 메시지 사용자 친화적으로 표시
      const errorMessage = messageMutation.error instanceof Error 
        ? messageMutation.error.message 
        : '메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.';
        
      const isRateLimitError = errorMessage.includes('제한 초과');
      
      return (
        <FormContainer>
          <PageInfo>
            <PageTitle>{pageDetails.title}</PageTitle>
            <PageDescription>{pageDetails.description}</PageDescription>
            <PageOwner>{ownerName}님에게 감사 메시지를 보내세요</PageOwner>
          </PageInfo>
          
          <form onSubmit={onMessageSubmit}>
            <FormGroup>
              <Label htmlFor="content">감사 메시지</Label>
              <TextArea
                id="content"
                placeholder="감사의 마음을 담아 메시지를 남겨주세요"
                rows={5}
                {...messageForm.register('content', { 
                  required: '메시지를 입력해주세요',
                  minLength: { value: 5, message: '5자 이상 입력해주세요' }
                })}
              />
              {messageForm.formState.errors.content && (
                <ErrorText>{messageForm.formState.errors.content.message}</ErrorText>
              )}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="sender_name">보내는 사람</Label>
              <Input
                id="sender_name"
                placeholder="이름을 입력하세요"
                {...messageForm.register('sender_name', { 
                  required: '이름을 입력해주세요' 
                })}
              />
              {messageForm.formState.errors.sender_name && (
                <ErrorText>{messageForm.formState.errors.sender_name.message}</ErrorText>
              )}
            </FormGroup>
            
            {messageMutation.isError && (
              <ErrorBox isRateLimit={isRateLimitError}>
                {errorMessage}
                {isRateLimitError && (
                  <ErrorTip>
                    같은 페이지에 하나의 메시지만 보낼 수 있으며, 하루 최대 10개의 메시지만 작성할 수 있습니다.
                  </ErrorTip>
                )}
              </ErrorBox>
            )}
            
            <SubmitButton 
              type="submit" 
              disabled={messageForm.formState.isSubmitting || messageMutation.isPending}
            >
              {messageMutation.isPending ? '전송 중...' : '메시지 보내기'}
            </SubmitButton>
          </form>
          
          <BackLink href="/event">이벤트 메인으로 돌아가기</BackLink>
        </FormContainer>
      );
    }
    
    // 메시지 작성 완료 단계
    if (step === 'success') {
      return (
        <SuccessContainer>
          <SuccessIcon>✓</SuccessIcon>
          <SuccessTitle>메시지가 성공적으로 전송되었습니다!</SuccessTitle>
          <SuccessDescription>
            소중한 감사 메시지를 보내주셔서 감사합니다.
            메시지 1개당 유기견 보호소에 100원씩 기부됩니다.
          </SuccessDescription>
          
          <ButtonGroup>
            <ViewPageButton onClick={handleViewPage}>
              작성한 페이지 보기
            </ViewPageButton>
            <BackToEventButton onClick={handleBackToEvent}>
              이벤트 메인으로
            </BackToEventButton>
          </ButtonGroup>
        </SuccessContainer>
      );
    }
    
    // 로딩 중 상태
    return (
      <LoadingContainer>
        <LoadingText>페이지 정보를 불러오는 중...</LoadingText>
      </LoadingContainer>
    );
  };

  return (
    <Container>
      <Header>
        <Link href="/event">
          <HeaderTitle>세계 강아지의 날 감사 이벤트</HeaderTitle>
        </Link>
      </Header>
      
      {renderContent()}
    </Container>
  );
}

// 스타일 컴포넌트
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  color: #4e54c8;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.8rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const Description = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #4a5568;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #4e54c8;
    box-shadow: 0 0 0 3px rgba(78, 84, 200, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4e54c8;
    box-shadow: 0 0 0 3px rgba(78, 84, 200, 0.1);
  }
`;

const ErrorText = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #5a67d8;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #4c51bf;
  }
  
  &:disabled {
    background-color: #cbd5e0;
    cursor: not-allowed;
  }
`;

const BackLink = styled(Link)`
  display: block;
  text-align: center;
  color: #5a67d8;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PageInfo = styled.div`
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const PageOwner = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
`;

const SuccessContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #48BB78;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 1.5rem;
`;

const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const SuccessDescription = styled.p`
  color: #4a5568;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ViewPageButton = styled.button`
  flex: 1;
  background-color: #5a67d8;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #4c51bf;
  }
`;

const BackToEventButton = styled.button`
  flex: 1;
  background-color: white;
  color: #4a5568;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f7fafc;
  }
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
  font-size: 1.2rem;
  color: #4a5568;
`;

// 추가 스타일 컴포넌트
const ErrorBox = styled.div<{ isRateLimit?: boolean }>`
  background-color: ${props => props.isRateLimit ? '#fef2f2' : '#fff5f5'};
  border: 1px solid ${props => props.isRateLimit ? '#fca5a5' : '#feb2b2'};
  color: ${props => props.isRateLimit ? '#b91c1c' : '#c53030'};
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ErrorTip = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  font-weight: normal;
  opacity: 0.9;
`; 