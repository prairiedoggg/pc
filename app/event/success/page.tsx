"use client";

export default function SuccessPage() {
  return <div>Success Page</div>;
}

  
// import { useEffect, useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import styled from 'styled-components';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { FaClipboard, FaCheck } from 'react-icons/fa';

// // API 기본 URL 설정
// const API_BASE_URL = process.env.EVENT_API_URL || 'http://localhost:8080';

// interface PageDetails {
//   id: number;
//   title: string;
//   description: string;
//   page_code: string;
//   creator_name: string;
// }

// export default function SuccessPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const code = searchParams?.get('code');
//   const [copied, setCopied] = useState(false);
  
//   // URL 생성
//   const shareUrl = typeof window !== 'undefined' 
//     ? `${window.location.origin}/event/page/${code}`
//     : '';
  
//   // 쿼리 파라미터 없으면 이벤트 페이지로 리디렉션
//   useEffect(() => {
//     if (!code) {
//       router.push('/event');
//     }
//   }, [code, router]);
  
//   // 페이지 상세 정보 조회
//   const { data: pageDetails, isLoading, isError } = useQuery({
//     queryKey: ['pageDetails', code],
//     queryFn: async (): Promise<PageDetails> => {
//       if (!code) throw new Error('페이지 코드가 없습니다.');
//       const { data } = await axios.get(`${API_BASE_URL}/api/pages/code/${code}`);
//       return data;
//     },
//     enabled: !!code,
//     retry: 1,
//     staleTime: 1000 * 60 * 5, // 5분
//   });
  
//   // 클립보드 복사 함수
//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };
  
//   // 이벤트 페이지로 돌아가기
//   const goToEvent = () => {
//     router.push('/event');
//   };
  
//   // 방금 생성한 페이지 보기
//   const viewPage = () => {
//     router.push(`/event/page/${code}`);
//   };
  
//   if (isLoading) {
//     return (
//       <Container>
//         <ContentBox>
//           <h1>페이지 정보를 불러오는 중...</h1>
//         </ContentBox>
//       </Container>
//     );
//   }
  
//   if (isError || !pageDetails) {
//     return (
//       <Container>
//         <ContentBox error>
//           <h1>오류가 발생했습니다</h1>
//           <p>페이지 정보를 불러오는 중 오류가 발생했습니다.</p>
//           <Button onClick={goToEvent}>이벤트 페이지로 돌아가기</Button>
//         </ContentBox>
//       </Container>
//     );
//   }
  
//   return (
//     <Container>
//       <ContentBox>
//         <SuccessIcon>✓</SuccessIcon>
//         <Title>페이지가 성공적으로 생성되었습니다!</Title>
        
//         <InfoCard>
//           <InfoHeader>페이지 정보</InfoHeader>
//           <InfoRow>
//             <InfoLabel>제목:</InfoLabel>
//             <InfoValue>{pageDetails.title}</InfoValue>
//           </InfoRow>
//           <InfoRow>
//             <InfoLabel>작성자:</InfoLabel>
//             <InfoValue>{pageDetails.creator_name}</InfoValue>
//           </InfoRow>
//           <InfoRow>
//             <InfoLabel>코드:</InfoLabel>
//             <InfoValueWithCopy>
//               <span>{pageDetails.page_code}</span>
//               <CopyButton onClick={() => copyToClipboard(pageDetails.page_code)}>
//                 {copied ? <FaCheck /> : <FaClipboard />}
//               </CopyButton>
//             </InfoValueWithCopy>
//           </InfoRow>
//           <InfoRow>
//             <InfoLabel>페이지 링크:</InfoLabel>
//             <InfoValueWithCopy>
//               <span>{shareUrl}</span>
//               <CopyButton onClick={() => copyToClipboard(shareUrl)}>
//                 {copied ? <FaCheck /> : <FaClipboard />}
//               </CopyButton>
//             </InfoValueWithCopy>
//           </InfoRow>
//         </InfoCard>
        
//         <WarningBox>
//           <h3>⚠️ 중요 안내</h3>
//           <p>
//             작성하신 <strong>페이지 코드({pageDetails.page_code})</strong>와 설정하신 <strong>비밀번호</strong>를 
//             꼭 기억해주세요! 페이지를 수정하거나 삭제할 때 필요합니다.
//           </p>
//         </WarningBox>
        
//         <InstructionList>
//           <h3>다음 단계:</h3>
//           <ol>
//             <li>페이지 코드를 친구들에게 공유하세요.</li>
//             <li>친구들이 코드를 통해 여러분의 페이지에 방문하고 감사 메시지를 남길 수 있습니다.</li>
//             <li>댓글로 달린 감사 메시지를 확인하세요.</li>
//             <li>가장 많은 메시지를 받은 페이지는 이벤트 종료 후 유기견 보호소에 기부됩니다.</li>
//           </ol>
//         </InstructionList>
        
//         <ButtonGroup>
//           <PrimaryButton onClick={viewPage}>내 페이지 확인하기</PrimaryButton>
//           <SecondaryButton onClick={goToEvent}>이벤트 메인으로</SecondaryButton>
//         </ButtonGroup>
//       </ContentBox>
//     </Container>
//   );
// }

// // 스타일 컴포넌트
// const Container = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 2rem 1rem;
// `;

// const ContentBox = styled.div<{ error?: boolean }>`
//   background-color: white;
//   border-radius: 1rem;
//   padding: 2.5rem;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
//   text-align: center;
//   border-top: ${props => props.error ? '4px solid #e53e3e' : '4px solid #48BB78'};
// `;

// const SuccessIcon = styled.div`
//   width: 80px;
//   height: 80px;
//   background-color: #48BB78;
//   color: white;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 2.5rem;
//   margin: 0 auto 1.5rem;
// `;

// const Title = styled.h1`
//   font-size: 1.8rem;
//   color: #2d3748;
//   margin-bottom: 2rem;
// `;

// const InfoCard = styled.div`
//   background-color: #f7fafc;
//   border-radius: 0.5rem;
//   padding: 1.5rem;
//   margin-bottom: 2rem;
//   text-align: left;
// `;

// const InfoHeader = styled.h2`
//   font-size: 1.2rem;
//   color: #4a5568;
//   margin-bottom: 1rem;
//   border-bottom: 1px solid #e2e8f0;
//   padding-bottom: 0.5rem;
// `;

// const InfoRow = styled.div`
//   display: flex;
//   margin-bottom: 1rem;
//   align-items: center;
  
//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const InfoLabel = styled.div`
//   font-weight: 600;
//   color: #4a5568;
//   width: 100px;
//   flex-shrink: 0;
// `;

// const InfoValue = styled.div`
//   color: #2d3748;
//   flex-grow: 1;
// `;

// const InfoValueWithCopy = styled.div`
//   display: flex;
//   align-items: center;
//   flex-grow: 1;
//   color: #2d3748;
  
//   span {
//     flex-grow: 1;
//     word-break: break-all;
//   }
// `;

// const CopyButton = styled.button`
//   background: transparent;
//   border: none;
//   color: #5a67d8;
//   cursor: pointer;
//   padding: 0.3rem;
//   margin-left: 0.5rem;
  
//   &:hover {
//     color: #4c51bf;
//   }
// `;

// const WarningBox = styled.div`
//   background-color: #fffaf0;
//   border: 1px solid #fbd38d;
//   border-radius: 0.5rem;
//   padding: 1rem;
//   margin-bottom: 2rem;
//   text-align: left;
  
//   h3 {
//     color: #d69e2e;
//     margin-bottom: 0.5rem;
//     font-size: 1.1rem;
//   }
  
//   p {
//     color: #744210;
//     font-size: 0.95rem;
//   }
// `;

// const InstructionList = styled.div`
//   text-align: left;
//   margin-bottom: 2rem;
  
//   h3 {
//     color: #4a5568;
//     margin-bottom: 0.75rem;
//     font-size: 1.1rem;
//   }
  
//   ol {
//     color: #4a5568;
//     padding-left: 1.5rem;
    
//     li {
//       margin-bottom: 0.5rem;
//     }
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   margin-top: 2rem;
// `;

// const Button = styled.button`
//   padding: 0.75rem 1.5rem;
//   border-radius: 0.5rem;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.2s ease;
// `;

// const PrimaryButton = styled(Button)`
//   background-color: #5a67d8;
//   color: white;
//   border: none;
  
//   &:hover {
//     background-color: #4c51bf;
//   }
// `;

// const SecondaryButton = styled(Button)`
//   background-color: white;
//   color: #4a5568;
//   border: 1px solid #cbd5e0;
  
//   &:hover {
//     background-color: #f7fafc;
//   }
// `; 