/* ============================================================
   PROJECT DATA — local drive + github @Swxp714 (Win98 icons)
   ============================================================ */
const CATS = [
  'GAMES · MOTION / WEB 3D',
  'GAMES · UNITY / STEAM',
  'APPS & PLATFORMS',
  'BACKEND & BOTS',
  'DEV TOOLS',
  'FOUNDER & DESIGN',
  'WEB / SITES'
];

const PROJECTS = [
  { id:'shadow-box', cat:0, featured:true, icon:'game_cam', title:'Shadow Box', sub:'모션인식 1v1 온라인 쉐도우복싱',
    tag:'WEB 3D · MOTION · MP', stack:['React','Three.js','MediaPipe','PartyKit'],
    desc:'웹캠으로 펀치·페인트(틱톡식 페이크) 모션을 인식해 1대1 실시간 대전. 로우폴리 셀셰이딩 아레나에 얼굴 텍스처를 자동 매핑하고, PartyKit으로 실시간 네트워킹을 구현했습니다.',
    url:'https://github.com/Swxp714/shadow-box-web' },
  { id:'moto-stunt', cat:0, featured:true, icon:'game1', title:'Moto Stunt', sub:'웹캠 손 그립으로 모는 윌리 스턴트 레이서',
    tag:'WEB 3D · MOTION · P2P', stack:['R3F','MediaPipe','PeerJS'],
    desc:'손 제스처(그립)로 조향과 윌리를 제어하는 웹캠 레이싱. 베이어 디더·컬러 양자화·심도 포커스를 직접 구현한 픽셀아트 포스트프로세싱 엔진과 PeerJS P2P 트레일 데스매치를 탑재했습니다.',
    url:'https://github.com/Swxp714/moto-stunt' },
  { id:'mobile-dm', cat:0, featured:true, icon:'game2', title:'Mobile DM', sub:'5v5 캐주얼 모바일 FPS (웹)',
    tag:'WEB 3D · MULTIPLAYER', stack:['TypeScript','R3F','Rapier','Colyseus'],
    desc:'브라우저에서 돌아가는 5대5 데스매치 FPS. Rapier 물리와 Colyseus 권위 서버 네트워킹을 React-Three-Fiber 렌더링과 직접 통합했습니다.',
    url:'https://github.com/Swxp714/mobile-dm' },
  { id:'motionrace', cat:0, icon:'racing', title:'Motion Race', sub:'모션 컨트롤 3D 아이템 레이싱',
    tag:'WEB 3D · MOTION', stack:['R3F','Rapier','MediaPipe'],
    desc:'핸드트래킹 듀얼축 조향과 물리 기반 아이템 시스템을 결합한 Crossy Road식 캐주얼 레이싱.',
    url:'https://github.com/Swxp714/motionrace' },
  { id:'fpps', cat:0, icon:'game3', title:'FPPS', sub:'브라우저 FPS + P2P 멀티플레이',
    tag:'WEBGL · P2P', stack:['Vanilla JS','WebGL','PeerJS'],
    desc:'무기 progression(권총·소총·샷건), ADS·린 메커닉, AI 봇, 스코어보드를 갖춘 브라우저 FPS. PeerJS 기반 P2P 멀티플레이.',
    url:'https://github.com/Swxp714' },
  { id:'wheelie-racer', cat:0, icon:'game1', title:'Wheelie Racer', sub:'모션+키보드 스턴트 레이싱',
    tag:'WEB · MOTION', stack:['JavaScript','MediaPipe','Ursina'],
    desc:'윌리 각도(85°) 임계 실패 판정의 아케이드 스턴트 레이싱. 1~8인 P2P 멀티와 사용자 맵 에디터를 지원합니다.',
    url:'https://github.com/Swxp714/wheelie-racer' },

  { id:'airdrive', cat:1, featured:true, icon:'game2', title:'AIRDRIVE', sub:'Unity 6 제트기 공중전 (Steam)',
    tag:'UNITY · STEAM · MOTION', stack:['Unity 6','C#','URP','MediaPipe','Steamworks'],
    desc:'7개 테마 세트로 조합하는 49종 파츠 생태계와, 시간 기반 무한 난이도 디렉터(로그라이크), 웹캠 포즈 입력을 갖춘 제트기 공중전. Service Locator + Event Bus 아키텍처, Addressables, Steam 클라우드 세이브까지 직접 설계·구현한 플래그십 프로젝트.',
    url:'https://github.com/Swxp714' },
  { id:'trans-misson', cat:1, featured:true, icon:'design', title:'Trans-Misson', sub:'웹캠 RGB/CMY 색매칭 갤러리 슈터',
    tag:'UNITY · MOTION', stack:['Unity 6','MediaPipe','VContainer','ShaderGraph'],
    desc:'양손을 RGB/CMY 진영으로 나눠 색을 매칭해 쏘는 갤러리 슈터. 3페이즈 PRISM·4페이즈 ILLUMINATI 보스 패턴과 실시간 포즈 트래킹을 구현했습니다.',
    url:'https://github.com/Swxp714' },
  { id:'blinkwatch', cat:1, icon:'horror', title:'blinkwatch', sub:'웹캠 공포게임 (Steam 상업 출시 목표)',
    tag:'UNITY · HORROR', stack:['Unity','Webcam','Tauri'],
    desc:'깜빡임·고개·손을 웹캠으로 인식하는 1인칭 고정형 공포 게임. 스팀 상업 출시를 목표로 개발 중.',
    url:'https://github.com/Swxp714' },

  { id:'calinone', cat:2, featured:true, icon:'calendar', title:'캘인원 Cal-in-One', sub:'미니멀 올인원 캘린더·집중 iOS 앱',
    tag:'iOS · PRODUCT', stack:['Swift','SwiftUI','WidgetKit','ActivityKit'],
    desc:'Apple HIG 기반 풀 디자인 시스템을 갖춘 미니멀 캘린더 앱. 기획/개발/디자인 AI 서브에이전트 팀을 직접 오케스트레이션해 설계·구현했습니다.',
    url:'https://github.com/Swxp714' },
  { id:'lrocket', cat:2, icon:'platform', title:'LRocket', sub:'개발팀용 올인원 협업 플랫폼',
    tag:'FULL-STACK · PLATFORM', stack:['NestJS','Next.js','PostgreSQL','Prisma','Socket.io','WebRTC'],
    desc:'채팅·캘린더·프로젝트 보드·드라이브·이슈 트래커·화이트보드·Git 연동·AI 코파일럿 8개 모듈을 통합한 협업 플랫폼. E2E 암호화 설계, 1~10인 개발팀 타깃.',
    url:'https://github.com/Swxp714' },
  { id:'collab-board', cat:2, icon:'app', title:'collab-board', sub:'실시간 협업 화이트보드',
    tag:'REALTIME · CANVAS', stack:['Next.js 16','React 19','Fabric.js','Supabase'],
    desc:'rough.js 손그림 스트로크와 페이지 플립을 갖춘 실시간 협업 화이트보드 프로토타입.',
    url:'https://github.com/Swxp714' },
  { id:'videoedithelper', cat:2, icon:'racing', title:'VideoEditHelper', sub:'데스크탑 영상편집 유틸리티',
    tag:'DESKTOP · TOOL', stack:['Python','PyQt5','ONNX Runtime'],
    desc:'ONNX 음성 분리 모델을 탑재한 PyQt5 데스크탑 영상편집 보조 툴. 프로젝트/출력/캐시 구조와 다크 테마 UI.',
    url:'https://github.com/Swxp714' },

  { id:'discord-biz', cat:3, icon:'bot', title:'Discord Business Bot', sub:'엔터프라이즈 디스코드 봇 + 웹 대시보드',
    tag:'BACKEND · BOT', stack:['Node.js','discord.js v14','Express','SQLite','Cloudinary'],
    desc:'티켓 시스템·이벤트 스케줄러·이미지 보드·파일 저장소·대화 로그를 모듈형으로 제공. Express 웹 대시보드와 함께 VPS에서 직접 운영(동접 1k~5k 설계).',
    url:'https://github.com/Swxp714' },
  { id:'attendance-bot', cat:3, icon:'docs', title:'Attendance Bot', sub:'디스코드 출석 관리 봇 + Flask 대시보드',
    tag:'BACKEND · BOT', stack:['Python','discord.py','Flask','SQLite'],
    desc:'버튼 UI로 출근/중간퇴근/퇴근을 기록하고, 한국 공휴일(음력·대체공휴일)을 자동 반영. Flask 웹 대시보드에서 월별 리포트·CSV 내보내기 제공.',
    url:'https://github.com/Swxp714/attendance-bot' },
  { id:'startup-alert', cat:3, icon:'backend', title:'Startup Alert', sub:'정부 창업지원금 자동 수집·알림',
    tag:'BACKEND · AUTOMATION', stack:['FastAPI','Discord','PostgreSQL'],
    desc:'기업마당·K-Startup API를 크롤링해 관련도 스코어링으로 필터링하고, 스케줄 수집 후 디스코드로 알림. Railway 배포.',
    url:'https://github.com/Swxp714' },

  { id:'claude-hooks', cat:4, icon:'tools', title:'Claude Hooks', sub:'Claude Code → Slack 팀 알림 시스템',
    tag:'DEV TOOLING', stack:['Python','Bash','Slack API'],
    desc:'세션·플랜·파일 변경을 추적해 의미 있는 작업만 필터링하고 git 메타데이터와 함께 Slack에 보고. 팀 실사용 중인 자체 제작 도구.',
    url:'https://github.com/Swxp714' },
  { id:'figma-mcp', cat:4, icon:'tools', title:'Cursor × Figma MCP', sub:'AI로 Figma 디자인을 자동화하는 브리지',
    tag:'MCP · AI TOOLING', stack:['TypeScript','MCP','Bun'],
    desc:'Claude/Cursor로 대량 디자인 편집·컴포넌트 인스턴스 전파·프로토타입 플로우 변환을 수행하는 MCP 브리지(오픈소스 기반으로 독립 배포 환경 구성).',
    url:'https://github.com/Swxp714' },

  { id:'bwtokki', cat:5, featured:true, icon:'startup', title:'검은토끼흰토끼', sub:'체감형 게임 스타트업 · 공동창업(아트/개발)',
    tag:'STARTUP · FOUNDER', stack:['Game Studio','Art Direction','Steam'],
    desc:'웹캠 포즈 인식 게임 "AIR DRIVE"를 만드는 스타트업의 공동창업자(아트·개발). 게임의 아트 디렉션, UI/UX, 파츠·전투 시스템 개발을 담당하고 G-STAR 전시 빌드 제작 등 출시 준비를 함께 진행했습니다.',
    url:'https://blacktokkiwhitetokki.com/' },
  { id:'art-direction', cat:5, icon:'design', title:'Art Direction System', sub:'기획서→3단계 아트 디렉팅 워크플로우',
    tag:'DESIGN SYSTEM', stack:['Art Direction','Design Docs'],
    desc:'스타일 방향 → 리서치 번들 → DESIGN.md 산출로 이어지는 아트 디렉팅 파이프라인. 50+ 브랜드 디자인 시스템을 카테고리화한 awesome-design-md 라이브러리를 구축·운용합니다.',
    url:'https://github.com/Swxp714' },

  { id:'blacktokkiwhitetokki.com', cat:6, icon:'site', title:'blacktokkiwhitetokki.com', sub:'검은토끼흰토끼 공식 웹사이트',
    tag:'WEBSITE · FIREBASE', stack:['Firebase Hosting','Firestore','Web'],
    desc:'검은토끼흰토끼의 공식 웹사이트를 직접 제작·운영. Firebase Hosting + Firestore 기반.',
    url:'https://blacktokkiwhitetokki.com/' },
  { id:'coreal.it', cat:6, icon:'site', title:'coreal.it', sub:'Coreal 스튜디오 웹사이트',
    tag:'WEBSITE · FRONTEND', stack:['Web','Frontend'],
    desc:'Coreal 스튜디오의 공식 웹사이트를 직접 제작했습니다.',
    url:'https://coreal.it/' }
];

/* ============================================================
   WINDOW MANAGER
   ============================================================ */
let zTop = 30;
const taskItems = document.getElementById('taskItems');
const openWins = new Map();

function focusWin(win){
  win.style.zIndex = ++zTop;
  document.querySelectorAll('.task-item').forEach(t=>t.classList.remove('active'));
  const t = openWins.get(win.id);
  if(t) t.classList.add('active');
}

function openWin(id){
  const win = document.getElementById(id);
  if(!win) return;
  win.style.display = 'flex';
  win.classList.remove('minimized');
  focusWin(win);
  if(!openWins.has(id)){
    const btn = document.createElement('button');
    btn.className = 'task-item active';
    btn.textContent = win.querySelector('.title').textContent;
    btn.onclick = ()=>{
      if(win.classList.contains('minimized')){ win.classList.remove('minimized'); focusWin(win); }
      else if(parseInt(win.style.zIndex)===zTop){ win.classList.add('minimized'); btn.classList.remove('active'); }
      else focusWin(win);
    };
    taskItems.appendChild(btn);
    openWins.set(id, btn);
  } else focusWin(win);
}

function closeWin(win){
  win.style.display='none';
  win.classList.remove('minimized');
  const btn = openWins.get(win.id);
  if(btn){ btn.remove(); openWins.delete(win.id); }
}

document.querySelectorAll('.window').forEach(win=>{
  win.addEventListener('pointerdown', ()=>focusWin(win));
  win.querySelector('[data-close]')?.addEventListener('click', e=>{e.stopPropagation();closeWin(win);});
  win.querySelector('[data-mini]')?.addEventListener('click', e=>{
    e.stopPropagation();
    win.classList.add('minimized');
    openWins.get(win.id)?.classList.remove('active');
  });
  win.querySelector('[data-print]')?.addEventListener('click', e=>{e.stopPropagation();window.print();});
  makeDraggable(win);
});

document.querySelectorAll('.icon').forEach(ic=>{
  ic.addEventListener('click', ()=>openWin(ic.dataset.open));
});
document.getElementById('startBtn').addEventListener('click', ()=>openWin('about'));

/* ---------- dragging ---------- */
function makeDraggable(win){
  const bar = win.querySelector('.titlebar');
  let ox=0, oy=0, dragging=false;
  bar.addEventListener('pointerdown', e=>{
    if(e.target.closest('button')) return;
    dragging=true;
    const r = win.getBoundingClientRect();
    ox = e.clientX - r.left; oy = e.clientY - r.top;
    win.style.left = r.left+'px'; win.style.top = r.top+'px';
    bar.setPointerCapture(e.pointerId);
    focusWin(win);
  });
  bar.addEventListener('pointermove', e=>{
    if(!dragging) return;
    let x = e.clientX - ox, y = e.clientY - oy;
    x = Math.max(0, Math.min(x, window.innerWidth - 60));
    y = Math.max(0, Math.min(y, window.innerHeight - 60));
    win.style.left = x+'px'; win.style.top = y+'px';
  });
  bar.addEventListener('pointerup', e=>{ dragging=false; bar.releasePointerCapture(e.pointerId); });
}

/* ---------- populate projects (grouped) ---------- */
const grid = document.getElementById('projGrid');
CATS.forEach((catName, ci)=>{
  const inCat = PROJECTS.filter(p=>p.cat===ci);
  if(!inCat.length) return;
  const head = document.createElement('div');
  head.className='proj-cat';
  head.textContent = catName;
  grid.appendChild(head);
  inCat.forEach(p=>{
    const card = document.createElement('div');
    card.className='proj-card';
    card.innerHTML =
      `<img class="ico" src="./icons/${p.icon}.png" alt="" draggable="false">
       <h4>${p.title}</h4><p>${p.sub}</p><span class="tag">${p.tag}</span>`;
    card.onclick = ()=>openDetail(p);
    grid.appendChild(card);
  });
});

/* ---------- resume featured list ---------- */
const rp = document.getElementById('resumeProjects');
PROJECTS.filter(p=>p.featured).forEach(p=>{
  const li = document.createElement('li');
  li.innerHTML = `<b>${p.title}</b> — ${p.sub} <span>· ${p.stack.join(', ')}</span>`;
  rp.appendChild(li);
});

function openDetail(p){
  document.getElementById('pdTitle').textContent = p.id.toUpperCase();
  document.getElementById('pdBody').innerHTML = `
    <div class="pd-head"><img class="pd-ico" src="./icons/${p.icon}.png" alt="" draggable="false"><h3>${p.title}</h3></div>
    <p class="pd-sub">${p.sub}</p>
    <div class="stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
    <p class="desc">${p.desc}</p>
    <a class="link-btn" href="${p.url}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> 사이트 / 코드 보기</a>`;
  openWin('projDetail');
}

/* ---------- clock ---------- */
function tick(){
  const d = new Date();
  document.getElementById('clock').textContent =
    `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}
tick(); setInterval(tick, 10000);

/* ---------- boot + default windows ---------- */
window.addEventListener('load', ()=>{
  setTimeout(()=>{
    document.getElementById('boot').classList.add('gone');
    openWin('projects');
    openWin('about');
  }, 2200);
});
