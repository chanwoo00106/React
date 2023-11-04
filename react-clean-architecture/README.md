# React Clean Architecture

✨ **이 프로젝트는 React에서 클린 아키텍처를 어떻게 적용하면 좋을지에 대해서 연구하는 프로젝트입니다** ✨

## 클린 아키텍처란

다른 블로그들을 보면 아래와 같은 이미지를 띄우면서 구구절절 설명하는데

![the clean architecture image](./md-image/clean-architecture.png)

결국 하는 말은 다 같습니다<br />

**바깥에서는 안쪽을 알 수 있지만 안쪽에서는 바깥 쪽을 알면 안된다**
**자주 바뀌는 것들은 바깥쪽으로, 바뀌지 않는 것들은 안쪽으로**

제 생각에는 이 두 가지가 핵심인 것 같습니다<br />
이렇게 해주면 디자인이 바뀌거나 웹에서 앱으로 플랫폼이 바뀌어도 대응하기가 쉽기 때문입니다<br />
이걸 보고 클린해 보인다고 해서 클린 아키텍처라고 불리고 있는 것 같습니다

## 1차 시도

ios의 프로젝트를 참고해서 만들었습니다

```
src
├── app
│   ├── nextjs app directory 입니다
├── core
│   ├── DIContainer.ts // DI를 위해 container를 만들었고 core에 위치하게 했습니다
│   └── db.ts // prisma 입니다
├── data
│   ├── auth
│   │   ├── AuthBind.ts // DI를 하기 전에 binding을 해줘야 해서 만들었습니다
│   │   ├── constants // 상수가 위치해 있습니다
│   │   │   ├── AuthErrorMessage.ts
│   │   │   └── AuthSymbols.ts
│   │   ├── dataSource // api 요청 또는 localStorage같은 다른 곳에 의존적이면서 crud를 하는 부분입니다
│   │   │   ├── AuthDataSource.ts
│   │   │   └── AuthLocalDataSource.ts
│   │   ├── dto // request, response 객체들이 있습니다
│   │   │   ├── request
│   │   │   │   └── LoginRequestDto.ts
│   │   │   └── response
│   │   │       └── LoginResponseDto.ts
│   │   ├── endpoint // 각각의 api들의 endpoint를 정의하는 부분입니다
│   │   │   └── AuthEndpoint.ts
│   │   ├── interface // 타입을 모아둔 곳입니다
│   │   │   ├── IAuthDataSource.ts
│   │   │   ├── IAuthLocalDataSource.ts
│   │   │   ├── IAuthRepository.ts
│   │   │   ├── ILoginUseCase.ts
│   │   │   └── ILogoutUseCase.ts
│   │   ├── repository // useCase에서 쉽게 사용할 수 있도록 repository로 모아두었습니다
│   │   │   └── AuthRepository.ts
│   │   └── useCase // 웹에서는 useCase만 실행하면 기능이 동작하도록 했습니다
│   │       ├── LoginUseCase.ts
│   │       └── LogoutUseCase.ts
│   └── base // data에서 추상적인 부분들을 정의했습니다
│       ├── BaseBind.ts
│       ├── CoreEndpoint.ts
│       ├── HttpClient.ts
│       ├── HttpError.ts
│       ├── LocalDataSource.ts
│       ├── Method.ts
│       ├── TokenStore.ts
│       ├── constants
│       │   ├── BaseSymbols.ts
│       │   └── CommonErrorMessage.ts
│       └── interface
│           ├── IHttpClient.ts
│           ├── ILocalDataSource.ts
│           ├── ITokenStore.ts
│           └── RequestType.ts
├── features
│   ├── main
│   │   ├── MainTemplate.tsx
│   │   └── organisms
│   │       └── LoginForm.tsx
│   └── ui
│       ├── Button.tsx
│       └── Input.tsx
├── hooks
│   └── useInjection.tsx
├── libs
│   ├── DIContext.tsx
│   └── ReactQueryProvider.tsx
└── styles
    └── globals.css
```

DI도 어떻게 성공 시키고 했지만 상태관리랑 base 부분이 아직 다듬어 지지 않은것 같습니다
상태관리는 어떻게 하면 좋을지 감이 잡히질 않고
base 부분은 그냥 data에서 global로 사용되면 다 때려박은 느낌입니다
아직 각각의 폴더에 어떤 파일이 있으면 좋을지가 명확하지 않는 느낌입니다
그냥 무작정 따라하다 망한 느낌?
하지만 비즈니스 로직을 나눌 수 있었던 건 좋았던 것 같습니다
