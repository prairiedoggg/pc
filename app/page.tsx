"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import apiClient from '../utils/apiClient';
import styled from 'styled-components';

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
      <p>문의: contact@mypetprediction.com</p>
    </FooterContainer>
  );
}

export default function Home() {
  // 미리보기 URL
  const [preview, setPreview] = useState<string | null>(null);

  // react-hook-form 사용
  // - watch('file')를 통해 파일 선택 변화를 감지
  const { register, handleSubmit, watch } = useForm<FormInputs>();

  // watch로 file 변화를 감지
  const watchFile = watch('file');

  // 파일이 바뀔 때마다 preview 갱신
  useEffect(() => {
    if (watchFile && watchFile.length > 0) {
      const file = watchFile[0];
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }, [watchFile]);

  // react-query mutation
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

  // 파일 제출 시 예측 호출
  const onSubmit = (data: FormInputs) => {
    if (!data.file || data.file.length === 0) return;
    
    const formData = new FormData();
    formData.append('file', data.file[0]);
    mutate(formData);
  };

  // 예측 결과 확인 ㅋ 

  return (
    <>
      <Head>
        <title>반려동물 성격 예측 서비스</title>
        <meta name="description" content="이미지를 업로드하여 반려동물의 성격을 예측하세요." />
        <meta name="keywords" content="반려동물, 성격 예측, 이미지 분석, 머신러닝" />
        
        {/* AdSense 메타 태그 */}
        <meta name="google-adsense-account" content="ca-pub-2568866467581564" />
      </Head>
      
      {/* AdSense 스크립트 - next/script 사용 */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2568866467581564"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />

      <MainContainer>
        <CardContainer>
          <Title>우리 강아지는 어떤 성격일까?!</Title>
          <Description>이미지를 업로드해 반려동물의 성격을 예측해보세요!</Description>

          {/* 파일 업로드 폼 */}
          <FormGroup onSubmit={handleSubmit(onSubmit)}>
            <HiddenFileInput
              id="file-upload"
              type="file"
              accept=".png, .jpg, .jpeg"

              // react-hook-form으로 파일을 등록
              {...register('file', { required: true })}
            />

            <FileLabel htmlFor="file-upload">
              <IconImage src="/file-regular.svg" alt="파일 아이콘" />
              사진 선택
            </FileLabel>

            {/* 폼 제출 버튼 */}
            <Button type="submit">예측하기</Button>
          </FormGroup>

          {/* 미리보기 */}
          {preview && (
            <PreviewContainer>
              <h2
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: '#4c51bf',
                  marginBottom: '0.5rem',
                }}
              >
                이미지 미리보기
              </h2>
              <PreviewImage src={preview} alt="Preview" />
            </PreviewContainer>
          )}

          {/* 로딩 표시 */}
          {isPending && (
            <LoadingText>예측 중... 잠시만 기다려주세요.</LoadingText>
          )}

          {/* 에러 표시 */}
          {isError && (
            <ErrorText>
              오류가 발생했습니다:{' '}
              {(error as PredictionError).response?.data?.detail ||
                (error as PredictionError).message}
            </ErrorText>
          )}

          {/* 예측 결과 */}
          {isSuccess && (
            <ResultContainer>
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
            </ResultContainer>
          )}

          {/* 쿠팡 광고 */}
          {/* <Script src="https://ads-partners.coupang.com/g.js" />
          <Script id="coupang-banner">
            {`
              new PartnersCoupang.G({
                "id":831036,
                "template":"banner",
                "trackingCode":"AF2923947",
                "width":"728",
                "height":"90"
              });
            `}
          </Script> */}
        </CardContainer>
        <Footer />
      </MainContainer>
    </>
  );
}

/* styled-components 정의 */
const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ebf4ff, #c3dafe);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const CardContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #4c51bf; /* 인디고-800 근접 */
`;

const Description = styled.p`
  text-align: center;
  color: #2d3748; /* gray-800 근접 */
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
  background-color: #5a67d8; /* 인디고-600 근접 */
  color: #fff;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;

  &:hover {
    background-color: #4c51bf; /* 인디고-700 근접 */
  }
`;

const IconImage = styled.img`
  width: 1.25rem; 
  height: 1.25rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #5a67d8; /* 인디고-600 근접 */
  color: #fff;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;

  &:hover {
    background-color: #4c51bf; /* 인디고-700 근접 */
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
  color: #4c51bf; /* 인디고-700 근접 */
  margin-bottom: 0.5rem;
`;

const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ResultItem = styled.li`
  background-color: #ebf4ff; /* 인디고-50 */
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
  color: #4c51bf; /* 인디고-800 */
  font-weight: 500;
`;

const ConfidenceValue = styled.span`
  color: #5a67d8; /* 인디고-600 */
  font-weight: 500;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e2e8f0; /* gray-200 */
  border-radius: 9999px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #5a67d8; /* 인디고-600 */
  transition: width 0.35s ease;
`;

const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 0.875rem;  /* 글씨 크기는 편의에 맞게 조절하세요 */
  color: #4c51bf;       /* 인디고-700 근접 */
`;

//useEffect 바꾼 후 성정 테스트