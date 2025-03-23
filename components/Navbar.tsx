"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useNavStore } from '../store/navStore';

export default function Navbar() {
  const pathname = usePathname();
  const { activeMenuItem, setActiveMenuItem } = useNavStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    if (pathname) {
      setActiveMenuItem(pathname);
    }
  }, [pathname, setActiveMenuItem]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary hover:text-primary-dark transition-colors">
                PETTOVV
              </span>
            </Link>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 첫 번째 메뉴 세트 제거 - 중복 문제 해결 */}
            
            {/* 네비게이션 메뉴 */}
            <div className="md:flex md:items-center md:space-x-8">
              {[
                { path: '/adoption-precautions', name: '유기견 입양 시 주의 사항' },
                { path: '/adoption-process', name: '유기견 입양 절차' },
                { path: '/bonding-with-dogs', name: '유기견과 친해지는 법' },
                { path: '/behavior-correction', name: '유기견 행동 교정법' },
              ].map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`relative px-3 py-2 text-sm font-medium ${
                    activeMenuItem === item.path
                      ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                      : 'text-secondary-dark hover:text-primary transition-colors'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="flex md:hidden items-center -mr-2">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-secondary-dark hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">메뉴 열기</span>
              {/* 햄버거 아이콘 */}
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { path: '/adoption-precautions', name: '유기견 입양 시 주의 사항' },
              { path: '/adoption-process', name: '유기견 입양 절차' },
              { path: '/bonding-with-dogs', name: '유기견과 친해지는 법' },
              { path: '/behavior-correction', name: '유기견 행동 교정법' },
            ].map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeMenuItem === item.path
                    ? 'bg-primary-light text-primary'
                    : 'text-secondary-dark hover:bg-gray-50 hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 