"use client";

import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Head from 'next/head';

export const metadata = {
  title: '유기견과 친해지는 법 | 반려견 성격 테스트',
  description: '유기견과 건강한 유대관계를 형성하는 방법을 알아보세요. 안전한 환경 만들기, 인내심과 시간 주기, 일관된 루틴 유지하기 등 유기견과의 신뢰를 쌓는 효과적인 방법을 안내합니다.',
  keywords: ['유기견과 친해지는 법', '유기견 유대관계', '반려견 신뢰 형성', '유기견 적응', '반려견 행동 이해', '강아지 바디랭귀지'],
};

export default function BondingWithDogs() {
  return (
    <Container>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </Head>
      
      <Navbar />
      
      <ContentContainer>
        <Title>유기견과 친해지는 법</Title>
        
        <Introduction>
          유기견은 일반 강아지보다 신뢰 형성에 더 많은 시간과 인내가 필요합니다. 과거 트라우마나 버려진 경험으로 인해 사람에 대한 불안과 두려움이 있을 수 있기 때문입니다. 연구에 따르면 유기견의 약 70%가 새로운 가정에 적응하는 데 3개월 이상이 소요되며, 이 기간 동안 보호자의 일관된 태도와 이해가 무엇보다 중요합니다. 유기견은 과거 생존을 위해 특정한 행동 패턴과 방어 메커니즘을 발달시켰을 수 있으며, 이러한 행동들은 안전한 환경에서도 계속될 수 있습니다. 하지만 견종과 개체에 관계없이 모든 강아지는 신뢰와 안정적인 관계를 통해 변화할 수 있는 놀라운 회복력을 가지고 있습니다. 이 페이지에서는 유기견과의 건강한 유대관계를 형성하는 방법을 단계별로 안내합니다.
        </Introduction>
        
        <Section>
          <SectionTitle>1. 안전한 환경 만들기</SectionTitle>
          <SectionContent>
            <Paragraph>
              유기견이 새로운 환경에 적응하기 위해서는 안전하고 편안한 공간이 필요합니다:
            </Paragraph>
            <List>
              <ListItem><strong>반려견만의 안전한 공간을 마련해주세요.</strong> - 유기견에게는 자신만의 안전한 공간(소위 '안식처')이 심리적 안정에 필수적입니다. 이 공간은 조용하고 통행량이 적은 곳에 위치해야 하며, 편안한 침대나 담요, 좋아하는 장난감, 신선한 물이 항상 있어야 합니다. 케이지를 사용할 경우, 이를 처벌의 도구가 아닌 편안한 휴식 공간으로 인식하도록 훈련해야 합니다. 이 안전한 공간은 강아지가 압도되거나 스트레스를 받을 때 스스로 찾아갈 수 있는 '후퇴 구역'의 역할을 합니다. 연구에 따르면 이러한 안전한 공간이 있는 강아지는 코르티솔(스트레스 호르몬) 수치가 낮고 적응 속도가 빠른 것으로 나타났습니다.</ListItem>
              <ListItem><strong>처음에는 집의 한 공간만 개방하고 점진적으로 영역을 넓혀가세요.</strong> - 유기견에게 새로운 환경 전체를 한번에 접하게 하는 것은 압도적인 경험이 될 수 있습니다. 처음에는 집의 한 구역(예: 거실과 부엌)만 접근할 수 있게 하고, 그곳에 충분히 익숙해지면 점진적으로 다른 공간을 소개하세요. 이러한 점진적 노출은 '환경 적응 스트레스'를 줄이고 공간에 대한 안정감을 형성하는 데 도움이 됩니다. 문과 아기 울타리를 사용해 접근 가능한 영역을 제한하고, 새로운 공간을 소개할 때는 반드시 긍정적인 경험(간식, 놀이 등)과 연결시켜 좋은 연관성을 만들어주세요.</ListItem>
              <ListItem><strong>소음과 자극이 적은 조용한 환경을 유지하세요.</strong> - 많은 유기견들은 갑작스러운 소음이나 움직임에 민감하게 반응합니다. 특히 처음 2주 동안은 TV나 음악 볼륨을 낮게 유지하고, 문 소리, 가전제품 소리 등의 가정 내 일반적인 소음에 점진적으로 노출시키세요. 강아지가 특정 소리에 두려움을 보인다면, 소리 탈감작 훈련(소리를 매우 낮은 볼륨에서 시작해 점진적으로 높이면서 긍정적 경험과 연결)을 시도해볼 수 있습니다. 일부 강아지들에게는 클래식 음악이나 '반려동물용 진정 음악'이 불안을 줄이는 데 효과가 있다는 연구 결과도 있습니다.</ListItem>
              <ListItem><strong>낯선 사람들의 방문을 초기에는 제한하세요.</strong> - 유기견은 새로운 사람들에게 두려움이나 경계심을 보일 수 있으므로, 처음 2-4주 동안은 방문객을 최소화하는 것이 좋습니다. 방문객이 꼭 필요한 경우, 강아지에게 압력을 주지 않도록 다음 지침을 따르세요: 1) 방문객에게 강아지를 쫓아다니거나 직접 접근하지 말고 강아지가 먼저 다가올 때까지 기다리도록 안내, 2) 조용히 앉아있거나 간식을 바닥에 던져주는 등 비위협적인 상호작용 유도, 3) 시선을 직접 마주치는 것을 피하고 측면으로 앉아 체구를 작게 보이게 하기. 이러한 접근 방식은 강아지에게 사람들이 안전하고 예측 가능하다는 인식을 심어줍니다.</ListItem>
              <ListItem><strong>다른 반려동물이 있다면 천천히 소개하고, 처음에는 분리된 공간을 유지하세요.</strong> - 다른 반려동물과의 만남은 유기견에게 큰 스트레스 요인이 될 수 있으므로, 체계적이고 점진적인 접근이 필요합니다. 처음에는 문이나 울타리로 분리된 상태에서 서로의 냄새만 맡게 하고, 다음 단계로 서로 볼 수 있지만 접촉은 불가능한 상태(투명 문이나 케이지 등)로 진행하세요. 그 후에는 리드를 착용한 상태에서 짧은 만남을 시도하고, 점차 시간을 늘려가세요. 각 단계에서 두 동물 모두 편안함을 보일 때만 다음 단계로 넘어가야 합니다. 초기에는 모든 상호작용을 감독하고, 자원(장난감, 음식, 주인의 관심 등)을 두고 경쟁이 발생하지 않도록 주의하세요. 많은 경우 이러한 점진적 소개 과정은 2-3주가 걸릴 수 있습니다.</ListItem>
            </List>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>2. 인내심과 시간 주기</SectionTitle>
          <SectionContent>
            <Paragraph>
              유기견과의 신뢰 형성은 시간이 필요한 과정입니다:
            </Paragraph>
            <List>
              <ListItem>강아지가 먼저 다가올 때까지 기다려주세요.</ListItem>
              <ListItem>눈을 직접 마주치는 것은 처음에는 피하세요 (위협으로 느낄 수 있음).</ListItem>
              <ListItem>강제로 쓰다듬거나 안으려 하지 마세요.</ListItem>
              <ListItem>적응 기간은 개체에 따라 다르지만, 보통 2주~6개월 정도 소요될 수 있습니다.</ListItem>
              <ListItem>유기견이 스스로 자신의 페이스대로 적응할 수 있게 해주세요.</ListItem>
            </List>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>3. 일관된 루틴 유지하기</SectionTitle>
          <SectionContent>
            <Paragraph>
              일관된 일상은 유기견에게 예측 가능성과 안정감을 제공합니다:
            </Paragraph>
            <List>
              <ListItem>식사, 산책, 놀이 시간을 일정하게 유지하세요.</ListItem>
              <ListItem>급작스러운 환경 변화나 일정 변경을 최소화하세요.</ListItem>
              <ListItem>모든 가족 구성원이 동일한 규칙과 명령어를 사용하도록 하세요.</ListItem>
              <ListItem>반려견이 예측할 수 있는 행동 패턴을 만들어주세요.</ListItem>
            </List>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>4. 긍정적인 강화 훈련</SectionTitle>
          <SectionContent>
            <Paragraph>
              처벌이 아닌 보상 기반의 훈련 방식이 유기견에게 효과적입니다:
            </Paragraph>
            <List>
              <ListItem>간식, 칭찬, 놀이를 통한 긍정적 강화를 사용하세요.</ListItem>
              <ListItem>짧고 긍정적인 훈련 세션을 자주 반복하세요.</ListItem>
              <ListItem>화내거나 체벌하는 것은 절대 피하세요.</ListItem>
              <ListItem>기본 명령어(앉아, 기다려, 이리와)부터 천천히 시작하세요.</ListItem>
              <ListItem>성공했을 때 즉시 보상하여 행동을 강화하세요.</ListItem>
            </List>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>5. 비언어적 소통 이해하기</SectionTitle>
          <SectionContent>
            <Paragraph>
              강아지의 바디랭귀지를 이해하는 것은 유대감 형성에 중요합니다:
            </Paragraph>
            <List>
              <ListItem>꼬리, 귀, 몸의 자세를 관찰하여 감정 상태를 파악하세요.</ListItem>
              <ListItem>경직된 자세, 으르렁거림, 낮은 꼬리는 불안이나 공포의 신호입니다.</ListItem>
              <ListItem>하품, 핥기, 눈 깜빡임은 진정 신호일 수 있습니다.</ListItem>
              <ListItem>강아지가 불편해하는 징후가 보이면 즉시 공간을 주세요.</ListItem>
              <ListItem>여러분의 목소리 톤과 자세도 강아지에게 영향을 미칩니다. 부드럽고 차분한 태도를 유지하세요.</ListItem>
            </List>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>6. 특별한 유대 활동</SectionTitle>
          <SectionContent>
            <Paragraph>
              다음과 같은 활동들은 유기견과의 특별한 유대를 형성하는데 도움이 됩니다:
            </Paragraph>
            <List>
              <ListItem>규칙적인 산책은 신체적 건강뿐 아니라 정신적 안정에도 도움이 됩니다.</ListItem>
              <ListItem>터그놀이, 노즈워크 등 함께하는 놀이 시간을 마련하세요.</ListItem>
              <ListItem>마사지와 부드러운 그루밍은 신체적 접촉에 대한 긍정적 경험을 제공합니다.</ListItem>
              <ListItem>조용히 옆에 앉아 책을 읽거나 TV를 보며 함께하는 시간도 중요합니다.</ListItem>
              <ListItem>차분한 환경에서의 훈련 세션도 유대감을 강화합니다.</ListItem>
            </List>
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>7. 사회화 단계적 진행</SectionTitle>
          <SectionContent>
            <Paragraph>
              유기견의 사회화는 점진적으로 이루어져야 합니다:
            </Paragraph>
            <List>
              <ListItem>집 안에서의 안정이 형성된 후 외부 환경에 노출시키세요.</ListItem>
              <ListItem>조용한 장소부터 시작해 점점 자극이 많은 환경으로 확장하세요.</ListItem>
              <ListItem>다른 강아지와의 만남은 안전하고 통제된 환경에서 진행하세요.</ListItem>
              <ListItem>낯선 사람들을 소개할 때는 강아지가 먼저 접근할 수 있도록 하세요.</ListItem>
              <ListItem>과도한 스트레스 신호가 보이면 즉시 사회화를 중단하고 안전한 공간으로 돌아가세요.</ListItem>
            </List>
          </SectionContent>
        </Section>
        
        <Conclusion>
          유기견과의 유대관계 형성은 시간과 인내가 필요한 여정입니다. 하지만 그 과정에서 강아지의 작은 변화와 성장을 지켜보는 것은 매우 보람찬 경험이 될 것입니다. 무엇보다 중요한 것은 강아지의 페이스를 존중하고, 일관된 사랑과 안정감을 제공하는 것입니다. 
          
          많은 행동 전문가들은 유기견이 완전히 적응하고 진정한 성격을 보이기까지 최소 3개월이 필요하다고 말합니다. 이 기간 동안 보이는 행동은 '진짜' 성격이 아닌 적응 과정의 일부일 수 있음을 이해해야 합니다. 가장 중요한 것은 기대치를 현실적으로 유지하고, 작은 진전에도 기뻐하는 태도입니다.
          
          유기견을 입양한다는 것은 단순히 반려동물을 얻는 것이 아니라, 한 생명에게 두 번째 기회를 주는 것입니다. 그들의 과거 상처를 이해하고 치유하는 과정은 양방향의 변화를 가져옵니다. 여러분의 인내와 사랑을 통해 유기견은 과거의 상처를 극복하고 새로운 가족과 함께 행복한 삶을 시작할 수 있을 것입니다. 그리고 그 과정에서 보호자인 여러분도 무조건적인 사랑, 인내, 공감 능력을 배우게 될 것입니다.
        </Conclusion>
      </ContentContainer>
      
      <Footer>
        <p>© pettou. All rights reserved.</p>
        <p>문의: devspred@gmail.com</p>
      </Footer>
    </Container>
  );
}

/* ----- styled components ----- */

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right, #ebf4ff, #c3dafe);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.main`
  max-width: 800px;
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #4c51bf;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Introduction = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4c51bf;
  margin-bottom: 2rem;
  background-color: #ebf4ff;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #5a67d8;
  margin-bottom: 1rem;
  border-bottom: 2px solid #c3dafe;
  padding-bottom: 0.5rem;
`;

const SectionContent = styled.div`
  padding-left: 0.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #2d3748;
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #2d3748;
`;

const Conclusion = styled.p`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #ebf4ff;
  border-radius: 0.5rem;
  line-height: 1.7;
  color: #4c51bf;
  font-weight: 500;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: auto;
  padding: 1rem 0;
  width: 100%;
  color: #4c51bf;
  font-size: 0.875rem;
`; 