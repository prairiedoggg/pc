"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// API 기본 URL 설정
const API_BASE_URL = process.env.EVENT_API_URL || 'http://localhost:8080';

// 폼 입력 타입 정의
interface FormInputs {
  creator_name: string;
  title: string;
  description: string;
  password: string;
  password_confirm: string;
}

export default function CreatePage() {
  const router = useRouter();
  const [petType, setPetType] = useState('small');  // 소형견을 기본값으로 설정
  
  // React Hook Form 사용
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<FormInputs>();
  
  // 비밀번호 확인을 위한 감시
  const password = watch('password');

  // 페이지 생성 Mutation
  const createPageMutation = useMutation({
    mutationFn: async (data: FormInputs & { pet_type: string }) => {
      try {
        // 개인 페이지 생성
        const pageResponse = await axios.post(`${API_BASE_URL}/api/pages`, {
          title: data.title,
          description: data.description,
          creator_name: data.creator_name,
          password: data.password,
          pet_type: data.pet_type
        });
        
        return pageResponse.data;
      } catch (error) {
        console.error('API 호출 오류:', error);
        if (axios.isAxiosError(error) && error.response) {
          throw new Error(`서버 오류: ${error.response.status} - ${error.response.data?.error || '알 수 없는 오류'}`);
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      if (data && data.page_code) {
        // 성공 시 페이지 코드와 함께 결과 페이지로 이동
        router.push(`/event/success?code=${data.page_code}`);
      } else {
        console.error('페이지 코드가 없습니다:', data);
      }
    },
    onError: (error) => {
      console.error('페이지 생성 중 오류 발생:', error);
    }
  });

  const handlePetTypeChange = (type: string) => {
    setPetType(type);
  };

  const onSubmit = (data: FormInputs) => {
    createPageMutation.mutate({ ...data, pet_type: petType });
  };

  return (
    <Container>
      <PageHeader>
        <h1>내 감사 페이지 만들기</h1>
        <p>여러분만의 고유한 페이지를 만들고 감사의 메시지를 받아보세요!</p>
      </PageHeader>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <SectionTitle>작성자 정보</SectionTitle>
          
          <FormGroup>
            <Label htmlFor="creator_name">이름 (필수)</Label>
            <Input
              type="text"
              id="creator_name"
              {...register('creator_name', { 
                required: '이름은 필수입니다',
                minLength: { value: 2, message: '2자 이상 입력해주세요' }
              })}
              placeholder="실명 또는 닉네임을 입력하세요"
            />
            {errors.creator_name && <ErrorText>{errors.creator_name.message}</ErrorText>}
            <HelperText>여러분의 페이지를 방문하는 사람들에게 보여질 이름입니다.</HelperText>
          </FormGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>페이지 설정</SectionTitle>
          
          <FormGroup>
            <Label htmlFor="title">페이지 제목 (필수)</Label>
            <Input
              type="text"
              id="title"
              {...register('title', { 
                required: '페이지 제목은 필수입니다' 
              })}
              placeholder="페이지 제목을 입력하세요"
            />
            {errors.title && <ErrorText>{errors.title.message}</ErrorText>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="description">페이지 설명 (선택)</Label>
            <TextArea
              id="description"
              {...register('description')}
              placeholder="페이지에 대한 설명을 입력하세요"
              rows={3}
            />
          </FormGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>보안 설정</SectionTitle>
          
          <FormGroup>
            <Label htmlFor="password">페이지 비밀번호 (필수)</Label>
            <Input
              type="password"
              id="password"
              {...register('password', { 
                required: '비밀번호는 필수입니다',
                minLength: { value: 4, message: '최소 4자 이상 입력해주세요' }
              })}
              placeholder="페이지 관리용 비밀번호를 입력하세요"
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
            <HelperText>페이지 수정이나 삭제에 필요한 비밀번호입니다. 잊어버리지 마세요!</HelperText>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password_confirm">비밀번호 확인 (필수)</Label>
            <Input
              type="password"
              id="password_confirm"
              {...register('password_confirm', { 
                required: '비밀번호 확인은 필수입니다',
                validate: value => value === password || '비밀번호가 일치하지 않습니다'
              })}
              placeholder="비밀번호를 다시 입력하세요"
            />
            {errors.password_confirm && <ErrorText>{errors.password_confirm.message}</ErrorText>}
          </FormGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>강아지 크기 선택</SectionTitle>
          <PetTypeSelector>
            <PetTypeOption 
              selected={petType === 'small'} 
              onClick={() => handlePetTypeChange('small')}
            >
              <span role="img" aria-label="소형견">🐕‍🦺</span>
              <span>소형견</span>
            </PetTypeOption>
            <PetTypeOption 
              selected={petType === 'medium'} 
              onClick={() => handlePetTypeChange('medium')}
            >
              <span role="img" aria-label="중형견">🦮</span>
              <span>중형견</span>
            </PetTypeOption>
            <PetTypeOption 
              selected={petType === 'large'} 
              onClick={() => handlePetTypeChange('large')}
            >
              <span role="img" aria-label="대형견">🐕</span>
              <span>대형견</span>
            </PetTypeOption>
          </PetTypeSelector>
          <HelperText>선택한 강아지 크기에 따라 감사 페이지의 디자인이 달라집니다.</HelperText>
        </FormSection>

        {createPageMutation.isError && (
          <ErrorMessage>
            페이지 생성 중 오류가 발생했습니다. 다시 시도해 주세요.
          </ErrorMessage>
        )}

        <ButtonGroup>
          <Link href="/event" passHref>
            <BackButton>돌아가기</BackButton>
          </Link>
          <SubmitButton 
            type="submit" 
            disabled={isSubmitting || createPageMutation.isPending}
          >
            {createPageMutation.isPending ? '생성 중...' : '감사 페이지 만들기'}
          </SubmitButton>
        </ButtonGroup>
      </FormContainer>
      
      <InfoBox>
        <h3>🎁 참여하는 방법</h3>
        <p>1. 여러분의 정보를 입력하고 감사 페이지를 생성하세요.</p>
        <p>2. 생성된 페이지 코드를 친구들에게 공유하세요.</p>
        <p>3. 친구들이 보내준 감사 메시지를 확인하세요.</p>
        <p>4. 가장 많은 메시지를 받은 참가자 이름으로 유기견 보호소에 기부됩니다!</p>
      </InfoBox>
    </Container>
  );
}

// 스타일 컴포넌트
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Pretendard', sans-serif;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    color: #4e54c8;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #4a5568;
  }
`;

const FormContainer = styled.form`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
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
  font-family: inherit;
  
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

const HelperText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #718096;
`;

const PetTypeSelector = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PetTypeOption = styled.div<{ selected: boolean }>`
  flex: 1;
  min-width: 100px;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${props => props.selected ? '#4e54c8' : '#e2e8f0'};
  background-color: ${props => props.selected ? 'rgba(78, 84, 200, 0.1)' : 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  span[role="img"] {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  &:hover {
    border-color: #4e54c8;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const BackButton = styled(Button)`
  background-color: white;
  color: #4a5568;
  border: 1px solid #cbd5e0;
  
  &:hover {
    background-color: #f7fafc;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #5a67d8;
  color: white;
  border: none;
  
  &:hover {
    background-color: #4c51bf;
  }
  
  &:disabled {
    background-color: #cbd5e0;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #c53030;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #fed7d7;
  color: #c53030;
  border-radius: 0.5rem;
  margin-top: 1rem;
  font-weight: 500;
`;

const InfoBox = styled.div`
  background-color: #ebf4ff;
  border-radius: 1rem;
  padding: 1.5rem;
  
  h3 {
    color: #2c5282;
    margin-bottom: 1rem;
  }
  
  p {
    color: #2d3748;
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`; 