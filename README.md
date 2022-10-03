# design-system
ㅇㅇㅇ의 디자인 시스템 입니다.
React용 presentational 컴포넌트 라이브러리를 개발/배포 할 수 있습니다.

## 디렉토리 구조
- `.storybook/`은 스토리북 관련 설정파일들이 위치합니다.
- `src/`는 라이브러리에 포함될 컴포넌트파일, 스토리파일, 테스트 파일들이 위치합니다.
- `style/`는 Tailwindcss 기반의 스타일링 파일들이 위치합니다.

## 브랜치 전략
이 패키지의 브랜치/릴리즈 전략은 Gitlab Flow를 따릅니다.

## CMD

### 의존성 모듈 설치
```bash
$ yarn install
```

### 패키지 개발 시작
```bash
$ yarn dev
```
6006번 포트로 스토리북이 열립니다.

### 패키지 빌드
```bash
$ yarn build
```
`dist` 디렉토리에 npm 패키지가 번들링 됩니다.

### 패키지 퍼블리싱
...작성중

## 다른 프로젝트에서 이 패키지 사용하기

### 레지스트리 등록
...작성중

### 패키지 설치
...작성중

이 라이브러리에 의존적인 웹 애플리케이션에서는 반드시 `dist/style/style.css`를 entry html 파일에 연결 해야 합니다.
```html
<head>
  <link
    rel="text/css"
    href="/이/라이브러리가/설치된/위치/style/style.css"
  />
</head>
```
...작성중

## 주의사항
npm 패키지 빌드시의 스타일링 코드는 `dist/style/style.css`에 번들링 됩니다.
반면, storybook 웹 앱 빌드시의 스타일링 코드는 `storybook-static/*.iframe.buddle.js`에 번들링 됩니다.
아직까지 이 차이로 인한 이슈가 리포트 되지는 않았습니다.
그러나 이것이 예상치 못한 이슈로부터 완전히 안전하다는 뜻은 아닙니다.

## Todo
### 기능 추가
- Style Dictionary로 디자인 토큰 관리
  - Figma Tokens vs Figma Design Tokens 고민중...
- SVGR
- Chromatic
- Husky, ESLint, Prettier
### CI
- 모든 commit, PR에 대하여 다음을 통과해야지만 허가 되도록 합니다.
  - ESLint linting
  - Prettier formatting
  - Jest unit test
  - Chromatic UI review
    - UI stress test
    - interaction test
    - action test
    - a11y test
- master 브랜치로부터 pre-production 브랜치로 머지시 아래 작업을 수행합니다.
  - 패키지 pre-release (학습 필요)
  - 패키지 버전 넘버 tagging (학습 필요)
- pre-production 브랜치로부터 production 브랜치로 머지시 아래 작업을 수행합니다.
  - 패키지 release (학습 필요)
  - 패키지 publish (학습 필요)
### 문서화