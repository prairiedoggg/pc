"use client";

import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// API 기본 URL 설정
const API_BASE_URL = process.env.EVENT_API_URL || 'http://localhost:8080';

// 이벤트 정보 조회를 위한 쿼리 함수
const fetchEventInfo = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/api/event/info`);
  return data;
};

// 상위 기부자 조회를 위한 쿼리 함수
const fetchTopDonations = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/api/donations/top?limit=10`);
  return data || [];
};

// 이벤트 메인 페이지
export default function EventPage() {
  const router = useRouter();
  
  // React Query를 사용한 이벤트 정보 조회
  const { 
    data: eventInfo, 
    isLoading: isLoadingInfo,
    error: infoError
  } = useQuery({
    queryKey: ['eventInfo'],
    queryFn: fetchEventInfo,
    initialData: {
      name: '세계 강아지의 날 유기견 후원 이벤트',
      description: '감사 메시지를 가장 많이 받은 참가자 이름으로 유기견 보호소에 기부됩니다.',
      start_date: '2024-06-01',
      end_date: '2024-06-30',
    },
    staleTime: 1000 * 60 * 5, // 5분
  });
  
  // React Query를 사용한 상위 기부 순위 조회
  const { 
    data: topDonations, 
    isLoading: isLoadingDonations,
    error: donationsError 
  } = useQuery({
    queryKey: ['topDonations'],
    queryFn: fetchTopDonations,
    initialData: [],
    staleTime: 1000 * 60 * 1, // 1분
  });
  
  const isLoading = isLoadingInfo || isLoadingDonations;
  const error = infoError || donationsError;

  // 새 페이지 생성 페이지로 이동
  const handleCreatePage = () => {
    router.push('/event/create');
  };

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  return (
    <MainContainer>
      <EventBanner>
        <h1>{eventInfo.name}</h1>
        <p>{eventInfo.description}</p>
        <DateRange>
          {formatDate(eventInfo.start_date)} ~ {formatDate(eventInfo.end_date)}
        </DateRange>
      </EventBanner>

      <ActionSection>
        <ActionCard>
          <h2>내 감사 페이지 만들기</h2>
          <p>여러분만의 고유한 페이지를 만들고 감사의 메시지를 받아보세요.</p>
          <p>가장 많은 감사 메시지를 받은 참가자 이름으로 유기견 보호소에 기부됩니다!</p>
          <Button onClick={handleCreatePage}>페이지 만들기</Button>
        </ActionCard>

        <ActionCard>
          <h2>감사 페이지 방문하기</h2>
          <p>이미 방문 코드를 알고 계신가요?</p>
          <p>코드를 입력하여 감사 메시지를 남겨보세요.</p>
          <Link href="/event/visit" passHref>
            <Button as="a">페이지 방문하기</Button>
          </Link>
        </ActionCard>
      </ActionSection>

      <RankingSection>
        <h2>실시간 감사 메시지 랭킹</h2>
        <p>가장 많은 감사 메시지를 받고 있는 참가자들입니다.</p>

        {isLoading ? (
          <LoadingText>랭킹 정보를 불러오는 중...</LoadingText>
        ) : error ? (
          <ErrorText>데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</ErrorText>
        ) : (
          <RankingList>
            {topDonations && topDonations.length > 0 ? 
              topDonations.map((donation: any, index: number) => (
                <RankingItem key={donation.id}>
                  <RankNumber>{index + 1}</RankNumber>
                  <RankInfo>
                    <RankName>{donation.user?.name || '익명'}</RankName>
                    <RankCount>{donation.message_count}개의 감사 메시지</RankCount>
                  </RankInfo>
                </RankingItem>
              )) : 
              <NoRankingText>아직 랭킹 정보가 없습니다. 첫 번째 참가자가 되어보세요!</NoRankingText>
            }
          </RankingList>
        )}
      </RankingSection>

      <EventInfoSection>
        <h2>어떻게 참여하나요?</h2>
        <StepContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepContent>
              <h3>내 페이지 만들기</h3>
              <p>'페이지 만들기' 버튼을 클릭하여 나만의 감사 페이지를 만듭니다.</p>
            </StepContent>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepContent>
              <h3>친구들에게 공유하기</h3>
              <p>여러분의 페이지 코드를 친구들에게 공유해주세요.</p>
            </StepContent>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepContent>
              <h3>감사 메시지 받기</h3>
              <p>친구들이 여러분의 페이지에 방문하여 감사 메시지를 남길 수 있습니다.</p>
            </StepContent>
          </Step>
          <Step>
            <StepNumber>4</StepNumber>
            <StepContent>
              <h3>유기견 후원에 동참하기</h3>
              <p>가장 많은 메시지를 받은 참가자 이름으로 유기견 보호소에 기부됩니다.</p>
            </StepContent>
          </Step>
        </StepContainer>
      </EventInfoSection>

      {/* 노즈워크 강아지 애니메이션 영역 (디자이너로부터 에셋 수신 후 교체 예정) */}
      <AnimationSection>
        <h2>귀여운 강아지가 노즈워크로 편지를 찾아요!</h2>
        <AnimationPlaceholder>
          <p>🐕 노즈워크하는 강아지 애니메이션이 들어갈 자리입니다 🐕</p>
          <p>(디자이너로부터 에셋을 받은 후 적용 예정)</p>
        </AnimationPlaceholder>
      </AnimationSection>
    </MainContainer>
  );
}

// 스타일 컴포넌트
const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Pretendard', sans-serif;
`;

const EventBanner = styled.div`
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  border-radius: 1rem;
  padding: 3rem 2rem;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const DateRange = styled.div`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-weight: 500;
`;

const ActionSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ActionCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;

  h2 {
    color: #4e54c8;
    margin-bottom: 1rem;
  }

  p {
    color: #4a5568;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: #5a67d8;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #4c51bf;
  }
`;

const RankingSection = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;

  h2 {
    color: #4e54c8;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4a5568;
    margin-bottom: 1.5rem;
  }
`;

const LoadingText = styled.p`
  text-align: center;
  color: #4a5568;
  padding: 2rem;
`;

const ErrorText = styled.p`
  text-align: center;
  color: #e53e3e;
  padding: 2rem;
`;

const RankingList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RankingItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const RankNumber = styled.div`
  background-color: #5a67d8;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
`;

const RankInfo = styled.div`
  flex-grow: 1;
`;

const RankName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: #2d3748;
`;

const RankCount = styled.div`
  color: #5a67d8;
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;

const NoRankingText = styled.p`
  text-align: center;
  color: #4a5568;
  padding: 2rem;
  font-style: italic;
`;

const EventInfoSection = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;

  h2 {
    color: #4e54c8;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StepNumber = styled.div`
  background-color: #5a67d8;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  h3 {
    color: #2d3748;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: #4a5568;
    font-size: 0.95rem;
  }
`;

const AnimationSection = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;

  h2 {
    color: #4e54c8;
    margin-bottom: 1.5rem;
  }
`;

const AnimationPlaceholder = styled.div`
  background-color: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 0.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  p {
    color: #4a5568;
    margin: 0.5rem 0;
  }
`; 