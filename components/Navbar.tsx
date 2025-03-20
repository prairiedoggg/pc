"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <NavContainer>
      <LogoContainer>
        <Link href="/">
          <LogoText>반려견 성격 테스트 🐕</LogoText>
        </Link>
      </LogoContainer>
      <NavLinks>
        <NavItem active={pathname === '/adoption-precautions'}>
          <Link href="/adoption-precautions">
            <NavLinkText>유기견 입양 시 주의 사항</NavLinkText>
          </Link>
        </NavItem>
        <NavItem active={pathname === '/adoption-process'}>
          <Link href="/adoption-process">
            <NavLinkText>유기견 입양 절차</NavLinkText>
          </Link>
        </NavItem>
        <NavItem active={pathname === '/bonding-with-dogs'}>
          <Link href="/bonding-with-dogs">
            <NavLinkText>유기견과 친해지는 법</NavLinkText>
          </Link>
        </NavItem>
        <NavItem active={pathname === '/behavior-correction'}>
          <Link href="/behavior-correction">
            <NavLinkText>유기견 행동 교정법</NavLinkText>
          </Link>
        </NavItem>
      </NavLinks>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4c51bf;
  text-decoration: none;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.5rem;
    width: 100%;
    text-align: center;
  }
`;

const NavItem = styled.li<{ active: boolean }>`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 100%;
    height: 0.125rem;
    background-color: ${props => props.active ? '#4c51bf' : 'transparent'};
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: #4c51bf;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 0;
  }
`;

const NavLinkText = styled.span`
  color: #2d3748;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4c51bf;
  }
`; 