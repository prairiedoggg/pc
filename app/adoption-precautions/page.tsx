"use client";

import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import Head from 'next/head';

export const metadata = {
  title: '유기견 입양 시 주의 사항 | 반려견 성격 테스트',
  description: '유기견 입양을 고려하는 분들을 위한 상세한 주의 사항을 알려드립니다. 입양 전 고려사항, 적응 기간 설정, 건강관리 준비 등 유기견 입양 시 알아야 할 중요한 정보를 제공합니다.',
  keywords: ['유기견 입양', '입양 주의사항', '유기견 적응', '유기견 건강관리', '유기견 행동 문제', '반려견 입양 준비'],
};

export default function AdoptionPrecautions() {
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
        <Title>유기견 입양 시 주의 사항</Title>
        
        <Section>
          <SectionTitle>1. 입양 전 충분한 준비와 고려</SectionTitle>
          <Paragraph>
            유기견 입양은 단순한 결정이 아닌 평생의 책임입니다. 입양하기 전 다음 사항을 반드시 고려하세요:
          </Paragraph>
          <List>
            <ListItem><strong>가족 구성원 모두의 동의가 필요합니다.</strong> - 반려견 돌봄은 가족 전체의 책임이며, 한 사람이 주도적으로 돌보더라도 다른 가족 구성원의 협조가 필수적입니다. 모두의 동의 없이 입양하면 가족 간 갈등이 생길 수 있고, 결국 유기견에게 또 다른 버려짐의 상처를 줄 수 있습니다.</ListItem>
            <ListItem><strong>최소 10-15년 이상의 장기적인 책임을 질 수 있는지 고민해보세요.</strong> - 중·소형견의 평균 수명은 10-15년, 소형견은 그 이상까지도 삽니다. 이 기간 동안 주거 환경, 경제적 상황, 가족 구성 등의 변화에도 반려견을 책임질 수 있어야 합니다. 단기적 결정이 아닌 장기적 인생 계획의 일부로 고려해야 합니다.</ListItem>
            <ListItem><strong>주거 환경이 반려견을 키우기에 적합한지 확인하세요.</strong> - 아파트의 경우 반려동물 허용 여부와 크기 제한을 확인해야 합니다. 또한 강아지가 충분히 활동할 수 있는 공간과 안전한 환경(발코니 추락 위험, 유해물질 없음)이 필요합니다. 공간이 협소하다면 산책 횟수를 늘리는 등의 대안도 고려해야 합니다.</ListItem>
            <ListItem><strong>경제적 비용(식비, 의료비, 용품비 등)을 감당할 수 있는지 계산해보세요.</strong> - 한국소비자원에 따르면 반려견 1마리당 연간 평균 유지비용은 약 120만원 정도이며, 갑작스러운 질병이나 수술이 필요할 경우 수백만원의 의료비가 발생할 수 있습니다. 정기 검진, 예방접종, 질 좋은 사료, 그루밍 등의 기본 비용도 고려해야 합니다.</ListItem>
            <ListItem><strong>하루 최소 2-3시간의 시간을 강아지와 함께 보낼 수 있어야 합니다.</strong> - 반려견은 사회적 동물이므로 주인과의 상호작용이 필수적입니다. 산책, 놀이, 훈련 등에 투자할 시간이 없다면 강아지의 행동 문제와 정서적 문제가 발생할 가능성이 높아집니다. 특히 유기견은 안정감 형성을 위해 더 많은 관심과 시간이 필요합니다.</ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>2. 유기견의 특수한 상황 이해하기</SectionTitle>
          <Paragraph>
            유기견은 일반 강아지와 다른 심리적, 신체적 특성을 가지고 있을 수 있습니다:
          </Paragraph>
          <List>
            <ListItem><strong>과거의 트라우마로 인한 행동 문제가 있을 수 있습니다.</strong> - 유기견의 약 40-60%는 이전 경험에서 비롯된 심리적 외상이 있습니다. 이는 과도한 짖음, 공격성, 두려움, 분리불안 등으로 나타날 수 있으며, 이러한 행동은 처벌이 아닌 이해와 인내심으로 접근해야 합니다. 행동적 문제는 시간과 적절한 훈련으로 개선될 수 있지만, 일부는 평생 특별한 관리가 필요할 수 있습니다.</ListItem>
            <ListItem><strong>환경 적응에 더 많은 시간이 필요할 수 있습니다.</strong> - 동물행동학 연구에 따르면 유기견이 새로운 가정에 완전히 적응하는 데는 최소 3개월에서 심한 경우 1년 이상 걸릴 수 있습니다. 이 기간 동안 반려견의 진짜 성격이 서서히 드러나므로, 초기 행동만으로 성격을 판단하지 말고 충분한 적응 시간을 주어야 합니다.</ListItem>
            <ListItem><strong>사회화 경험이 부족하여 추가적인 훈련이 필요할 수 있습니다.</strong> - 강아지는 생후 3-14주 사이에 중요한 사회화 단계를 거치게 되는데, 유기견은 이 시기에 적절한 경험을 하지 못했을 가능성이 큽니다. 이로 인해 다른 동물, 사람, 소음, 다양한 환경에 대한 두려움이 있을 수 있으며, 체계적인 사회화 훈련이 필요합니다.</ListItem>
            <ListItem><strong>건강 상태에 대한 불확실성이 있을 수 있으므로 초기 건강검진이 중요합니다.</strong> - 유기견은 백신 접종 누락, 영양 결핍, 기생충 감염, 만성 질환 등의 건강 문제가 있을 수 있습니다. 입양 직후 종합 건강검진을 통해 현재 상태를 파악하고 필요한 치료를 시작하는 것이 중요합니다. 이는 추후 발생할 수 있는 더 큰 의료비용을 예방할 수 있습니다.</ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>3. 적응 기간 설정하기</SectionTitle>
          <Paragraph>
            유기견이 새로운 가정에 적응하는데 3개월 이상이 소요될 수 있습니다. 이 기간 동안은:
          </Paragraph>
          <List>
            <ListItem><strong>조용하고 안전한 공간을 제공하세요.</strong> - 유기견은 새로운 환경에 스트레스를 느낄 수 있으므로, 탈출이 불가능하고 불필요한 자극이 적은 안전한 공간이 필요합니다. 이는 강아지에게 심리적 안정감을 주고 새로운 환경에 대한 두려움을 줄이는 데 도움이 됩니다. 이 공간에는 편안한 침대, 물과 음식, 좋아하는 장난감을 함께 배치하세요.</ListItem>
            <ListItem><strong>일관된 루틴을 유지하고 갑작스러운 변화를 피하세요.</strong> - 예측 가능한 일과는 유기견에게 안정감을 제공합니다. 연구에 따르면 일관된 식사, 산책, 놀이 시간은 강아지의 스트레스 호르몬 수치를 낮추고 적응 속도를 높입니다. 갑작스러운 변화는 불안과 행동 문제를 유발할 수 있으므로, 생활 패턴의 변화가 필요하다면 점진적으로 도입하세요.</ListItem>
            <ListItem><strong>강제적인 스킨십보다 강아지가 먼저 다가올 수 있도록 기다려주세요.</strong> - 강제적인 접촉은 유기견에게 위협으로 느껴질 수 있으며, 이는 두려움과 방어적 행동을 유발할 수 있습니다. 대신 강아지가 자발적으로 접근할 때까지 기다리고, 접근했을 때 긍정적인 경험(간식, 부드러운 목소리)을 제공하여 신뢰 관계를 형성하세요. 이는 '신뢰 은행'을 쌓는 과정으로, 강아지가 사람에 대한 긍정적 연관성을 형성하게 합니다.</ListItem>
            <ListItem><strong>가족 외 방문객은 최소화하고 점진적으로 사회화를 진행하세요.</strong> - 많은 낯선 사람들의 방문은 새로운 환경에 적응하는 유기견에게 큰 스트레스가 될 수 있습니다. 최소 2-4주 동안은 방문객을 제한하고, 이후에도 한 번에 한 명씩, 조용하고 침착한 태도로 소개하세요. 방문객에게는 강아지를 쫓아다니거나 강제로 접촉하지 말고 강아지가 스스로 접근할 때까지 기다릴 것을 안내하세요.</ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>4. 건강관리 준비</SectionTitle>
          <Paragraph>
            유기견은 건강 상태가 불안정할 수 있으므로, 다음과 같은 준비가 필요합니다:
          </Paragraph>
          <List>
            <ListItem><strong>입양 직후 종합 건강검진을 받아 현재 상태를 파악하세요.</strong> - 유기견은 과거 의료 기록이 불분명하거나 부재한 경우가 많습니다. 종합 건강검진은 현재 건강 상태 파악, 잠재적 문제 조기 발견, 적절한 예방 접종 및 치료 계획 수립에 필수적입니다. 이는 장기적으로 의료비를 절약하고 반려견의 수명과 삶의 질을 향상시킵니다.</ListItem>
            <ListItem><strong>예방접종, 구충제, 기생충 검사를 진행하세요.</strong> - 동물보호소에서의 집단 생활로 인해 유기견은 다양한 감염성 질병이나 기생충에 노출되었을 가능성이 높습니다. 심장사상충, 벼룩, 진드기, 장내 기생충 등의 검사와 치료는 반려견의 건강을 위해 필수적입니다. 또한 코로나바이러스, 파보바이러스, 켄넬코프 등 전염성 질병 예방을 위한 접종도 확인해야 합니다.</ListItem>
            <ListItem><strong>중성화 수술 여부를 확인하고, 필요시 상담 후 진행하세요.</strong> - 중성화 수술은 특정 암 발생 위험 감소, 발정기 관련 스트레스 감소, 원치 않는 임신 방지, 표시 행동 감소 등 건강 및 행동적 이점이 있습니다. 이미 수술을 받지 않은 경우, 수의사와 상담하여 적절한 시기에 진행하는 것이 좋습니다. 일부 지자체는 유기견 중성화 수술 비용을 지원하는 프로그램도 있으니 확인해보세요.</ListItem>
            <ListItem><strong>피부병, 치아 문제 등 유기견에게 흔한 건강 문제에 대비하세요.</strong> - 유기견은 영양 부족, 스트레스, 불결한 환경으로 인해 피부 질환(피부염, 핫스팟, 피부 감염 등)과 치과 질환(치석, 치주염, 치아 손상)이 일반 강아지보다 3배 이상 흔합니다. 이러한 문제는 조기 발견과 치료가 비용과 고통을 줄이는 데 중요하므로, 정기적인 피부 검사와 치과 검진을 계획하세요.</ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>5. 행동 문제 대처 방법</SectionTitle>
          <Paragraph>
            많은 유기견들은 과거 경험으로 인한 행동 문제를 보일 수 있습니다:
          </Paragraph>
          <List>
            <ListItem><strong>공격성, 분리불안, 소음 공포증 등이 나타날 수 있습니다.</strong> - 연구에 따르면 유기견의 60-80%가 최소 한 가지 이상의 행동 문제를 보입니다. 이는 과거의 학대, 방치, 부적절한 사회화, 또는 반복된 보호소 경험으로 인한 것일 수 있습니다. 이러한 행동은 단순한 '나쁜 습관'이 아닌 심리적 불안정의 표현으로 이해해야 합니다. 행동 문제는 시간, 일관성, 긍정적 훈련을 통해 개선될 수 있으며, 입양 전 발생 가능한 행동 문제에 대해 마음의 준비를 하는 것이 중요합니다.</ListItem>
            <ListItem><strong>전문 훈련사의 도움을 받는 것이 효과적입니다.</strong> - 심각한 행동 문제(공격성, 극도의 두려움, 지속적인 분리불안 등)는 전문가의 도움이 필요합니다. 행동 전문 수의사나 전문 훈련사는 문제의 근본 원인을 파악하고 개별화된 행동 수정 계획을 제공할 수 있습니다. 또한 일반 반려인이 시도할 경우 악화될 수 있는 문제들도 있으므로, 전문가에게 조기에 상담하는 것이 시간과 비용을 절약하는 방법입니다.</ListItem>
            <ListItem><strong>인내심을 갖고 긍정적 강화 훈련 방법을 사용하세요.</strong> - 유기견의 행동 변화는 일반 강아지보다 2-3배 더 오랜 시간이 필요할 수 있습니다. 긍정적 강화(바람직한 행동에 대한 보상)는 처벌보다 훨씬 효과적이며, 두려움 없이 새로운 행동을 배울 수 있게 합니다. 작은 진전에도 보상하고 실패해도 인내심을 가지며, 훈련 세션은 짧고 재미있게 유지하세요. 일관성이 무엇보다 중요하므로 가족 모두가 같은 명령어와 기준을 사용해야 합니다.</ListItem>
            <ListItem><strong>처벌보다는 보상을 통한 훈련이 심리적 안정에 도움이 됩니다.</strong> - 신체적 처벌이나 고함은 유기견의 트라우마를 악화시키고 공포, 공격성, 또는 학습된 무기력을 초래할 수 있습니다. 동물행동학 연구는 처벌 기반 훈련이 단기적으로는 효과가 있어 보여도 장기적으로는 신뢰 상실과 행동 악화를 가져온다는 것을 보여줍니다. 대신 바람직한 행동을 '대체 행동'으로 가르치고 그것을 강화하는 방식으로 접근하세요.</ListItem>
          </List>
        </Section>
        
        <Section>
          <SectionTitle>6. 법적 절차 확인</SectionTitle>
          <Paragraph>
            유기견 입양 시 다음과 같은 법적 절차를 꼭 확인하세요:
          </Paragraph>
          <List>
            <ListItem><strong>정식 입양 계약서를 작성하고 보관하세요.</strong> - 입양 계약서는 유기견의 소유권 이전을 법적으로 증명하는 중요한 문서입니다. 이는 향후 발생할 수 있는 분쟁(개체 확인, 이전 주인의 반환 요구 등)에서 법적 보호를 제공합니다. 계약서에는 반려견 정보, 건강 상태, 입양 조건, 양측의 책임과 의무 등이 명시되어야 합니다. 특히 일부 보호소나 단체는 입양 후 관리와 사후 방문 조항, 파양 시 절차 등을 포함하므로 자세히 검토하세요.</ListItem>
            <ListItem><strong>동물등록(마이크로칩)을 반드시 진행하세요 (법적 의무사항).</strong> - 한국에서는 2개월 이상 반려견을 동물등록하는 것이 "동물보호법"제12조에 따른 법적 의무입니다. 미등록 시 최대 60만원의 과태료가 부과될 수 있습니다. 동물등록은 실종 시 반려견을 찾는데 핵심적인 역할을 하며, 유기 방지와 책임 소유를 촉진합니다. 등록 방법으로는 내장형 마이크로칩, 외장형 무선식별장치, 등록인식표 등이 있으며, 가장 안전하고 영구적인 방법은 마이크로칩입니다.</ListItem>
            <ListItem><strong>보호소나 단체의 사후관리 정책을 확인하세요.</strong> - 대부분의 공식 보호소와 입양 단체는 입양 후 일정 기간(보통 2주~3개월) 동안 사후관리를 진행합니다. 이는 전화 확인, 가정 방문, 사진/동영상 요청 등의 형태가 있으며, 적응 상황을 확인하고 필요한 조언을 제공하기 위함입니다. 일부 단체는 파양을 원할 경우 반드시 해당 단체에 반환해야 한다는 조항도 있으므로, 이러한 정책을 미리 이해하고 동의하는 것이 중요합니다.</ListItem>
            <ListItem><strong>반려동물 보험 가입을 고려해보세요.</strong> - 유기견은 건강 이력이 불분명하여 예상치 못한 질병이나 수술이 필요할 수 있습니다. 반려동물 보험은 갑작스러운 의료비 부담을 줄이는데 도움이 됩니다. 한국에서 제공되는 다양한 보험 상품의 보장 범위, 면책 사항, 기왕증 정책, 연령 제한 등을 비교하여 유기견에게 가장 적합한 상품을 선택하세요. 특히 일부 보험사는 입양된 유기견에게 특별 할인이나 추가 혜택을 제공하기도 합니다.</ListItem>
          </List>
        </Section>
        
        <Conclusion>
          유기견 입양은 한 생명에게 새로운 기회를 주는 소중한 결정입니다. 충분한 준비와 이해를 바탕으로 
          진심을 다해 입양을 결정한다면, 유기견과 행복한 동반자 관계를 맺을 수 있을 것입니다.
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
  margin-bottom: 2rem;
  text-align: center;
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
  padding: 1rem;
  background-color: #ebf4ff;
  border-radius: 0.5rem;
  line-height: 1.6;
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