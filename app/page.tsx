"use client";

import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import DogPersonalityTester from '../components/DogPersonalityTester';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <MainContainer>
        <Navbar />
        <Title>세계 강아지의 날 🐕 기념 이벤트</Title>
        <SubTitle>여러분의 강아지에게 감사 메시지를 남겨주세요!</SubTitle>
        
        <DogPersonalityTester />
        
        <EventDescription>
          <p>강아지에게 감사의 메시지를 남겨주세요! 가장 많은 감사 메시지를 받은 강아지 주인에게 특별한 선물을 드립니다.</p>
          <p>또한, 메시지 1개당 유기견 보호소에 100원씩 기부됩니다.</p>
        </EventDescription>
        
        <CreateButton href="/event/create">감사 편지 작성하기</CreateButton>
        
        <BannerContainer>
          <Iframe
            src="https://ads-partners.coupang.com/widgets.html?id=845588&template=carousel&trackingCode=AF2923947&subId=&width=780&height=90&tsource="
            width="780"
            height="90"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
          />
        </BannerContainer>

        <Footer />
      </MainContainer>
    </>
  );
}

/* ----- styled components ----- */

const MainContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ebf4ff, #c3dafe);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #4c51bf;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: #5a67d8;
  margin-bottom: 2rem;
`;

const EventDescription = styled.div`
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  line-height: 1.6;
  color: #4c51bf;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const CreateButton = styled(Link)`
  display: inline-block;
  background-color: #4c51bf;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #434190;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
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

const Iframe = styled.iframe`
  border: none;
  display: block;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© pettou. All rights reserved.</p>
      <p>문의: devspred@gmail.com</p>
      <p>이 웹사이트는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 0.875rem;
  color: #4c51bf;
`;