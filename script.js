const supports = [
  {
    id: 1,
    title: "청년 스마트농업 창업 기반 지원",
    region: "전북",
    category: "스마트팜",
    stage: "예비창업",
    ageGroup: "청년",
    entityType: "개인",
    score: 91,
    source: "전북도 농업기술원",
    period: "2026.05.01 - 2026.06.15",
    description: "스마트팜 시설 구축, 장비 도입, 창업 교육과 컨설팅 비용 일부를 지원하는 초기 창업형 사업입니다.",
    tags: ["청년농", "스마트팜", "창업", "교육"],
    keywords: ["청년", "스마트팜", "창업", "시설", "전북"]
  },
  {
    id: 2,
    title: "시설원예 ICT 융복합 확산사업",
    region: "전북",
    category: "스마트팜",
    stage: "초기운영",
    ageGroup: "청년",
    entityType: "법인",
    score: 88,
    source: "익산시 농업기술센터",
    period: "2026.05.10 - 2026.06.28",
    description: "환경센서, 제어장비, 원격관리 설비 도입 비용을 지원하며 법인 농가의 디지털 전환에 적합합니다.",
    tags: ["ICT", "시설원예", "법인", "장비"],
    keywords: ["ICT", "스마트팜", "시설원예", "익산", "법인"]
  },
  {
    id: 3,
    title: "원예 농가 시설 현대화 자금 지원",
    region: "전남",
    category: "원예",
    stage: "성장단계",
    ageGroup: "중장년",
    entityType: "개인",
    score: 85,
    source: "전남도청",
    period: "2026.04.20 - 2026.05.30",
    description: "하우스 개보수, 냉난방 설비, 생산성 향상 설비 교체를 지원하는 고도화 사업입니다.",
    tags: ["원예", "시설개선", "고도화"],
    keywords: ["원예", "시설", "현대화", "전남", "하우스"]
  },
  {
    id: 4,
    title: "축산 스마트환경 제어 지원사업",
    region: "경북",
    category: "축산",
    stage: "초기운영",
    ageGroup: "중장년",
    entityType: "법인",
    score: 87,
    source: "경상북도 축산기술연구소",
    period: "2026.05.03 - 2026.06.05",
    description: "축사 환경 모니터링, 환기, 온습도 자동화 장비를 지원하는 스마트 축산 연계 사업입니다.",
    tags: ["축산", "자동화", "법인"],
    keywords: ["축산", "자동화", "환기", "경북", "법인"]
  },
  {
    id: 5,
    title: "농산물 가공 창업 패키지",
    region: "충남",
    category: "가공유통",
    stage: "예비창업",
    ageGroup: "청년",
    entityType: "개인",
    score: 84,
    source: "충남농업기술원",
    period: "2026.05.12 - 2026.06.20",
    description: "농산물 가공 창업자를 위한 시제품 제작, 브랜딩, 판로 컨설팅을 포함한 패키지 지원사업입니다.",
    tags: ["가공", "브랜딩", "판로", "청년"],
    keywords: ["가공", "유통", "브랜딩", "충남", "창업"]
  },
  {
    id: 6,
    title: "스마트팜 고도화 법인 지원사업",
    region: "전북",
    category: "스마트팜",
    stage: "성장단계",
    ageGroup: "중장년",
    entityType: "법인",
    score: 86,
    source: "농림축산식품부 연계사업",
    period: "2026.05.08 - 2026.06.30",
    description: "기존 스마트팜 운영 법인을 대상으로 생산 자동화와 데이터 분석 환경 구축 비용을 지원합니다.",
    tags: ["법인", "자동화", "데이터", "고도화"],
    keywords: ["스마트팜", "법인", "자동화", "전북", "고도화"]
  },
  {
    id: 7,
    title: "청년 후계농 정착 지원 연계 프로그램",
    region: "경북",
    category: "원예",
    stage: "예비창업",
    ageGroup: "청년",
    entityType: "개인",
    score: 82,
    source: "경북도청",
    period: "2026.05.01 - 2026.06.12",
    description: "후계농 정착금, 영농기반 교육, 지역 멘토링을 함께 연결하는 청년농 지원 프로그램입니다.",
    tags: ["청년농", "정착", "멘토링"],
    keywords: ["청년", "후계농", "정착", "경북", "창업"]
  },
  {
    id: 8,
    title: "농식품 유통 디지털 전환 지원",
    region: "충남",
    category: "가공유통",
    stage: "성장단계",
    ageGroup: "중장년",
    entityType: "법인",
    score: 83,
    source: "충남도청",
    period: "2026.05.15 - 2026.06.25",
    description: "온라인 판로 확대, ERP 도입, 물류 데이터 체계화 등 유통 디지털 전환을 지원합니다.",
    tags: ["유통", "디지털", "법인"],
    keywords: ["유통", "디지털", "법인", "충남", "ERP"]
  }
];

const ads = [
  {
    title: "그린센서코리아",
    category: "스마트팜",
    description: "환경센서, 원격제어, 데이터 대시보드를 제공하는 스마트팜 전문 기업",
    tags: ["센서", "원격제어", "대시보드"]
  },
  {
    title: "팜비즈 컨설팅",
    category: "가공유통",
    description: "가공 창업, 인증, 유통 입점, 지원사업 신청 컨설팅을 함께하는 파트너",
    tags: ["가공", "인증", "신청지원"]
  },
  {
    title: "에코하우스 시설",
    category: "원예",
    description: "원예 시설 개보수와 냉난방 설비 교체를 지원하는 전문 시공사",
    tags: ["시설", "냉난방", "시공"]
  },
  {
    title: "라이브스톡 테크",
    category: "축산",
    description: "축사 환경 모니터링과 자동화 설비를 제공하는 축산 테크 기업",
    tags: ["축산", "환경제어", "자동화"]
  },
  {
    title: "청년농 금융파트너",
    category: "스마트팜",
    description: "청년농과 예비창업자를 위한 시설자금 및 운영자금 상담 서비스",
    tags: ["금융", "청년농", "상담"]
  }
];

const form = document.querySelector("#search-form");
const queryInput = document.querySelector("#query");
const supportList = document.querySelector("#support-list");
const adList = document.querySelector("#ad-list");
const resultTitle = document.querySelector("#result-title");
const resultCount = document.querySelector("#result-count");
const aiSummaryTitle = document.querySelector("#ai-summary-title");
const aiSummaryBody = document.querySelector("#ai-summary-body");
const aiReasonCard = document.querySelector("#ai-reason-card");
const searchTags = document.querySelector("#search-tags");
const trendButtons = document.querySelectorAll("[data-quick-query]");

function includesKeyword(query, item) {
  if (!query) return false;

  const target = [
    item.title,
    item.region,
    item.category,
    item.stage,
    item.ageGroup,
    item.entityType,
    item.description,
    ...item.keywords
  ]
    .join(" ")
    .toLowerCase();

  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .some((word) => target.includes(word));
}

function scoreSupport(item, profile) {
  let total = item.score;

  if (profile.region !== "전체" && item.region === profile.region) total += 14;
  if (profile.category !== "전체" && item.category === profile.category) total += 18;
  if (profile.stage !== "전체" && item.stage === profile.stage) total += 12;
  if (profile.ageGroup !== "전체" && item.ageGroup === profile.ageGroup) total += 10;
  if (profile.entityType !== "전체" && item.entityType === profile.entityType) total += 10;
  if (includesKeyword(profile.query, item)) total += 16;

  return total;
}

function matchFilters(item, profile) {
  const regionPass = profile.region === "전체" || item.region === profile.region;
  const categoryPass = profile.category === "전체" || item.category === profile.category;
  const stagePass = profile.stage === "전체" || item.stage === profile.stage;
  const agePass = profile.ageGroup === "전체" || item.ageGroup === profile.ageGroup;
  const entityPass = profile.entityType === "전체" || item.entityType === profile.entityType;
  const queryPass = !profile.query || includesKeyword(profile.query, item);

  return regionPass && categoryPass && stagePass && agePass && entityPass && queryPass;
}

function buildSummary(profile, topItem, count) {
  const parts = [];

  if (profile.region !== "전체") parts.push(`${profile.region} 지역`);
  if (profile.category !== "전체") parts.push(`${profile.category} 분야`);
  if (profile.stage !== "전체") parts.push(`${profile.stage} 단계`);
  if (profile.ageGroup !== "전체") parts.push(`${profile.ageGroup} 대상`);
  if (profile.entityType !== "전체") parts.push(`${profile.entityType} 중심`);

  const audience = parts.length > 0 ? parts.join(", ") : "전체 조건";

  aiSummaryTitle.textContent = `${audience}에 맞는 추천을 분석했습니다`;
  aiSummaryBody.textContent = topItem
    ? `검색어 "${profile.query || "조건 기반 추천"}"와 선택한 필터를 함께 반영해 ${count}건의 사업을 우선 정렬했습니다. 가장 적합한 사업은 "${topItem.title}"이며, 관련 기업도 같은 카테고리 기준으로 연결했습니다.`
    : `입력하신 조건과 완전히 일치하는 사업이 아직 없어서 가까운 조건의 사업을 중심으로 다시 탐색해보는 것이 좋습니다.`;
}

function renderReason(profile, items) {
  const top = items[0];

  if (!top) {
    aiReasonCard.innerHTML = `
      <p class="eyebrow">AI 추천 브리프</p>
      <h3>조건에 맞는 사업을 찾지 못했습니다</h3>
      <p>지역이나 분야를 전체로 넓히거나, 검색어를 더 간단하게 입력하면 탐색 범위를 넓힐 수 있습니다.</p>
    `;
    return;
  }

  const reasons = [
    profile.region !== "전체" ? `${profile.region} 지역 조건과 일치` : "지역 제한 없이 탐색",
    profile.category !== "전체" ? `${profile.category} 분야와 높은 관련도` : "복수 분야 후보 검토",
    profile.stage !== "전체" ? `${profile.stage} 단계에 적합` : "성장 단계 전체 비교",
    profile.query ? `검색어 핵심어와 매칭` : "입력한 프로필 중심 추천"
  ];

  aiReasonCard.innerHTML = `
    <p class="eyebrow">AI 추천 브리프</p>
    <h3>${top.title}를 우선 추천하는 이유</h3>
    <p>${reasons.join(", ")} 기준으로 적합도가 가장 높게 계산되었습니다. 공고 출처와 마감일을 함께 검토하고, 필요하면 같은 분야 기업과 바로 연결할 수 있도록 구성했습니다.</p>
  `;
}

function renderTags(profile) {
  const tags = [
    profile.query || "조건 기반 추천",
    profile.region,
    profile.category,
    profile.stage,
    profile.ageGroup,
    profile.entityType
  ].filter((value) => value && value !== "전체");

  searchTags.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join("");
}

function renderSupports(profile) {
  let filtered = supports.filter((item) => matchFilters(item, profile));

  if (filtered.length === 0) {
    filtered = supports
      .map((item) => ({ ...item, totalScore: scoreSupport(item, profile) }))
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 3);
  } else {
    filtered = filtered
      .map((item) => ({ ...item, totalScore: scoreSupport(item, profile) }))
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 4);
  }

  const top = filtered[0];

  resultTitle.textContent = profile.query
    ? `"${profile.query}"에 대한 AI 추천 결과`
    : "AI가 찾은 추천 지원사업";
  resultCount.textContent = `${filtered.length}건 추천`;

  buildSummary(profile, top, filtered.length);
  renderReason(profile, filtered);
  renderTags(profile);

  supportList.innerHTML = filtered
    .map(
      (item) => `
        <article class="support-card">
          <div class="support-head">
            <div>
              <p class="support-source">${item.source}</p>
              <h3>${item.title}</h3>
              <p class="support-meta">${item.region} · ${item.category} · ${item.stage} · ${item.ageGroup} · ${item.entityType}</p>
            </div>
            <div class="support-score">${item.totalScore}점</div>
          </div>
          <p class="support-description">${item.description}</p>
          <p class="support-meta">공고기간 ${item.period}</p>
          <div class="support-tags">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  renderAds(profile, filtered);
}

function renderAds(profile, matchedSupports) {
  const categories = new Set(
    matchedSupports.map((item) => item.category).filter(Boolean)
  );

  let filtered = ads.filter((item) => categories.has(item.category));

  if (profile.category !== "전체") {
    filtered = ads.filter((item) => item.category === profile.category);
  }

  if (filtered.length === 0) {
    filtered = ads.slice(0, 3);
  }

  adList.innerHTML = filtered
    .slice(0, 3)
    .map(
      (item) => `
        <article class="ad-card">
          <p class="eyebrow">관련 기업 광고</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="ad-tags">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function getProfileFromForm() {
  return {
    query: queryInput.value.trim(),
    region: document.querySelector("#region").value,
    category: document.querySelector("#category").value,
    stage: document.querySelector("#stage").value,
    ageGroup: document.querySelector("#ageGroup").value,
    entityType: document.querySelector("#entityType").value
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderSupports(getProfileFromForm());
});

trendButtons.forEach((button) => {
  button.addEventListener("click", () => {
    queryInput.value = button.dataset.quickQuery;
    renderSupports(getProfileFromForm());
    document.querySelector("#results").scrollIntoView({ behavior: "smooth" });
  });
});

renderSupports({
  query: "청년 스마트팜 창업 지원",
  region: "전북",
  category: "스마트팜",
  stage: "예비창업",
  ageGroup: "청년",
  entityType: "개인"
});
