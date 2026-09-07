import type { ServiceSlug } from "@/data/services";

export type ServiceIntent = {
  focus: string;
  differsFrom: { slug: ServiceSlug; title: string; text: string }[];
};

export const serviceIntents: Partial<Record<ServiceSlug, ServiceIntent>> = {
  "commercial-store": {
    focus: "임대 상가 전체의 철거·원상복구를 기준으로 계약서, 공용부, 천장·벽·바닥, 설비와 간판까지 폭넓게 확인하는 페이지입니다.",
    differsFrom: [
      { slug: "retail-store", title: "매장철거와의 차이", text: "매장철거는 의류·잡화·휴대폰점처럼 판매매장의 진열장, 쇼윈도, 피팅룸과 브랜드 사인물에 더 초점을 둡니다." },
      { slug: "partial", title: "부분철거와의 차이", text: "상가 전체 원상복구가 아니라 특정 벽·바닥·천장만 남겨두고 정밀하게 철거한다면 부분철거 페이지가 더 가깝습니다." }
    ]
  },
  "retail-store": {
    focus: "판매매장의 진열장, 쇼윈도, 피팅룸, 조명 레일, 브랜드 사인물처럼 고객 공간에 설치된 집기와 마감 철거에 초점을 둡니다.",
    differsFrom: [
      { slug: "commercial-store", title: "상가철거와의 차이", text: "상가철거는 업종을 특정하지 않고 임대공간 전체의 원상복구 범위와 공용부·반출조건까지 넓게 다룹니다." },
      { slug: "unmanned-store", title: "무인점포철거와의 차이", text: "키오스크, CCTV, 출입통제와 냉동설비 비중이 높은 무인매장은 무인점포철거 페이지가 더 구체적입니다." }
    ]
  },
  "interior": {
    focus: "리모델링 전 비내력벽, 천장, 바닥, 가구와 설비 등 내부 마감을 넓게 걷어내고 다음 공정을 준비하는 내부해체에 초점을 둡니다.",
    differsFrom: [
      { slug: "partial", title: "부분철거와의 차이", text: "부분철거는 기존 공간 대부분을 유지하면서 주방, 욕실, 가벽처럼 필요한 구간만 정밀하게 제거하는 작업에 더 가깝습니다." },
      { slug: "apartment", title: "아파트철거와의 차이", text: "공동주택의 관리사무소 신고, 승강기 보양, 소음시간까지 함께 확인해야 한다면 아파트철거 페이지를 먼저 보는 편이 좋습니다." }
    ]
  },
  "partial": {
    focus: "남길 시설과 마감을 최대한 보존하면서 지정한 구간만 절단·해체하는 작업에 초점을 둡니다. 철거 경계와 보양이 핵심입니다.",
    differsFrom: [
      { slug: "interior", title: "내부철거와의 차이", text: "내부철거는 리모델링을 위해 천장·벽·바닥 등 내부 마감을 비교적 넓은 범위로 철거하는 경우를 다룹니다." },
      { slug: "commercial-store", title: "상가철거와의 차이", text: "임대 상가 전체 원상복구가 목적이라면 상가철거 페이지에서 계약·설비·간판까지 함께 확인하는 편이 적합합니다." }
    ]
  },
  "hospital": {
    focus: "의원·병원의 진료실, 의료장비, 급배수, 의료가스, 특수벽체와 방사선 관련 공간 등 의료시설 전체 철거를 다룹니다.",
    differsFrom: [
      { slug: "dental", title: "치과철거와의 차이", text: "치과는 유닛체어마다 연결된 급수·배수·에어·석션 라인과 X-ray실 차폐 구조가 핵심이라 별도 페이지로 분리했습니다." },
      { slug: "office", title: "사무실철거와의 차이", text: "의료설비 없이 파티션·OA바닥·통신 중심의 공간이라면 사무실철거 페이지가 더 적합합니다." }
    ]
  },
  "dental": {
    focus: "치과유닛, 석션, 에어라인, 급배수와 X-ray실처럼 치과에 특화된 설비를 안전하게 분리하고 원상복구하는 작업에 초점을 둡니다.",
    differsFrom: [
      { slug: "hospital", title: "병원철거와의 차이", text: "병원철거는 진료과가 다양한 의료시설 전체를 폭넓게 다루고, 치과 페이지는 유닛체어와 배관·차폐설비에 더 깊게 집중합니다." },
      { slug: "commercial-store", title: "일반 상가철거와의 차이", text: "치과는 일반 상가보다 바닥·벽 내부 설비 연결이 복잡할 수 있어 장비 이전과 설비 차단 순서를 별도로 확인해야 합니다." }
    ]
  },
  "lodging": {
    focus: "호텔·모텔·게스트하우스처럼 객실이 반복되는 숙박시설의 층별 철거, 욕실, 가구, 냉난방과 공용부 반출계획에 초점을 둡니다.",
    differsFrom: [
      { slug: "house", title: "주택철거와의 차이", text: "단독주택 전체 해체처럼 구조와 행정절차가 중심인 작업은 주택철거 페이지에서 별도로 다룹니다." },
      { slug: "commercial-store", title: "상가철거와의 차이", text: "숙박시설은 객실 수와 욕실 반복공정, 층별 폐기물 집하가 핵심이라 일반 상가보다 공정계획을 세분화해야 합니다." }
    ]
  },
  "factory": {
    focus: "생산기계, 전력, 가스, 압축공기, 배관, 덕트와 콘크리트 기초처럼 산업설비를 건축 내장재와 나눠 철거하는 데 초점을 둡니다.",
    differsFrom: [
      { slug: "warehouse", title: "창고철거와의 차이", text: "창고는 랙, 재고, 판넬, 냉장·냉동실과 차량 하역동선이 중심이고 공장은 생산설비와 설비라인 차단 비중이 더 큽니다." },
      { slug: "interior", title: "내부철거와의 차이", text: "산업설비 없이 사무공간이나 일반 내장재만 철거한다면 내부철거 범주가 더 가깝습니다." }
    ]
  },
  "warehouse": {
    focus: "랙, 적재물, 샌드위치판넬, 냉장·냉동설비, 하역장과 대형차량 동선 등 보관·물류시설의 철거에 초점을 둡니다.",
    differsFrom: [
      { slug: "factory", title: "공장철거와의 차이", text: "생산기계와 고용량 전력·배관·집진설비가 중심이라면 공장철거 페이지에서 설비 분리와 기초 철거를 확인하세요." },
      { slug: "commercial-store", title: "상가철거와의 차이", text: "창고는 넓은 면적, 랙 앵커, 판넬과 차량 상차 조건이 비용과 일정에 더 직접적인 영향을 줍니다." }
    ]
  }
};

export function getServiceIntent(slug: ServiceSlug) {
  return serviceIntents[slug];
}
