# 이정표농업 웹사이트 초안

이 저장소는 `이정표농업`의 맞춤형 농업 지원사업 추천 웹사이트 초안입니다.

## 현재 포함 내용

- 통합 검색 기반 메인 프론트 화면
- AI 탐색 브리프
- 고객 조건 기반 지원사업 추천 카드
- 지원자격, 지원금액, 신청 방법, 참고 링크 표시
- 프론트와 분리된 관리자 페이지
- 운영 에이전트 구조 문서

## 배포

이 저장소는 GitHub Pages용 GitHub Actions 워크플로우를 포함합니다.

예상 기본 배포 주소:

- `https://jhmunyp.github.io/IJPYOAgri/`

## 커스텀 도메인 계획

예정 도메인:

- `IJPYOAgri.com`

도메인을 실제 연결할 때는 GitHub Pages 설정과 DNS 레코드 연결이 완료된 다음 `CNAME` 파일을 추가하는 것을 권장합니다.

## 주요 파일

- `index.html`: 메인 화면
- `admin.html`: 관리자 페이지
- `styles.css`: 스타일
- `script.js`: 검색 및 추천 데모 로직
- `PROJECT_PLAN.md`: 서비스 기획 요약
- `AGENT_WORKFLOW.md`: 운영 에이전트 구조
