import type { ServiceSlug } from "@/data/services";
import type { ServiceIntent } from "@/data/serviceIntent";

export const serviceIntentExtra: Partial<Record<ServiceSlug, ServiceIntent>> = {
  academy: {
    focus: "학원 폐원·이전 때 강의실 가벽, 유리파티션, 방음재, 칠판·고정가구와 교실별 전기·통신을 정리하고 임대차 원상복구 범위를 맞추는 작업에 초점을 둡니다.",
    differsFrom: [
      { slug: "study-cafe", title: "스터디카페철거와의 차이", text: "스터디카페는 1인 좌석부스, 키오스크·출입통제, 좌석별 전기와 무인설비 비중이 높고 학원은 강의실 칸막이와 수업공간 복구가 중심입니다." },
      { slug: "commercial-store", title: "상가철거와의 차이", text: "일반 상가보다 학원은 여러 강의실의 가벽·문·유리와 교실별 전기·통신이 반복되므로 폐원 일정과 원상복구 범위를 함께 확인해야 합니다." }
    ]
  },
  office: {
    focus: "사무실 퇴거 시 유리·경량파티션, OA바닥, 카펫, 전산·통신배선과 임차인이 증설한 전기설비를 빌딩 관리규정에 맞춰 원상복구하는 작업을 다룹니다.",
    differsFrom: [
      { slug: "commercial-store", title: "상가철거와의 차이", text: "상가철거는 업종별 설비와 간판까지 폭넓게 다루지만 사무실은 파티션, OA바닥, 전산배선과 빌딩 공용부 반출규정의 비중이 더 큽니다." },
      { slug: "pc-room", title: "PC방철거와의 차이", text: "PC방은 좌석마다 밀집된 전기·LAN, 이중바닥과 냉난방 설비가 핵심이고 일반 사무실은 회의실·업무공간 파티션과 OA설비 중심입니다." }
    ]
  },
  house: {
    focus: "단독·다가구 등 주택 현장에서 내부 마감과 설비뿐 아니라 건물 구조, 골목 차량진입, 인접 건물과의 거리 등 주거 현장 조건을 함께 확인하는 철거에 초점을 둡니다.",
    differsFrom: [
      { slug: "apartment", title: "아파트철거와의 차이", text: "아파트는 공동주택 내부 인테리어 철거와 관리사무소·승강기·작업시간 규정이 핵심이고 주택은 독립 건물의 접근성과 구조 조건을 더 넓게 확인합니다." },
      { slug: "interior", title: "내부철거와의 차이", text: "건물은 유지하고 천장·벽·바닥 등 내부 마감만 걷어내는 작업이라면 내부철거 페이지가 더 가깝습니다." }
    ]
  },
  apartment: {
    focus: "아파트 리모델링 전 주방·욕실·바닥·천장·붙박이가구를 철거하면서 관리사무소 신고, 승강기와 공용부 보양, 소음 작업시간을 함께 맞추는 작업에 초점을 둡니다.",
    differsFrom: [
      { slug: "house", title: "주택철거와의 차이", text: "주택은 독립 건물의 구조와 골목·차량 접근조건까지 고려하는 경우가 많고 아파트는 공동주택 내부철거와 관리규정 준수가 중심입니다." },
      { slug: "interior", title: "내부철거와의 차이", text: "내부철거는 상가·사무실·주거를 포괄하는 넓은 개념이고 아파트철거는 욕실·주방 공정과 승강기 보양·작업시간 같은 공동주택 조건을 구체적으로 다룹니다." }
    ]
  },
  karaoke: {
    focus: "노래방의 다수 룸, 방음벽·흡음재, 음향·모니터 장비, 천장 환기덕트와 소방설비를 구분해 해체하고 원상복구하는 작업에 초점을 둡니다.",
    differsFrom: [
      { slug: "commercial-store", title: "상가철거와의 차이", text: "노래방은 일반 상가보다 룸별 벽체와 방음·흡음재가 많아 폐기물량과 해체공정이 달라질 수 있고 음향·환기설비의 선반출도 중요합니다." },
      { slug: "academy", title: "학원철거와의 차이", text: "두 업종 모두 칸막이가 많을 수 있지만 노래방은 두꺼운 방음구조와 음향·환기설비가 핵심이고 학원은 강의실 가벽과 교육시설 원상복구가 중심입니다." }
    ]
  },
  "pet-shop": {
    focus: "펫샵·애견미용 매장의 진열·판매공간과 미용욕조, 급배수, 드라이설비, 케이지·고정가구를 구분해 철거하고 원상복구하는 작업에 초점을 둡니다.",
    differsFrom: [
      { slug: "retail-store", title: "매장철거와의 차이", text: "용품 판매 위주의 매장은 일반 매장철거와 비슷하지만 미용욕조·세척공간과 급배수 설비가 있다면 펫샵철거에서 설비 복구까지 함께 확인해야 합니다." },
      { slug: "commercial-store", title: "상가철거와의 차이", text: "일반 상가 원상복구보다 펫샵은 욕조·배수·드라이설비와 동물 관리공간의 고정시설 여부가 철거범위를 결정하는 중요한 항목입니다." }
    ]
  }
};

export function getExtraServiceIntent(slug: ServiceSlug) {
  return serviceIntentExtra[slug];
}
