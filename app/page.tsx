import { Metadata } from 'next';
import Link from 'next/link';
import DogPersonalityTester from '../components/DogPersonalityTester';
export const metadata: Metadata = {
  title: '반려견 성격 테스트 🐕 | 당신의 강아지는 어떤 성격일까?',
  description: '당신의 반려견 성격 유형을 알아보세요. 과학적 근거에 기반한 반려견 성격 테스트로 여러분의 강아지를 더 잘 이해하고 행복한 반려 생활을 즐기세요.',
  keywords: ['강아지 성격 테스트', '반려견 성격', '강아지 유형', '강아지 이해하기', '반려견 심리', '강아지 행동'],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen m-0 p-0 bg-blue-50">
      <div className="flex-grow flex flex-col items-center mt-0">
        <main className="w-full max-w-4xl px-4">
          {/* 메인 타이틀 섹션 */}
          <section className="text-center my-6">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">세계 강아지의 날 🐕 기념 이벤트</h1>
            <p className="text-lg text-blue-600 mb-4">여러분의 강아지에게 감사 메시지를 남겨주세요!</p>
          </section>
          
          {/* 테스트 시작 섹션 */}
          <DogPersonalityTester />
          {/* <section className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-6">
            <h2 className="text-xl font-bold text-center mb-3">우리 강아지는 어떤 성격일까?!</h2>
            <p className="text-center mb-4">이미지를 업로드해 반려동물의 성격을 예측해보세요!</p>
            <div className="flex flex-col gap-3 items-center">
              <Link href="/personality-test" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md text-center w-full max-w-xs">
                사진 선택
              </Link>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md w-full max-w-xs">
                예측하기
              </button>
            </div>
          </section> */}
          
          {/* 안내 메시지 섹션 */}
          <section className="bg-gray-50 rounded-lg p-5 max-w-2xl mx-auto mb-6">
            <p className="text-center text-gray-700">
              강아지에게 감사의 메시지를 남겨주세요! 가장 많은 감사 메시지를 받은 강아지가 우승에게 특별한 선물을 드립니다.
              또한, 메시지 1개당 유기견 보호소에 100원씩 기부됩니다.
            </p>
          </section>
          
          {/* 버튼 섹션 */}
          <div className="text-center mb-10">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md">
              감사 편지 작성하기
            </button>
          </div>
        </main>
        
        <footer className="w-full bg-white py-4 mt-auto text-center text-sm">
          <p className="mb-1">© pettou. All rights reserved.</p>
          <p className="mb-1">문의: devspred@gmail.com</p>
          <p className="text-xs text-gray-500">이 웹사이트는 무료 템플릿을 활용한 일회성 이벤트로, 이에 따른 청영매니 수수료를 개인맵니다.</p>
        </footer>
      </div>
    </div>
  );
}