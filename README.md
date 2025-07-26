# 🎯 MapleStory Potential Simulator

`Made By Mukho`<br>

> 2025-07-25 Fri ~<br>

**[메이플스토리 잠재능력 시뮬레이터](https://potential-simulator.vercel.app/)** - React Native/Expo 기반 모바일 앱

## 📱 프로젝트 소개

메이플스토리의 잠재능력과 에디셔널 잠재능력 시스템을 실제 게임과 동일한 확률로 시뮬레이션할 수 있는 앱입니다. 실제 큐브 사용 경험을 제공하여 메소 사용량을 미리 예측하고 계획할 수 있습니다.<br>
현재 프로토타입 버전으로, `제네시스 무기`, `200제 장갑`, `150제 모자`, `160제 펜던트`, `150제 상의`의 잠재능력과 에디셔널 잠재능력 재설정 시뮬레이션만 제공됩니다.

### 🎮 주요 기능

- **잠재능력 시뮬레이션**: 레어~레전더리 등급의 잠재능력 옵션 시뮬레이션
- **에디셔널 시뮬레이션**: 에디셔널 잠재능력 옵션 시뮬레이션
- **실제 확률 반영**: 메이플스토리 공식 확률 데이터 적용
- **천장 시스템**: 실제 게임의 천장 시스템 구현
- **상세 통계**: 사용 메소, 시도 횟수, 등급별 통계 제공
- **로그 시스템**: 전체/잠재/에디셔널 로그 분리 관리
- **모바일 최적화**: 반응형 디자인으로 다양한 화면 크기 지원
- **이미지 캐싱**: Expo Image를 활용한 클라이언트 로컬 이미지 캐싱으로 성능 최적화

## 📸 스크린샷

### 메인 화면

![PS-main2](https://github.com/user-attachments/assets/4ccc267d-7fcd-415c-bb9b-ebe48de31d1e)

## 🛠️ 기술 스택

### Frontend

- **React Native**: 크로스 플랫폼 모바일 앱 개발
- **Expo**: 개발 환경 및 배포 도구
- **TypeScript**: 타입 안전성 보장
- **React Context API**: 전역 상태 관리
- **Expo Image**: 고성능 이미지 캐싱 및 렌더링

### 성능 최적화

- **React Hooks**: `useMemo`, `useCallback`을 활용한 렌더링 최적화
- **메모이제이션**: 불필요한 재연산 방지
- **반응형 디자인**: `Dimensions API`를 활용한 동적 스케일링
- **이미지 캐싱**: Expo Image를 활용한 자동 메모리/디스크 캐싱
- **이미지 프리로딩**: 앱 시작 시 필요한 이미지들을 미리 로드하여 UX 개선

## 📁 프로젝트 구조

```
Potential-Simulator/
├── App.tsx                 # 메인 앱 컴포넌트
├── app.json               # Expo 설정
├── package.json           # 의존성 관리
├── assets/                # 이미지 리소스
│   ├── images/
│   │   ├── poten_cube.webp
│   │   ├── addi_cube.webp
│   │   └── meso.png
│   └── *.png              # 앱 아이콘들
└── src/
    ├── components/        # UI 컴포넌트
    │   ├── PotentialSimulator.tsx  # 메인 시뮬레이터
    │   └── potential/
    │       ├── Header.tsx          # 헤더 (메뉴, 로그)
    │       ├── PotentialPanel.tsx  # 잠재능력 패널
    │       ├── StatusPanel_new.tsx # 현황 패널
    │       └── ResetButtons.tsx    # 재설정 버튼
    ├── data/              # 게임 데이터
    │   ├── potentialOptions.ts     # 잠재능력 옵션
    │   ├── additionalOptions.ts    # 에디셔널 옵션
    │   └── constants.ts            # 게임 상수
    ├── store/             # 상태 관리
    │   └── AppContext.tsx
    ├── types/             # TypeScript 타입 정의
    │   ├── common.ts
    │   └── potential.ts
    └── utils/             # 유틸리티 함수
        ├── potentialLogic.ts
        ├── potentialHooks.ts
        └── resetLogic.ts
```

## 🚀 시작하기

### 필수 요구사항

- Node.js (v16 이상)
- npm 또는 yarn
- Expo CLI

### 설치 및 실행

1. **저장소 클론**

   ```bash
   git clone https://github.com/mukhoplus/Potential-Simulator.git
   cd Potential-Simulator
   ```

2. **의존성 설치**

   ```bash
   npm install
   ```

3. **개발 서버 실행**

   ```bash
   # 개발 서버 시작
   npm start

   # 플랫폼별 실행
   npm run android  # 안드로이드
   npm run ios      # iOS
   npm run web      # 웹
   ```

## 📊 게임 데이터 상세

### 확률 시스템

- **실제 메이플스토리 확률 적용**: 넥슨 공개 확률 데이터 사용
- **실제 메이플스토리 레벨/비용 기준**: 레벨 기준 확률 및 비용 적용
- **천장 시스템**: 실제 게임과 동일한 천장 카운트

### 비용 정보 (200레벨 기준)

| 등급     | 잠재능력     | 에디셔널     |
| -------- | ------------ | ------------ |
| 레어     | 450만 메소   | 1,100만 메소 |
| 에픽     | 1,800만 메소 | 3,080만 메소 |
| 유니크   | 3,825만 메소 | 7,480만 메소 |
| 레전더리 | 4,500만 메소 | 8,800만 메소 |

### 천장 시스템

| 등급 상승       | 잠재능력 | 에디셔널 |
| --------------- | -------- | -------- |
| 레어→에픽       | 10회     | 62회     |
| 에픽→유니크     | 42회     | 152회    |
| 유니크→레전더리 | 107회    | 214회    |

## 🎨 UI/UX 특징

### 반응형 디자인

- **모바일 최적화**: 작은 화면(380px 미만)에서 90% 스케일링
- **동적 레이아웃**: 세로 모드 화면(700px 미만)에서 컴팩트 레이아웃
- **고정 헤더**: 스크롤 시에도 상단 헤더 고정

### 사용자 경험

- **직관적 인터페이스**: 게임과 유사한 디자인 패턴
- **실시간 피드백**: 즉시 확인 가능한 결과 표시
- **상세 통계**: 로그 탭으로 구분된 상세 기록
- **터치 최적화**: 모바일 터치 인터페이스에 최적화

## 🔧 성능 최적화

### React 최적화 기법

- **useMemo**: 비용이 큰 계산 결과 메모이제이션
- **useCallback**: 이벤트 핸들러 함수 메모이제이션
- **컴포넌트 분리**: 관심사 분리를 통한 재렌더링 최소화

### 메모리 관리

- **이미지 최적화**: WebP 포맷 사용으로 용량 최소화
- **자동 이미지 캐싱**: Expo Image를 통한 메모리/디스크 듀얼 캐싱
- **이미지 프리로딩**: 앱 시작 시 모든 게임 에셋을 미리 로드
- **캐시 관리**: 개발자 도구를 통한 캐시 상태 모니터링 및 정리 기능
- **상태 최적화**: 필요한 상태만 전역으로 관리
- **리스트 최적화**: 로그 렌더링 최적화

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 개인 사용 목적으로 제작되었습니다. 메이플스토리는 넥슨의 저작물입니다.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 GitHub Issues를 통해 연락해 주세요.

---

**⚠️ 주의사항**: 이 시뮬레이터는 실제 게임의 확률을 기반으로 하지만, 실제 게임 결과와 차이가 있을 수 있습니다. 참고 용도로만 사용해 주세요.
