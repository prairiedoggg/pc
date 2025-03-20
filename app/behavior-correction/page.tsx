import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '유기견 행동 교정법 | 반려견 성격 테스트',
  description: '유기견에게 자주 나타나는 행동 문제와 효과적인 교정 방법을 알아보세요. 분리불안, 공격성, 과도한 짖음, 화장실 문제 등 다양한 행동 문제에 대한 긍정적 강화 훈련 방법을 제공합니다.',
  keywords: ['유기견 행동 교정', '강아지 행동 문제', '분리불안 해결', '반려견 공격성', '과도한 짖음', '화장실 훈련', '반려견 행동 교정'],
};

export default function BehaviorCorrection() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="title-main">유기견 행동 교정법</h1>
      
      <div className="intro-message">
        유기견은 과거의 경험과 환경으로 인해 다양한 행동 문제를 보일 수 있습니다. 이러한 문제들은 단순한 '나쁜 행동'이 아닌, 불안, 두려움, 혼란, 또는 과거 트라우마에서 비롯된 자연스러운 반응일 수 있습니다. 행동 문제를 올바르게 이해하고 접근하는 것은 유기견과의 건강한 관계 형성에 매우 중요합니다.
        
        이 페이지에서는 유기견에게 흔히 나타나는 행동 문제들과 그 원인, 그리고 인도적이고 효과적인 교정 방법을 알아보겠습니다. 모든 교정 접근법은 강압과 처벌 대신 이해와 긍정적 강화에 기반하고 있으며, 여러분과 반려견 모두에게 더 행복하고 조화로운 관계를 만들어 줄 것입니다.
      </div>
      
      <section className="section">
        <h2 className="section-title">1. 분리불안</h2>
        <p className="paragraph">
          분리불안은 유기견에게 가장 흔한 행동 문제 중 하나입니다. 버려진 경험이 있는 강아지는 다시 혼자 남겨질 것에 대한 극도의 불안과 공포를 느낄 수 있습니다.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-blue-700 mb-2">주요 증상:</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li>주인이 떠나려 할 때 과도한 불안 행동 (짖음, 울음, 공황)</li>
            <li>혼자 있을 때 파괴적 행동 (물건 파손, 긁기, 씹기)</li>
            <li>배변 훈련이 되어 있음에도 혼자 있을 때 실수</li>
            <li>탈출 시도 (문을 긁거나 창문으로 뛰어오르기)</li>
            <li>과도한 침 흘림, 헐떡임, 초조한 걸음걸이</li>
          </ul>
        </div>
        <p className="paragraph">
          <strong>원인:</strong> 분리불안은 과거의 버려진 경험, 불안정한 애착 형성, 갑작스러운 환경 변화, 또는 충분한 사회화 부족에서 비롯될 수 있습니다. 일부 품종은 유전적으로 더 취약할 수 있으며, 고령견도 불안 장애가 증가할 수 있습니다.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="font-medium text-green-700 mb-2">효과적인 교정 방법:</p>
          <ul className="list text-green-800">
            <li className="mb-2"><strong>점진적 둔감화:</strong> 출발 신호(열쇠 챙기기, 코트 입기 등)에 강아지가 반응하지 않도록 연습합니다. 이러한 신호를 자주 보여주되 실제로 떠나지 않아 신호와 떠남 사이의 연관성을 약화시킵니다.</li>
            <li className="mb-2"><strong>점진적 이별 훈련:</strong> 아주 짧은 시간(처음에는 몇 초)부터 시작해 점차 혼자 있는 시간을 늘려갑니다. 강아지가 불안 증상을 보이기 전에 반드시 돌아와야 성공적입니다.</li>
            <li className="mb-2"><strong>떠나고 돌아올 때 감정적 인사 자제:</strong> 과도한 감정적 작별/환영 인사는 떠나고 돌아오는 것이 큰 사건임을 강화시킵니다. 대신 차분하게 행동하세요.</li>
            <li className="mb-2"><strong>안전한 공간 제공:</strong> 크레이트나 특정 방을 안전하고 편안한 곳으로 만듭니다. 좋아하는 장난감, 당신의 냄새가 있는 옷, 콩 쿠션 등으로 편안함을 더하세요.</li>
            <li className="mb-2"><strong>콩나 장난감 활용:</strong> 주인이 없을 때만 특별한 간식이나 장난감(콩과 같은 음식 퍼즐)을 제공하여 긍정적인 연관성을 만듭니다.</li>
            <li className="mb-2"><strong>운동과 정신적 자극:</strong> 떠나기 전에 충분한 운동과 놀이로 에너지를 소모시키고 정신적 자극을 제공하세요.</li>
            <li><strong>심각한 경우 전문가 상담:</strong> 수의사나 동물행동 전문가와 상담하여 행동 수정 프로그램이나 필요시 약물 치료를 고려할 수 있습니다. 연구에 따르면 심각한 분리불안의 경우 행동 수정과 약물 치료의 병행이 가장 효과적입니다.</li>
          </ul>
        </div>
      </section>
      
      <section className="section">
        <h2 className="section-title">2. 공격적 행동</h2>
        <p className="paragraph">
          유기견의 공격성은 대부분 두려움에서 비롯됩니다. 과거의 학대나 트라우마 경험이 "공격이 최선의 방어"라는 학습으로 이어질 수 있습니다.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="font-medium text-blue-700 mb-2">주요 증상:</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li>으르렁거림, 이빨 드러내기, 물기</li>
            <li>특정 상황(음식 근처, 특정 사람/사물 등)에서 공격적 반응</li>
            <li>경직된 자세, 꼬리와 귀의 위치 변화</li>
            <li>직접적인 눈 맞춤과 위협적인 자세</li>
          </ul>
        </div>
        <p className="paragraph">
          <strong>원인:</strong> 공격성은 두려움, 영역 방어, 자원 보호(음식, 장난감 등), 학습된 행동, 사회화 부족, 통증이나 질병 등 다양한 원인에서 비롯될 수 있습니다. 유기견의 경우 과거 학대나 부정적 경험이 두려움 기반 공격성으로 이어지는 경우가 많습니다.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="font-medium text-green-700 mb-2">효과적인 교정 방법:</p>
          <ul className="list text-green-800">
            <li className="mb-2"><strong>전문가 상담:</strong> 공격성은 복잡하고 위험할 수 있으므로 자격을 갖춘 동물행동 전문가와 반드시 상담하세요.</li>
            <li className="mb-2"><strong>원인 파악:</strong> 공격성의 근본 원인(두려움, 영역 방어 등)을 파악하여 접근 방식을 결정합니다.</li>
            <li className="mb-2"><strong>역치 확인:</strong> 강아지가 공격적 반응을 보이기 시작하는 거리나 자극의 강도를 파악합니다.</li>
            <li className="mb-2"><strong>점진적 둔감화와 반대조건화:</strong> 역치 이하에서 시작하여 공격성을 유발하는 자극에 점진적으로 노출시키면서 긍정적 경험(고가치 간식 등)과 연결시킵니다.</li>
            <li className="mb-2"><strong>대체 행동 훈련:</strong> "앉아", "눕기" 등의 명령을 통해 문제 상황에서 공격 대신 다른 행동을 할 수 있도록 훈련합니다.</li>
            <li className="mb-2"><strong>관리와 안전:</strong> 교정 과정에서 모든 사람의 안전을 위해 적절한 관리(필요시 입마개, 리드줄 사용)를 유지합니다.</li>
            <li><strong>처벌 금지:</strong> 공격성에 대한 처벌은 두려움을 증가시켜 공격성을 악화시킬 수 있습니다. 긍정적 강화 방법만 사용하세요.</li>
          </ul>
        </div>
      </section>
      
      {/* 추가 행동 문제 섹션들 */}
      
      <div className="bg-yellow-50 p-6 rounded-lg mt-8 border-l-4 border-yellow-400">
        <h3 className="text-lg font-bold text-yellow-800 mb-3">중요한 조언</h3>
        <ul className="space-y-2 text-yellow-800">
          <li><span className="font-semibold">인내심을 가지세요.</span> - 행동 교정은 하루아침에 이루어지지 않습니다. 대부분의 경우 수주에서 수개월이 소요됩니다.</li>
          <li><span className="font-semibold">전문가의 도움을 구하세요.</span> - 심각한 행동 문제는 전문가(수의사, 동물행동 전문가)의 도움을 받는 것이 중요합니다.</li>
          <li><span className="font-semibold">항상 긍정적 강화를 사용하세요.</span> - 처벌은 공포와 불신을 키우고 문제를 악화시킬 수 있습니다.</li>
          <li><span className="font-semibold">일관성을 유지하세요.</span> - 모든 가족 구성원이 동일한 규칙과 명령어를 사용해야 합니다.</li>
          <li><span className="font-semibold">건강 문제를 먼저 배제하세요.</span> - 행동 변화의 원인이 건강 문제일 수 있으므로 수의사 검진을 먼저 받으세요.</li>
        </ul>
      </div>
      
      <p className="conclusion">
        유기견의 행동 문제는 과거 경험과 환경으로 인한 자연스러운 반응입니다. 이를 '고쳐야 할 문제'가 아닌 '이해하고 도와야 할 적응 과정'으로 바라본다면, 여러분과 반려견 모두 더 건강한 관계를 형성할 수 있습니다.
        
        인내심, 이해, 일관성, 그리고 긍정적 강화를 통해 대부분의 행동 문제는 시간이 지남에 따라 개선됩니다. 그리고 이 과정에서 여러분은 반려견과 더 깊은 유대감을 형성하게 될 것입니다. 가장 중요한 것은 여러분의 반려견이 '문제가 있는 개'가 아니라 '특별한 필요를 가진 개'라는 것을 기억하는 것입니다. 그들의 여정에 함께하는 여러분의 사랑과 헌신이 가장 강력한 치료제입니다.
      </p>
    </main>
  );
} 