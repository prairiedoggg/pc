"use client";

import { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import apiClient from '../utils/apiClient';
import styled from 'styled-components';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

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

export default function DogPersonalityTester() {
  // 결과화면 캡처용 Ref
  const resultRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  // react-hook-form
  const { register, handleSubmit, watch, formState: { isDirty } } = useForm<FormInputs>();
  // 파일 선택 변화를 watch
  const watchFile = watch('file');

  // URL 객체 생성 - useState 대신 computed value 사용
  const previewUrl = watchFile && watchFile.length > 0 
    ? URL.createObjectURL(watchFile[0]) 
    : null;
    
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  // 서버로 이미지 파일 전송하여 예측 (react-query Mutation)
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
    onSuccess: () => {
      // 성공 시 캐시 무효화 등의 작업 가능
      queryClient.invalidateQueries({ queryKey: ['dogPrediction'] });
    }
  });

  // 폼 제출
  const onSubmit = (formDataInput: FormInputs) => {
    if (!formDataInput.file || formDataInput.file.length === 0) return;
    const formData = new FormData();
    formData.append('file', formDataInput.file[0]);
    mutate(formData);
  };

  // 트위터 공유
  const shareToTwitter = () => {
    if (!data) return;
    const text = `제 반려동물은  ${data.personality.join(', ')} 이런 성격이래요!`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(`${shareUrl}?utm_source=twitter&utm_medium=social&utm_campaign=dog_personality_test`)}`;
    window.open(twitterUrl, '_blank');
  };

  // 인스타그램 공유 (스토리에 직접 올리는 방식)
  const shareToInstagram = () => {
    alert('인스타그램 공유를 위해 결과 화면을 캡처한 후 인스타그램에 업로드해주세요!');
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = 'instagram://';
    } else {
      window.open('https://instagram.com', '_blank');
    }
  };

  return (
    <CardContainer>

      <TestTitle>우리 강아지는 어떤 성격일까?!</TestTitle>
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
        <Button type="submit" disabled={!isDirty}>예측하기</Button>
      </FormGroup>

      {previewUrl && (
        <PreviewContainer>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#4c51bf', marginBottom: '0.5rem' }}>
            이미지 미리보기
          </h2>
          <PreviewImage src={previewUrl} alt="Preview" />
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

      {isSuccess && data && (
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
  );
}

/* ----- styled components ----- */

const CardContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 0 auto; 
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TestTitle = styled.h2`
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

const Button = styled.button<{ disabled?: boolean }>`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.disabled ? '#a0aec0' : '#5a67d8'};
  color: #fff;
  border-radius: 9999px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${props => props.disabled ? '#a0aec0' : '#4c51bf'};
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