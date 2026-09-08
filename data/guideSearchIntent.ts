export type GuideSearchIntent = {
  primaryQuery: string;
  intent: "비용비교" | "폐업준비" | "원상복구" | "업종준비" | "산업시설" | "주거철거" | "부분철거" | "폐기물" | "공사준비" | "지원제도";
  goal: string;
};

export const guideSearchIntents: Record<string, GuideSearchIntent> = {
  "closure-demolition-support-2026": {
    primaryQuery: "2026 부산 폐업철거 지원금",
    intent: "지원제도",
    goal: "점포철거비 지원의 자격·신청순서·증빙을 공사 전에 확인하려는 검색"
  },
  "restoration-scope-checklist": {
    primaryQuery: "상가 원상복구 범위",
    intent: "원상복구",
    goal: "계약서와 입점 당시 상태를 기준으로 철거·존치 범위를 정하려는 검색"
  },
  "demolition-estimate-checklist": {
    primaryQuery: "부산 철거 견적 체크리스트",
    intent: "비용비교",
    goal: "여러 철거 견적서의 포함범위와 추가비용 조건을 비교하려는 검색"
  },
  "restaurant-closing-demolition": {
    primaryQuery: "부산 식당 폐업철거",
    intent: "업종준비",
    goal: "식당 폐업 시 주방·덕트·가스·배관 철거범위를 확인하려는 검색"
  },
  "convenience-store-closing-demolition": {
    primaryQuery: "부산 편의점 폐점철거",
    intent: "업종준비",
    goal: "본사·렌탈 장비와 냉장설비를 구분해 편의점 철거를 준비하려는 검색"
  },
  "karaoke-demolition-guide": {
    primaryQuery: "부산 노래방 철거",
    intent: "업종준비",
    goal: "방음벽·룸 구조·음향설비 때문에 달라지는 철거범위를 확인하려는 검색"
  },
  "cafe-closing-demolition": {
    primaryQuery: "부산 카페 폐업철거",
    intent: "업종준비",
    goal: "카페 장비·급배수·전기증설·카운터와 간판 원상복구를 준비하려는 검색"
  },
  "office-demolition-checklist": {
    primaryQuery: "부산 사무실 철거 체크리스트",
    intent: "업종준비",
    goal: "파티션·OA바닥·전기·통신과 관리규정을 확인해 사무실 철거를 준비하려는 검색"
  },
  "academy-demolition-guide": {
    primaryQuery: "부산 학원 철거",
    intent: "업종준비",
    goal: "강의실 가벽·유리파티션·소방·냉난방 조건을 확인하려는 검색"
  },
  "hospital-demolition-guide": {
    primaryQuery: "부산 병원 철거",
    intent: "업종준비",
    goal: "의료장비·급배수·전용전기·특수벽체를 구분해 병원 철거를 준비하려는 검색"
  },
  "beauty-salon-demolition-guide": {
    primaryQuery: "부산 미용실 철거",
    intent: "업종준비",
    goal: "샴푸대 배관·거울·경대·전기증설과 간판 복구를 확인하려는 검색"
  },
  "gym-demolition-guide": {
    primaryQuery: "부산 헬스장 철거",
    intent: "업종준비",
    goal: "운동기구·고무바닥·거울·샤워실과 반출조건을 확인하려는 검색"
  },
  "pc-room-demolition-guide": {
    primaryQuery: "부산 PC방 철거",
    intent: "업종준비",
    goal: "PC·책상·전기·통신·냉난방과 천장설비 철거범위를 확인하려는 검색"
  },
  "study-cafe-demolition-guide": {
    primaryQuery: "부산 스터디카페 철거",
    intent: "업종준비",
    goal: "좌석·칸막이·출입시스템·전기·통신 설비를 구분하려는 검색"
  },
  "factory-demolition-estimate-guide": {
    primaryQuery: "부산 공장 철거 견적",
    intent: "산업시설",
    goal: "기계·전기·배관·바닥기초와 대형 폐기물을 포함한 공장 철거견적을 준비하려는 검색"
  },
  "warehouse-demolition-guide": {
    primaryQuery: "부산 창고 철거",
    intent: "산업시설",
    goal: "랙·적재물·바닥·대형차량 동선을 포함해 창고 철거범위를 확인하려는 검색"
  },
  "apartment-interior-demolition-guide": {
    primaryQuery: "부산 아파트 내부철거",
    intent: "주거철거",
    goal: "관리규정·공용부 보양·소음시간과 내부철거 범위를 확인하려는 검색"
  },
  "partial-demolition-guide": {
    primaryQuery: "부산 부분철거",
    intent: "부분철거",
    goal: "전체철거 대신 남길 시설과 철거할 시설의 경계를 정하려는 검색"
  },
  "demolition-waste-guide": {
    primaryQuery: "철거 폐기물 처리",
    intent: "폐기물",
    goal: "철거 전 재사용품·폐기물 분리와 반출동선을 준비하려는 검색"
  },
  "busan-store-closure-demolition-guide": {
    primaryQuery: "부산 상가 폐업철거 준비",
    intent: "폐업준비",
    goal: "계약서 확인부터 집기 회수·견적·지원제도·인도까지 폐업철거 전체 순서를 찾는 검색"
  },
  "demolition-cost-per-pyeong-guide": {
    primaryQuery: "부산 철거 평당비용",
    intent: "비용비교",
    goal: "평당 단가가 현장마다 다른 이유와 실제 견적 구성요소를 이해하려는 검색"
  },
  "landlord-restoration-dispute-checklist": {
    primaryQuery: "상가 원상복구 분쟁",
    intent: "원상복구",
    goal: "임대인과 철거·존치·마감 범위를 공사 전에 합의해 분쟁을 줄이려는 검색"
  },
  "utility-shutoff-before-demolition": {
    primaryQuery: "철거 전 가스 전기 수도 차단",
    intent: "공사준비",
    goal: "철거 전 설비 차단과 존치·철거·마감 범위를 확인하려는 검색"
  },
  "building-management-demolition-notice": {
    primaryQuery: "상가 철거 관리실 공사신고",
    intent: "공사준비",
    goal: "작업시간·승강기·보양·상차·차량진입 등 건물 공사규정을 확인하려는 검색"
  }
};

export function getGuideSearchIntent(slug: string) {
  return guideSearchIntents[slug];
}
