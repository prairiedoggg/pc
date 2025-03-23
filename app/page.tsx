// "use client";

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
import DogPersonalityTester from '../components/DogPersonalityTester';

export default function Home() {
  // const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // // 컴포넌트 마운트 시 로그인 상태 확인
  // useEffect(() => {
  //   // 로컬 스토리지에서 토큰 확인
  //   const accessToken = localStorage.getItem('accessToken');
  //   if (accessToken) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);
  
  // 감사편지 작성 버튼 클릭 핸들러
  // const handleLetterButtonClick = () => {
  //   if (isAuthenticated) {
  //     // 인증된 경우 편지 작성 페이지로 이동
  //     router.push('/event/create');
  //   } else {
  //     // 리다이렉트 정보 저장
  //     localStorage.setItem('redirectAfterLogin', '/event/create');
  //     // 인증되지 않은 경우 로그인 페이지로 이동
  //     router.push('/auth/login');
  //   }
  // };

  return (


<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 min-h-screen flex flex-col bg-blue-50">

            {/* 테스트 시작 섹션 */}
      <div className="mb-8">
        <DogPersonalityTester />
      </div>
      
      {/* <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-xl p-8 md:p-12 text-center text-white shadow-md mb-">
        <h1 className="text-3xl md:text-2xl font-bold mb-4">세계 강아지의 날 🐕 기념 이벤트</h1>
        <p className="text-lg md:text-sm">여러분의 강아지에게 감사 메시지를 남겨주세요!</p>
        <p className="text-gray-700">
          강아지에게 감사의 메시지를 남겨주세요! 가장 많은 감사 메시지를 받은 강아지가 우승에게 특별한 선물을 드립니다.
          또한, 메시지 1개당 유기견 보호소에 100원씩 기부됩니다.
        </p>
        <button 
          onClick={handleLetterButtonClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 mt-4 rounded-lg transition-colors"
        >
          감사 편지 작성하기
        </button>
      </div> */}
      
      {/* 푸터 */}
      <footer className="w-full bg-white py-6 px-4 mt-auto text-center rounded-xl shadow-sm">
        <p className="mb-1 text-gray-700">© pettou. All rights reserved.</p>
        <p className="mb-1 text-gray-700">문의: devspred@gmail.com</p>
        <p className="text-xs text-gray-500 mt-2">.</p>
      </footer>
    </div>
  );
}