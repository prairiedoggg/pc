"use client";

import { useState } from 'react';
import Head from 'next/head';
import { useMutation } from 'react-query';
import apiClient from '../utils/apiClient';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // react-query의 useMutation 훅 사용
  const mutation = useMutation<any, Error, FormData>(async (formData) => {
    const res = await apiClient.post('/api/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    setFile(uploadedFile || null);  // null로 폴백하도록 수정
    setPreview(uploadedFile ? URL.createObjectURL(uploadedFile) : null);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    mutation.mutate(formData);
  };

  return (
    <div>
      <Head>
        <title>반려동물 성격 예측 서비스</title>
        <meta name="description" content="이미지를 업로드하여 반려동물의 성격을 예측하세요." />
        <meta name="keywords" content="반려동물, 성격 예측, 이미지 분석, 머신러닝" />
      </Head>
      <h1>반려동물 성격 예측 서비스</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={handleFileChange}
        />
        <button type="submit">예측하기</button>
      </form>

      {preview && (
        <div>
          <h2>이미지 미리보기</h2>
          <img src={preview} alt="Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}

      {/* 상태 관리 */}
      {mutation.isLoading && <p>예측 중...</p>}

      {mutation.isError && (
        <div>
          <p>오류가 발생했습니다: {(mutation.error as any).response?.data?.detail || (mutation.error as any).message}</p>
        </div>
      )}

      {mutation.isSuccess && (
        <div>
          <h2>예측 결과</h2>
          <p>성격: {mutation.data.personality}</p>
          <p>신뢰도: {(mutation.data.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}