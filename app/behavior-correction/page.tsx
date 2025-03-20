"use client";

import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Head from 'next/head';

export const metadata = {
  title: '유기견 행동 교정법 | 반려견 성격 테스트',
  description: '유기견에게 자주 나타나는 행동 문제와 효과적인 교정 방법을 알아보세요. 분리불안, 공격성, 과도한 짖음, 화장실 문제 등 다양한 행동 문제에 대한 긍정적 강화 훈련 방법을 제공합니다.',
  keywords: ['유기견 행동 교정', '강아지 행동 문제', '분리불안 해결', '반려견 공격성', '과도한 짖음', '화장실 훈련', '반려견 행동 교정'],
};

export default function BehaviorCorrection() {
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
        <Title>유기견에게 자주 있는 행동과 교정법</Title>
        
        <Introduction>
          유기견들은 과거의 경험이나 트라우마로 인해 다양한 행동 문제를 보일 수 있습니다. 
          이러한 행동은 단순한 나쁜 습관이 아닌 불안, 두려움, 스트레스의 표현일 수 있으므로, 
          인내심을 갖고 긍정적인 방법으로 접근하는 것이 중요합니다. 
          
          동물행동학 연구에 따르면 유기견의 약 70-80%는 최소 한 가지 이상의 행동 문제를 보이며, 이는 생존을 위한 적응 메커니즘인 경우가 많습니다. 예를 들어, 음식을 빼앗긴 경험이 있는 강아지는 음식을 지키려는 공격성을 보일 수 있고, 장기간 고립된 경험이 있는 강아지는 분리불안을 겪을 수 있습니다. 이러한 행동들은 단순히 '고치는' 것이 아니라, 강아지가 이제 안전하다는 것을 배우고 새로운 대처 방식을 발달시키도록 도와주는 과정이 필요합니다.
          
          행동 교정 과정에서 가장 중요한 것은 처벌이 아닌 이해와 일관성입니다. 최신 동물행동학은 강압적 훈련 방법이 일시적으로 행동을 억제할 수 있지만, 장기적으로는 불안과 공격성을 증가시킬 수 있다고 경고합니다. 반면 긍정적 강화 기반 접근법은 강아지의 정서적 건강을 보존하면서 행동 변화를 이끌어낼 수 있습니다.
          
          이 페이지에서는 유기견에게 흔히 나타나는 행동 문제와 그 교정법을 알아봅니다.
        </Introduction>
        
        <BehaviorSection>
          <BehaviorTitle>1. 분리불안</BehaviorTitle>
          <BehaviorDescription>
            혼자 남겨질 때 짖거나, 파괴적인 행동, 배변 실수, 과도한 침 흘림 등의 증상을 보입니다. 
            버려진 경험으로 인한 불안감이 주된 원인입니다. 특히 유기견의 약 40-50%가 경험하는 이 문제는 단순한 '나쁜 행동'이 아닌 강아지가 느끼는 진짜 공포와 불안의 표현입니다. 신경학적 연구에 따르면 분리불안을 겪는 강아지의 뇌는 실제 공포와 유사한 반응을 보이므로, 이를 '관심 끌기'나 '고집'으로 오해해서는 안 됩니다. 분리불안은 유기견이 이전에 버려진 경험이나 불안정한 애착 형성으로 인해 발생할 수 있으며, 특히 여러 가정을 전전했거나 보호소에서 오랜 시간을 보낸 강아지에게 더 흔합니다.
          </BehaviorDescription>
          
          <SolutionContainer>
            <SolutionTitle>교정 방법:</SolutionTitle>
            <List>
              <ListItem><strong>점진적인 혼자 있는 시간 늘리기</strong> - 분리불안 교정의 핵심은 '체계적 탈감작'입니다. 강아지가 불안을 느끼기 전 단계(보통 30초~1분)부터 시작하여 성공 경험을 쌓아가며 점진적으로 시간을 늘려야 합니다. 이 과정에서 중요한 것은 강아지가 불안 증상을 보이기 전에 돌아오는 것입니다. 초기에는 하루에 여러 번의 짧은 세션을 연습하는 것이 효과적이며, 각 단계는 최소 3-5회 성공적으로 수행한 후에만 난이도를 높이세요. 이 방법이 효과적인 이유는 강아지의 두뇌가 '혼자 있음 = 불안'이라는 기존 연관성 대신 '혼자 있음 = 안전함'이라는 새로운 연관성을 형성하게 되기 때문입니다. 보통 심각한 분리불안의 완전한 해소에는 2-6개월이 소요될 수 있습니다.</ListItem>
              <ListItem><strong>출입 의식 단순화</strong> - 유기견은 보호자의 출입 과정에서 나타나는 신호(열쇠 소리, 신발 신기, 코트 입기 등)를 불안의 트리거로 학습할 수 있습니다. 이러한 연관성을 약화시키기 위해 출입 시 과도한 인사나 작별 인사를 피하고, 감정적인 어조 대신 차분하고 일상적인 태도를 유지하세요. 특히 귀가 시 과도하게 흥분된 반응은 분리를 더 극적인 경험으로 인식하게 만들어 불안을 강화할 수 있습니다. 출발 신호를 탈감작하기 위해 열쇠를 들거나 신발을 신는 등의 행동을 실제로 외출하지 않고 무작위로 수행하여 이러한 신호와 실제 분리 사이의 연관성을 약화시키는 연습도 효과적입니다.</ListItem>
              <ListItem><strong>안전한 공간 마련</strong> - 유기견에게 안전하고 편안한 공간을 제공하는 것은 분리불안 관리의 중요한 부분입니다. 콩(Kong) 장난감과 같은 지속적인 자극을 제공하는 간식 장난감은 보호자의 부재 동안 긍정적인 경험을 만들어주며, 강아지의 두뇌를 활성화시켜 불안에 집중하는 대신 놀이에 집중하게 합니다. 적절한 패딩과 커버가 있는 편안한 침대, 강아지의 체온을 반영하는 온열 매트, 보호자의 냄새가 있는 옷 등은 심리적 안정감을 제공합니다. 일부 강아지들은 방이나 크레이트보다 더 넓은 엑스펜(확장 가능한 울타리)에서 더 편안함을 느끼며, 다른 강아지들은 그 반대일 수 있으므로 여러 옵션을 시도해보는 것이 좋습니다.</ListItem>
              <ListItem><strong>운동과 정신적 자극</strong> - 충분한 신체적, 정신적 자극은 강아지의 전반적인 불안 수준을 낮추고 스트레스 호르몬인 코르티솔을 감소시킵니다. 집을 비우기 전 30-60분의 활발한 운동(산책, 달리기, 공놀이 등)은 불안 에너지를 사전에 해소하고 피로감을 유도하여 분리 중 휴식할 가능성을 높입니다. 또한 노즈워크, 퍼즐 토이, 간단한 훈련 세션 등 정신적 자극은 두뇌의 신경 연결을 활성화하고 도파민(행복 호르몬)을 증가시켜 불안에 대한 내성을 높입니다. 그러나 출발 직전의 격렬한 활동은 오히려 강아지를 과도하게 흥분시켜 불안을 악화시킬 수 있으므로, 출발 30분 전에는 조용한 활동으로 전환하는 것이 좋습니다.</ListItem>
              <ListItem><strong>데스틴/어댑틸 등 진정 제품 활용</strong> - 페로몬 제품(어댑틸), 카밍 티셔츠(썬더셔츠), 허브 보조제(L-테아닌, 트립토판) 등은 약물적 개입 없이 분리불안 증상을 완화하는 데 도움이 될 수 있습니다. 개 어미가 분비하는 천연 페로몬을 모방한 어댑틸은 과학적 연구를 통해 스트레스 관련 행동을 감소시키는 효과가 입증되었으며, 확산기, 스프레이, 목걸이 형태로 제공됩니다. 압박 셔츠는 부드러운 압력을 통해 신경계를 진정시키는 효과가 있습니다(인간의 아기를 감싸주는 효과와 유사). 이러한 제품들은 단독으로 완전한 해결책이 되지는 않지만, 행동 수정 프로그램과 함께 사용하면 강아지가 새로운 행동을 학습하는 동안 불안 증상을 관리하는 데 도움이 됩니다.</ListItem>
              <ListItem><strong>심각한 경우 전문가 상담</strong> - 중증~심각한 분리불안(자해, 탈출 시도, 극도의 침흘림 등)은 행동 전문 수의사나 자격을 갖춘 동물행동 전문가의 도움이 필수적입니다. 이러한 경우 임상적 접근이 필요하며, 때로는 약물 치료가 행동 수정 프로그램의 효과를 높이는 데 중요한 역할을 합니다. 전문가는 세로토닌 재흡수 억제제(SSRIs), 삼환계 항우울제, 베타 차단제 등의 약물을 처방할 수 있으며, 이는 강아지의 불안 기준선을 낮추어 행동 수정에 더 잘 반응하게 합니다. 약물은 중단 없이 최소 4-6주간 지속적으로 사용해야 효과가 나타나며, 약물 단독보다는 행동 수정 프로그램과 병행할 때 성공률이 3배 이상 높아집니다. 비용이 걱정된다면, 많은 동물보호단체나 입양기관에서 입양 후 행동 상담을 무료 또는 할인된 가격으로 제공하는 경우가 있으니 문의해보세요.</ListItem>
            </List>
          </SolutionContainer>
        </BehaviorSection>
        
        <BehaviorSection>
          <BehaviorTitle>2. 공격성</BehaviorTitle>
          <BehaviorDescription>
            으르렁거림, 짖음, 물기 시도 등의 행동으로 나타납니다. 
            주로 두려움, 소유물 방어, 영역 방어, 과거의 부정적 경험 등이 원인입니다.
          </BehaviorDescription>
          
          <SolutionContainer>
            <SolutionTitle>교정 방법:</SolutionTitle>
            <List>
              <ListItem>원인 파악하기: 어떤 상황에서 공격성이 나타나는지 주의 깊게 관찰하세요.</ListItem>
              <ListItem>트리거 관리: 공격성을 유발하는 상황을 초기에는 피하고, 점진적으로 노출하세요.</ListItem>
              <ListItem>대체 행동 훈련: 문제 상황에서 앉기, 눕기 등 다른 행동을 할 수 있도록 훈련하세요.</ListItem>
              <ListItem>탈감작: 문제가 되는 자극에 점진적으로 노출시키며 긍정적 경험과 연결시키세요.</ListItem>
              <ListItem>처벌 금지: 공격성에 대한 처벌은 상황을 악화시킬 수 있으므로 절대 피하세요.</ListItem>
              <ListItem>전문가 도움 필수: 공격성 문제는 위험할 수 있으므로 행동 전문가의 도움을 반드시 구하세요.</ListItem>
            </List>
          </SolutionContainer>
        </BehaviorSection>
        
        <BehaviorSection>
          <BehaviorTitle>3. 과도한 짖음</BehaviorTitle>
          <BehaviorDescription>
            불필요하게 많이 짖거나 오랜 시간 짖는 행동입니다. 
            주의 끌기, 외로움, 불안, 두려움, 영역 방어 등 다양한 이유로 발생할 수 있습니다.
          </BehaviorDescription>
          
          <SolutionContainer>
            <SolutionTitle>교정 방법:</SolutionTitle>
            <List>
              <ListItem>원인 파악: 어떤 상황에서 짖는지, 어떤 종류의 짖음인지 확인하세요.</ListItem>
              <ListItem>"조용" 명령 훈련: 조용해졌을 때 즉시 보상하여 조용히 있는 것이 좋다는 것을 가르치세요.</ListItem>
              <ListItem>무시하기: 주의를 끌기 위한 짖음은 완전히 무시하고, 조용해졌을 때만 관심을 주세요.</ListItem>
              <ListItem>적절한 운동과 자극: 지루함으로 인한 짖음을 줄이기 위해 충분한 활동을 제공하세요.</ListItem>
              <ListItem>진정 활동: 명상 음악, 마사지 등으로 불안으로 인한 짖음을 줄일 수 있습니다.</ListItem>
              <ListItem>바크 컨트롤 장치: 심각한 경우, 수의사와 상담 후 초음파 바크 컨트롤 장치 사용을 고려해볼 수 있습니다.</ListItem>
            </List>
          </SolutionContainer>
        </BehaviorSection>
        
        <BehaviorSection>
          <BehaviorTitle>4. 화장실 문제</BehaviorTitle>
          <BehaviorDescription>
            실내 배변, 표시 행동, 특정 장소에서만 배변하는 등의 문제가 나타날 수 있습니다. 
            훈련 부족, 불안, 영역 표시, 의료적 문제 등이 원인일 수 있습니다.
          </BehaviorDescription>
          
          <SolutionContainer>
            <SolutionTitle>교정 방법:</SolutionTitle>
            <List>
              <ListItem>건강 문제 확인: 갑작스러운 배변 문제는 의료적 원인이 있을 수 있으므로 수의사 검진을 받으세요.</ListItem>
              <ListItem>기본 배변 훈련: 규칙적인 외출과 올바른 장소에서 배변 시 즉각적인 보상으로 훈련하세요.</ListItem>
              <ListItem>사고 지역 철저히 청소: 특수 효소 클리너로 냄새를 완전히 제거하세요.</ListItem>
              <ListItem>규칙적인 일정: 식사, 물, 산책 시간을 일정하게 유지하여 배변 패턴을 예측 가능하게 만드세요.</ListItem>
              <ListItem>크레이트 훈련: 일부 강아지들에게는 크레이트 훈련이 화장실 훈련에 도움이 될 수 있습니다.</ListItem>
              <ListItem>표시 행동은 중성화: 영역 표시는 중성화 수술로 줄일 수 있습니다.</ListItem>
            </List>
          </SolutionContainer>
        </BehaviorSection>
        
        <BehaviorSection>
          <BehaviorTitle>5. 파괴적 행동</BehaviorTitle>
          <BehaviorDescription>
            가구, 신발, 물건 등을 씹거나 파괴하는 행동입니다. 
            지루함, 과도한 에너지, 분리불안, 스트레스, 치아 문제 등이 원인일 수 있습니다.
          </BehaviorDescription>
          
          <SolutionContainer>
            <SolutionTitle>교정 방법:</SolutionTitle>
            <List>
              <ListItem>충분한 운동: 매일 적절한 운동으로 과도한 에너지를 소모시키세요.</ListItem>
              <ListItem>정신적 자극: 퍼즐 장난감, 훈련 세션 등으로 지루함을 달래세요.</ListItem>
              <ListItem>대체 물건 제공: 씹어도 되는 적절한 장난감과 뼈를 충분히 제공하세요.</ListItem>
              <ListItem>물리적 접근 제한: 귀중한 물건은 닿지 않는 곳에 보관하고, 필요시 특정 공간을 제한하세요.</ListItem>
              <ListItem>쓴맛 스프레이 사용: 씹으면 안 되는 물건에 쓴맛 스프레이를 뿌려 씹지 않도록 유도할 수 있습니다.</ListItem>
              <ListItem>활동 전환: 파괴적 행동을 발견했을 때 "안돼"라고 말하기보다 좋아하는 장난감으로 관심을 돌리세요.</ListItem>
            </List>
          </SolutionContainer>
        </BehaviorSection>
        
        <BehaviorSection>
          <BehaviorTitle>6. 소음 공포증</BehaviorTitle>
          <BehaviorDescription>
            천둥, 폭죽, 진공청소기 등의 큰 소리에 과도한 두려움을 보이는 것입니다. 
            숨기, 떨림, 헥헥거림, 과도한 침 흘림, 파괴적 행동 등으로 나타납니다.
          </BehaviorDescription>
          
          <SolutionContainer>
            <SolutionTitle>교정 방법:</SolutionTitle>
            <List>
              <ListItem>안전한 은신처 제공: 소음으로부터 멀리 떨어진 조용한 공간을 마련해주세요.</ListItem>
              <ListItem>소리 탈감작: 낮은 볼륨부터 시작해 점진적으로 소리에 노출시키며 긍정적 경험과 연결시키세요.</ListItem>
              <ListItem>반응 관리: 과도하게 달래거나 위로하기보다는 침착하게 행동하세요.</ListItem>
              <ListItem>압박 옷/썬더셔츠: 일부 강아지들은 압박옷을 입으면 안정감을 느낍니다.</ListItem>
              <ListItem>백색 소음: 다른 소음을 차단하기 위해 부드러운 배경 소음을 제공하세요.</ListItem>
              <ListItem>심각한 경우 약물 치료: 수의사와 상담 후 불안 완화제를 사용할 수 있습니다.</ListItem>
            </List>
          </SolutionContainer>
        </BehaviorSection>
        
        <BehaviorSection>
          <BehaviorTitle>7. 리드(목줄) 공격성</BehaviorTitle>
          <BehaviorDescription>
            산책 중 목줄을 착용했을 때만 다른 강아지나 사람에게 공격적인 행동을 보이는 것입니다. 
            좌절감, 두려움, 보호자 보호 욕구 등이 원인일 수 있습니다.
          </BehaviorDescription>
          
          <SolutionContainer>
            <SolutionTitle>교정 방법:</SolutionTitle>
            <List>
              <ListItem>적절한 장비 사용: 일반 목줄보다 하네스가 통제력과 안정감을 높이는 데 도움이 됩니다.</ListItem>
              <ListItem>거리 유지: 다른 강아지나 사람과 충분한 거리를 유지하며 산책하세요.</ListItem>
              <ListItem>주의 전환: 다른 강아지가 다가올 때 간식으로 주의를 돌리세요.</ListItem>
              <ListItem>긍정적 연관성 만들기: 다른 강아지를 볼 때마다 간식을 주어 긍정적 연관성을 형성하세요.</ListItem>
              <ListItem>리드를 느슨하게: 긴장된 리드는 강아지의 불안감을 증가시킬 수 있습니다.</ListItem>
              <ListItem>점진적 노출: 통제된 환경에서 점진적으로 다른 강아지와의 만남을 연습하세요.</ListItem>
            </List>
          </SolutionContainer>
        </BehaviorSection>
        
        <Conclusion>
          유기견의 행동 문제를 교정할 때 가장 중요한 것은 인내심과 일관성입니다. 행동 변화는 하루아침에 
          이루어지지 않으며, 보통 몇 주에서 몇 개월이 걸릴 수 있습니다. 긍정적 강화와 일관된 훈련 방법을 
          통해 점진적으로 접근하는 것이 중요합니다. 심각한 행동 문제의 경우, 행동 전문 수의사나 
          전문 훈련사의 도움을 구하는 것이 가장 효과적인 해결책일 수 있습니다.
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

const BehaviorSection = styled.section`
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.5rem;
  
  &:last-of-type {
    border-bottom: none;
  }
`;

const BehaviorTitle = styled.h2`
  font-size: 1.5rem;
  color: #5a67d8;
  margin-bottom: 0.75rem;
`;

const BehaviorDescription = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #2d3748;
  font-style: italic;
`;

const SolutionContainer = styled.div`
  background-color: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const SolutionTitle = styled.h3`
  font-size: 1.1rem;
  color: #4c51bf;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
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