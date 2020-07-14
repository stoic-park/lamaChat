## Side Project : lamaChat

https://stoic-park.github.io/lamaChat/

heroku를 통한 서버입니다. 웹 실행 후 응답이 없어도 잠시 기다리시면 서버가 작동합니다!

### 이미지

배포된 링크로 확인 가능합니다!

1. 로그인 화면
   ![login](https://user-images.githubusercontent.com/55645972/87465556-d8309500-c64f-11ea-8076-e2a144526b6a.png)

2. 채팅 화면
   ![chatscreen](https://user-images.githubusercontent.com/55645972/87465548-d49d0e00-c64f-11ea-8c3e-bbeb7d7373df.png)

### 설명

React + socket.io를 이용한 실시간 채팅 서비스입니다!

### 1.시작하기

#### client

`npm run start`

#### server(local)

`node index.js`

### 2.목표

#### basic

1. socket.io를 이용한 실시간 채팅 구현 (clear)
2. Material UI를 이용한 전체 디자인 (clear)

#### Advanced

3. 소셜 로그인 구현 ( 미구현 : 추후 예정 )
4. firebase를 이용한 웹서버 생성 ( clear: heroku로 대체 )
5. 배포 (clear)

### 3. reference

1. JavaScript Mastery 라는 유튜브 채널의 영상에서 많은 도움을 얻었습니다

- https://www.youtube.com/watch?v=ZwFA3YMfkoc&t=9s

2. socket.io 공식문서에서 기본적인 정보들을 얻었습니다.

- https://socket.io/

3. join에 관해서 김승엽닙의 미디엄 블로그에서 좋은 정보를 얻을 수 있었습니다

- https://medium.com/wasd/node-js%EC%99%80-socket-io%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B1%84%ED%8C%85-%EA%B5%AC%ED%98%84-2-ce5ac35bb007
