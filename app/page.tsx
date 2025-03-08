"use client";

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import apiClient from '../utils/apiClient';
import styled from 'styled-components';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

// 쿠팡 파트너스 타입(옵셔널)
interface CoupangPartners {
  G: new (options: {
    id: number;
    template: string;
    trackingCode: string;
    width: string;
    height: string;
    tsource: string;
  }) => void;
}

interface FormInputs {
  file: FileList;
}

interface PredictionResult {
  personality: string[];
  confidence: number[];
}

interface PredictionError {
  response?: {
    data?: {
      detail?: string;
    };
  };
  message?: string;
}

function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 MyPetPrediction. All rights reserved.</p>
      <p>문의: devspred@gmail.com</p>
      <p>이 웹사이트는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p>
    </FooterContainer>
  );
}

/**
 * (1) - 쿠팡 배너 스크립트 HTML
 * 여기서 <script src="..."></script> + new PartnersCoupang.G(...)를
 * 하나의 문자열로 묶어서 dangerouslySetInnerHTML로 삽입합니다.
 * 
 *  - script 두 개를 이어붙이면 파서 에러가 날 수 있어, 하나에 합치는 경우도 있고
 *    아래처럼 별도 script 태그 2개를 그냥 이어쓰기도 합니다.
 */
const coupangBannerHTML = `
  <script src="https://ads-partners.coupang.com/g.js"></script>
  <script>
    // onload가 아니라, 즉시 window.PartnersCoupang을 확인
    // 다만, 혹시 스크립트가 늦게 로드될 수도 있으니 setTimeout 등으로 감싸볼 수도 있음
    (function() {
      if (window.PartnersCoupang) {
        new window.PartnersCoupang.G({
          id: 845588,
          template: "carousel",
          trackingCode: "AF2923947",
          width: "780",
          height: "90",
          tsource: ""
        });
      }
    })();
  </script>
`;

export default function Home() {
  // 미리보기 URL
  const [preview, setPreview] = useState<string | null>(null);
  // 공유할 URL
  const [shareUrl, setShareUrl] = useState<string>("");
  // 결과 화면 캡처용 Ref
  const resultRef = useRef<HTMLDivElement>(null);

  // react-hook-form
  const { register, handleSubmit, watch } = useForm<FormInputs>();
  // 파일 선택 변화를 watch
  const watchFile = watch('file');

  // 현재 페이지의 URL 설정
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  // 파일 선택 시 미리보기
  useEffect(() => {
    if (watchFile && watchFile.length > 0) {
      const file = watchFile[0];
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }, [watchFile]);

  // 예측 요청 (react-query)
  const {
    mutate,
    data,
    error,
    isPending,
    isSuccess,
    isError
  } = useMutation({
    mutationFn: async (formData: FormData): Promise<PredictionResult> => {
      const res = await apiClient.post('/api/predict', formData);
      return res.data;
    },
  });

  // 폼 제출
  const onSubmit = (formDataInput: FormInputs) => {
    if (!formDataInput.file || formDataInput.file.length === 0) return;
    
    const formData = new FormData();
    formData.append('file', formDataInput.file[0]);
    mutate(formData);
  };

  // SNS 공유
  const shareToTwitter = () => {
    const text = `제 반려동물의 성격은 ${data?.personality.join(', ')} 입니다!`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
  };

  const shareToInstagram = () => {
    alert('인스타그램 공유를 위해 결과 화면을 캡처한 후 인스타그램에 업로드해주세요!');
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = 'instagram://';
    } else {
      window.open('https://instagram.com', '_blank');
    }
  };

  return (
    <>
      {/* Next.js Head */}
      <Head>
        <title>반려동물 성격 예측 서비스</title>
        <meta name="description" content="이미지를 업로드하여 반려동물의 성격을 예측하세요." />
        <meta name="keywords" content="반려동물, 성격 예측, 이미지 분석, 머신러닝" />
      </Head>

      <MainContainer>
        {/* 기능 컨테이너 */}
        <CardContainer>
          <Title>우리 강아지는 어떤 성격일까?!</Title>
          <Description>이미지를 업로드해 반려동물의 성격을 예측해보세요!</Description>

          <FormGroup onSubmit={handleSubmit(onSubmit)}>
            <HiddenFileInput
              id="file-upload"
              type="file"
              accept=".png, .jpg, .jpeg"
              {...register('file', { required: true })}
            />
            <FileLabel htmlFor="file-upload">
              <IconImage src="/file-regular.svg" alt="파일 아이콘" />
              사진 선택
            </FileLabel>
            <Button type="submit">예측하기</Button>
          </FormGroup>

          {preview && (
            <PreviewContainer>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#4c51bf', marginBottom: '0.5rem' }}>
                이미지 미리보기
              </h2>
              <PreviewImage src={preview} alt="Preview" />
            </PreviewContainer>
          )}

          {isPending && <LoadingText>예측 중... 잠시만 기다려주세요.</LoadingText>}

          {isError && (
            <ErrorText>
              오류가 발생했습니다:{' '}
              {(error as PredictionError).response?.data?.detail ||
                (error as PredictionError).message}
            </ErrorText>
          )}

          {isSuccess && (
            <ResultContainer ref={resultRef}>
              <ResultTitle>예측 결과</ResultTitle>
              <ResultList>
                {data.personality.map((personality: string, index: number) => {
                  const confidenceValue = (data.confidence[index] * 100).toFixed(2);
                  return (
                    <ResultItem key={index}>
                      <TextGroup>
                        <PersonalityText>{personality}</PersonalityText>
                        <ConfidenceValue>{confidenceValue}%</ConfidenceValue>
                      </TextGroup>
                      <ProgressBarContainer>
                        <ProgressBarFill progress={parseFloat(confidenceValue)} />
                      </ProgressBarContainer>
                    </ResultItem>
                  );
                })}
              </ResultList>

              <ShareContainer>
                <ShareTitle>결과 공유하기</ShareTitle>
                <ShareButtonsContainer>
                  <TwitterShareButton onClick={shareToTwitter}>
                    <FaTwitter size={18} />
                    트위터에 공유
                  </TwitterShareButton>
                  <InstagramShareButton onClick={shareToInstagram}>
                    <FaInstagram size={18} />
                    인스타그램에 공유
                  </InstagramShareButton>
                </ShareButtonsContainer>
              </ShareContainer>
            </ResultContainer>
          )}
        </CardContainer>

        {/* (2) - 쿠팡 배너를 '인라인 스크립트'로 삽입 */}
        <BannerContainer>
          {/* 여기 dangerouslySetInnerHTML로 '직접' script 태그를 넣습니다 */}
          <div dangerouslySetInnerHTML={{ __html: coupangBannerHTML }} />
        </BannerContainer>

        <Footer />
      </MainContainer>
    </>
  );
}

/* styled-components 정의 */
const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ebf4ff, #c3dafe);
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* ↑ 만약 레이아웃이 꼬이면 지우거나 수정하세요 */
  padding: 1rem;
`;

const CardContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 0 auto; /* 가로 가운데 정렬 */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #4c51bf;
`;

const Description = styled.p`
  text-align: center;
  color: #2d3748;
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #5a67d8;
  color: #fff;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4c51bf;
  }
`;

const IconImage = styled.img`
  width: 1.25rem; 
  height: 1.25rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #5a67d8;
  color: #fff;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4c51bf;
  }
`;

const PreviewContainer = styled.div`
  text-align: center;
`;

const PreviewImage = styled.img`
  margin: 0 auto;
  max-width: 16rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const LoadingText = styled.p`
  text-align: center;
  color: #4a5568;
  margin-top: 1rem;
`;

const ErrorText = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: #e53e3e;
`;

const ResultContainer = styled.div`
  margin-top: 1rem;
`;

const ResultTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #4c51bf;
  margin-bottom: 0.5rem;
`;

const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ResultItem = styled.li`
  background-color: #ebf4ff;
  padding: 0.7rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const TextGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PersonalityText = styled.span`
  color: #4c51bf;
  font-weight: 500;
`;

const ConfidenceValue = styled.span`
  color: #5a67d8;
  font-weight: 500;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e2e8f0;
  border-radius: 9999px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #5a67d8;
  transition: width 0.35s ease;
`;

const ShareContainer = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
`;

const ShareTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #4c51bf;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const ShareButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`;

const TwitterShareButton = styled(ShareButton)`
  background-color: #1DA1F2;
  color: white;
  
  &:hover {
    background-color: #0c85d0;
  }
`;

const InstagramShareButton = styled(ShareButton)`
  background: linear-gradient(
    45deg, 
    #f09433 0%, 
    #e6683c 25%, 
    #dc2743 50%, 
    #cc2366 75%, 
    #bc1888 100%
  );
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
`;

const BannerContainer = styled.div`
  margin: 2rem auto;
  text-align: center;
  max-width: 780px;
  width: 100%;
  min-height: 90px;
  border: 1px dashed #ccc;
`;

const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 0.875rem;
  color: #4c51bf;
`;