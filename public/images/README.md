# 올바른철거 이미지 폴더

이미지 파일은 WebP를 기본으로 사용합니다.

## 폴더 구조

- `brand/` — 로고, 기본 OG 이미지
- `home/` — 홈페이지 대표 이미지
- `services/<service-slug>/` — 업종별 서비스 이미지 (`01.webp`, `02.webp`)
- `regions/<region-slug>/` — 부산 지역별 이미지 (`01.webp`)
- `guides/<guide-slug>/` — 철거 가이드 이미지 (`01.webp`, `02.webp`)
- `support/` — 폐업지원 관련 이미지
- `estimate/` — 견적 준비 관련 이미지
- `projects/` — 실제 시공사례 사진

Git은 빈 폴더를 저장하지 않으므로 각 하위 폴더에는 `.gitkeep` 파일을 둡니다.
