const supportPrograms = [
  {
    id: 1,
    title: "청년 스마트농업 창업 기반 지원",
    source: "전북도 농업기술원",
    region: "전북",
    category: "스마트팜",
    stage: "예비창업",
    ageGroup: "청년",
    entityType: "개인",
    score: 92,
    period: "2026.05.01 - 2026.06.15",
    summary:
      "스마트팜 창업 준비 단계의 청년 농업인을 대상으로 시설 구축, 장비 도입, 교육을 묶어서 지원하는 사업입니다.",
    eligibility: [
      "전북 지역 거주 또는 사업 예정자",
      "만 18세 이상 39세 이하 청년",
      "예비창업 또는 영농 3년 이내 초기 창업자",
      "개인 신청 가능"
    ],
    subsidy: {
      amount: "최대 5,000만원",
      ratio: "보조 70% / 자부담 30%",
      scope: "스마트팜 시설, 센서 장비, 컨설팅, 기초 교육"
    },
    howToApply: [
      "시군 농업기술센터 사전 상담 진행",
      "사업계획서와 영농 준비 현황서 작성",
      "온라인 또는 방문 접수",
      "선정 후 교육 이수 및 장비 도입 계획 확정"
    ],
    documents: [
      "사업계획서",
      "주민등록등본",
      "농업경영체 등록 확인서 또는 예정 증빙",
      "교육 수료 또는 창업 준비 증빙자료"
    ],
    references: [
      { label: "전북도 농업기술원 안내", url: "https://www.nongsaro.go.kr/" },
      { label: "농사로 통합 포털", url: "https://www.nongsaro.go.kr/portal/portalMain.ps?menuId=PS00001" }
    ],
    adPartners: ["그린센서코리아", "청년농 금융파트너"],
    keywords: ["청년", "스마트팜", "창업", "전북", "시설"]
  },
  {
    id: 2,
    title: "시설원예 ICT 융복합 확산사업",
    source: "익산시 농업기술센터",
    region: "전북",
    category: "스마트팜",
    stage: "초기운영",
    ageGroup: "청년",
    entityType: "법인",
    score: 88,
    period: "2026.05.10 - 2026.06.28",
    summary:
      "환경센서와 원격제어 장비 도입을 통해 시설원예 농가의 운영 효율을 높이기 위한 ICT 확산 사업입니다.",
    eligibility: [
      "전북 지역 시설원예 운영 농가 또는 법인",
      "스마트팜 장비 도입 계획이 있는 사업자",
      "농업경영체 또는 법인 등록 완료"
    ],
    subsidy: {
      amount: "최대 8,000만원",
      ratio: "보조 50% / 자부담 50%",
      scope: "환경센서, 자동제어, 원격 모니터링 시스템"
    },
    howToApply: [
      "센터 상담 후 사업 대상 적합성 검토",
      "장비 도입 견적서 및 설치 계획 제출",
      "법인 서류와 운영 실적 자료 접수",
      "현장 심사 후 최종 선정"
    ],
    documents: ["법인등기부등본", "사업자등록증", "견적서", "운영 실적 자료"],
    references: [
      { label: "익산시 농업기술센터", url: "https://www.nongsaro.go.kr/" },
      { label: "농사로 ICT 참고", url: "https://www.nongsaro.go.kr/portal/portalMain.ps?menuId=PS00001" }
    ],
    adPartners: ["그린센서코리아"],
    keywords: ["ICT", "시설원예", "전북", "법인", "스마트팜"]
  },
  {
    id: 3,
    title: "원예 농가 시설 현대화 자금 지원",
    source: "전남도청",
    region: "전남",
    category: "원예",
    stage: "성장단계",
    ageGroup: "중장년",
    entityType: "개인",
    score: 86,
    period: "2026.04.20 - 2026.05.30",
    summary:
      "하우스 개선, 냉난방 보강, 생산성 향상 장비 교체를 지원하는 시설 현대화 중심 사업입니다.",
    eligibility: [
      "전남 지역 원예 농가",
      "기존 재배시설을 운영 중인 개인 농업인",
      "성장단계 농가 또는 확대 재배 예정자"
    ],
    subsidy: {
      amount: "최대 1억원",
      ratio: "융자 및 보조 혼합",
      scope: "하우스 개보수, 냉난방, 관수, 시설 보강"
    },
    howToApply: [
      "사업 대상 여부 사전 확인",
      "시설 개선 계획서 작성",
      "농지 및 시설 현황 자료 제출",
      "심사 후 사업비 배정"
    ],
    documents: ["시설 현황 사진", "개선 계획서", "농업경영체 등록 확인서"],
    references: [
      { label: "전남도 농정 정보", url: "https://www.nongsaro.go.kr/" },
      { label: "농사로 원예 정보", url: "https://www.nongsaro.go.kr/portal/portalMain.ps?menuId=PS00001" }
    ],
    adPartners: ["에코하우스 시설"],
    keywords: ["원예", "시설", "전남", "현대화", "하우스"]
  },
  {
    id: 4,
    title: "축산 스마트환경 제어 지원사업",
    source: "경상북도 축산기술연구소",
    region: "경북",
    category: "축산",
    stage: "초기운영",
    ageGroup: "중장년",
    entityType: "법인",
    score: 87,
    period: "2026.05.03 - 2026.06.05",
    summary:
      "축사 내 온습도, 환기, 환경 모니터링 장비를 도입해 운영 효율과 생산성을 높이는 사업입니다.",
    eligibility: [
      "경북 지역 축산 법인",
      "축사 자동화 또는 환경개선 계획 보유",
      "사육 데이터 관리 체계 도입 희망 사업자"
    ],
    subsidy: {
      amount: "최대 1억 2,000만원",
      ratio: "보조 60% / 자부담 40%",
      scope: "환기, 온습도 제어, 모니터링 설비"
    },
    howToApply: [
      "축산기술연구소 또는 시군 축산부서 상담",
      "설치 예정 장비 목록 및 도입 사유 제출",
      "법인 운영자료 및 사육 현황 접수",
      "기술 심사 후 선정"
    ],
    documents: ["법인서류", "축사 현황 자료", "설비 도입 계획서"],
    references: [
      { label: "농사로 축산 정보", url: "https://www.nongsaro.go.kr/portal/portalMain.ps?menuId=PS00001" }
    ],
    adPartners: ["라이브스톡 테크"],
    keywords: ["축산", "자동화", "경북", "법인", "환기"]
  },
  {
    id: 5,
    title: "농산물 가공 창업 패키지",
    source: "충남농업기술원",
    region: "충남",
    category: "가공유통",
    stage: "예비창업",
    ageGroup: "청년",
    entityType: "개인",
    score: 85,
    period: "2026.05.12 - 2026.06.20",
    summary:
      "가공 창업 준비자를 대상으로 시제품 제작, 브랜딩, 판로 컨설팅까지 묶어서 지원하는 패키지 사업입니다.",
    eligibility: [
      "충남 지역 예비창업자",
      "농산물 가공 또는 식품 브랜딩 준비자",
      "청년 창업 우대"
    ],
    subsidy: {
      amount: "최대 3,000만원",
      ratio: "보조 80% / 자부담 20%",
      scope: "시제품 제작, 포장 디자인, 판로 컨설팅"
    },
    howToApply: [
      "창업 아이템 사전 검토",
      "사업계획서와 제품 콘셉트 제출",
      "면접 또는 발표 심사",
      "선정 후 컨설팅 및 제작 연계"
    ],
    documents: ["사업계획서", "제품 설명서", "신분증 사본"],
    references: [
      { label: "충남농업기술원 안내", url: "https://www.nongsaro.go.kr/" }
    ],
    adPartners: ["팜비즈 컨설팅"],
    keywords: ["가공", "창업", "충남", "브랜딩", "청년"]
  },
  {
    id: 6,
    title: "스마트팜 고도화 법인 지원사업",
    source: "농림축산식품부 연계사업",
    region: "전북",
    category: "스마트팜",
    stage: "성장단계",
    ageGroup: "중장년",
    entityType: "법인",
    score: 84,
    period: "2026.05.08 - 2026.06.30",
    summary:
      "기존 스마트팜 법인의 데이터 기반 운영 고도화와 생산 자동화 설비 확장을 지원합니다.",
    eligibility: [
      "스마트팜 운영 실적이 있는 법인",
      "확장 또는 고도화 계획이 있는 전북 사업자",
      "설비 투자 여력이 있는 성장단계 법인"
    ],
    subsidy: {
      amount: "최대 2억원",
      ratio: "보조 40% / 자부담 60%",
      scope: "자동화 설비, 데이터 시스템, 분석 장비"
    },
    howToApply: [
      "사업 공고 확인 후 사전 컨설팅",
      "법인 재무자료와 운영자료 제출",
      "확장 계획과 기대 효과 제시",
      "심사 후 단계별 집행"
    ],
    documents: ["법인 재무자료", "운영 실적표", "고도화 계획서"],
    references: [
      { label: "농림축산식품부 관련 안내", url: "https://www.nongsaro.go.kr/" }
    ],
    adPartners: ["그린센서코리아"],
    keywords: ["스마트팜", "법인", "고도화", "전북", "자동화"]
  }
];

const adPartners = [
  {
    name: "그린센서코리아",
    category: "스마트팜",
    description: "센서, 제어, 데이터 대시보드를 제공하는 스마트팜 장비·솔루션 기업"
  },
  {
    name: "청년농 금융파트너",
    category: "스마트팜",
    description: "청년농과 예비창업자 대상 자금 계획 및 대출 연계 상담"
  },
  {
    name: "에코하우스 시설",
    category: "원예",
    description: "시설원예 현대화와 냉난방, 구조 보강 시공 전문"
  },
  {
    name: "라이브스톡 테크",
    category: "축산",
    description: "축사 환경 제어, 자동화 장비, 모니터링 서비스 제공"
  },
  {
    name: "팜비즈 컨설팅",
    category: "가공유통",
    description: "가공 창업, 브랜딩, 판로 연결, 사업계획서 고도화 컨설팅"
  }
];

const form = document.querySelector("#search-form");
const queryInput = document.querySelector("#query");
const resultTitle = document.querySelector("#result-title");
const resultCount = document.querySelector("#result-count");
const aiSummaryTitle = document.querySelector("#ai-summary-title");
const aiSummaryBody = document.querySelector("#ai-summary-body");
const supportList = document.querySelector("#support-list");
const searchTags = document.querySelector("#search-tags");
const quickButtons = document.querySelectorAll("[data-quick-query]");

function includesKeyword(query, item) {
  if (!query) return false;

  const target = [
    item.title,
    item.source,
    item.region,
    item.category,
    item.stage,
    item.ageGroup,
    item.entityType,
    item.summary,
    ...item.keywords
  ]
    .join(" ")
    .toLowerCase();

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .some((keyword) => target.includes(keyword));
}

function matchesFilter(item, profile) {
  const checks = [
    profile.region === "전체" || item.region === profile.region,
    profile.category === "전체" || item.category === profile.category,
    profile.stage === "전체" || item.stage === profile.stage,
    profile.ageGroup === "전체" || item.ageGroup === profile.ageGroup,
    profile.entityType === "전체" || item.entityType === profile.entityType,
    !profile.query || includesKeyword(profile.query, item)
  ];

  return checks.every(Boolean);
}

function getScore(item, profile) {
  let total = item.score;

  if (profile.region !== "전체" && item.region === profile.region) total += 14;
  if (profile.category !== "전체" && item.category === profile.category) total += 18;
  if (profile.stage !== "전체" && item.stage === profile.stage) total += 12;
  if (profile.ageGroup !== "전체" && item.ageGroup === profile.ageGroup) total += 10;
  if (profile.entityType !== "전체" && item.entityType === profile.entityType) total += 10;
  if (includesKeyword(profile.query, item)) total += 18;

  return total;
}

function getProfile() {
  return {
    query: queryInput.value.trim(),
    region: document.querySelector("#region").value,
    category: document.querySelector("#category").value,
    stage: document.querySelector("#stage").value,
    ageGroup: document.querySelector("#ageGroup").value,
    entityType: document.querySelector("#entityType").value
  };
}

function updateSummary(profile, items) {
  const conditions = [
    profile.query,
    profile.region !== "전체" ? profile.region : "",
    profile.category !== "전체" ? profile.category : "",
    profile.stage !== "전체" ? profile.stage : "",
    profile.ageGroup !== "전체" ? profile.ageGroup : "",
    profile.entityType !== "전체" ? profile.entityType : ""
  ].filter(Boolean);

  if (items.length === 0) {
    resultTitle.textContent = "조건에 맞는 추천 결과를 찾지 못했습니다";
    resultCount.textContent = "0건 추천";
    aiSummaryTitle.textContent = "검색 조건을 조금 넓혀보는 것이 좋습니다";
    aiSummaryBody.textContent =
      "지역이나 분야를 전체로 바꾸거나 검색어를 더 짧게 입력하면 더 많은 후보를 찾을 수 있습니다.";
    return;
  }

  resultTitle.textContent = profile.query
    ? `"${profile.query}"에 대한 맞춤형 지원사업 결과`
    : "AI가 조건에 맞는 지원사업을 정리했습니다";
  resultCount.textContent = `${items.length}건 추천`;
  aiSummaryTitle.textContent = `${items[0].title}가 가장 적합한 후보입니다`;
  aiSummaryBody.textContent =
    `${conditions.join(" · ") || "기본 조건"} 기준으로 적합도를 계산했습니다. ` +
    `지원자격, 지원금액, 신청 절차와 참고 링크를 함께 읽으면 실제 신청 가능성을 더 빠르게 판단할 수 있습니다.`;
}

function renderTags(profile) {
  const tags = [
    profile.query,
    profile.region !== "전체" ? profile.region : "",
    profile.category !== "전체" ? profile.category : "",
    profile.stage !== "전체" ? profile.stage : "",
    profile.ageGroup !== "전체" ? profile.ageGroup : "",
    profile.entityType !== "전체" ? profile.entityType : ""
  ].filter(Boolean);

  searchTags.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
}

function renderCards(items) {
  supportList.innerHTML = items
    .map((item) => {
      const partnerBadges = item.adPartners.map((name) => `<span class="badge">${name}</span>`).join("");
      const links = item.references
        .map((link) => `<a class="link-pill" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("");

      return `
        <article class="result-card">
          <div class="result-card-top">
            <div>
              <p class="result-source">${item.source}</p>
              <h3>${item.title}</h3>
              <p class="result-summary">${item.summary}</p>
            </div>
            <div class="score-pill">${item.totalScore}점</div>
          </div>

          <div class="badge-row">
            <span class="badge">${item.region}</span>
            <span class="badge">${item.category}</span>
            <span class="badge">${item.stage}</span>
            <span class="badge">${item.ageGroup}</span>
            <span class="badge">${item.entityType}</span>
            ${partnerBadges}
          </div>

          <div class="detail-grid">
            <section class="detail-panel">
              <h4>지원자격</h4>
              <ul class="clean-list">
                ${item.eligibility.map((text) => `<li>${text}</li>`).join("")}
              </ul>
            </section>

            <section class="detail-panel">
              <h4>지원금액 및 범위</h4>
              <dl class="info-list">
                <dt>지원금액</dt>
                <dd>${item.subsidy.amount}</dd>
                <dt>지원비율</dt>
                <dd>${item.subsidy.ratio}</dd>
                <dt>지원범위</dt>
                <dd>${item.subsidy.scope}</dd>
              </dl>
            </section>

            <section class="detail-panel">
              <h4>신청 방법</h4>
              <ol class="step-list">
                ${item.howToApply.map((text) => `<li>${text}</li>`).join("")}
              </ol>
            </section>

            <section class="detail-panel">
              <h4>필요 서류 및 기간</h4>
              <dl class="info-list">
                <dt>신청기간</dt>
                <dd>${item.period}</dd>
                <dt>필요서류</dt>
                <dd>${item.documents.join(", ")}</dd>
              </dl>
            </section>
          </div>

          <div class="result-links">
            <h4>참고 링크</h4>
            <div class="link-row">${links}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderResults(profile) {
  let matches = supportPrograms.filter((item) => matchesFilter(item, profile));

  if (matches.length === 0) {
    matches = supportPrograms
      .map((item) => ({ ...item, totalScore: getScore(item, profile) }))
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 3);
  } else {
    matches = matches
      .map((item) => ({ ...item, totalScore: getScore(item, profile) }))
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 4);
  }

  updateSummary(profile, matches);
  renderTags(profile);
  renderCards(matches);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderResults(getProfile());
});

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    queryInput.value = button.dataset.quickQuery;
    renderResults(getProfile());
    document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
  });
});

renderResults({
  query: "청년 스마트팜 창업 지원",
  region: "전북",
  category: "스마트팜",
  stage: "예비창업",
  ageGroup: "청년",
  entityType: "개인"
});
