## Vanilla JS SPA 구현

**목차**
- 컴포넌트
- 라우터

## Comonent 
컴포넌트는 페이지 컴포넌트와, 일반 컴포넌트 두 가지 방식으로 만들었다. 

**공통**
  - 페이지, 일반 컴포넌트 모두 요소를 반환 하도록 함.
  - 이벤트는 해당 컴포넌트에서 등록

#### 일반 컴포넌트
1.  wrapper 요소 만들기 (createElement)
2. template 만들기 
3. 요소에 template 추가 (innerHTML)
4. 이벤트 등록 (addEventListener)
5. wrapper 요소 반환 

``` javascript
function Component() {
  const $wrapper = document.createElement('div');

  const template = `<div>foo</div>`;

  $wraaper.innerHTML = template;
  $wrapper.addEventListener('click', () => console.log('foo'));

  return $wrapper;
};
```
#### 페이지 컴포넌트
- wrapper 요소 만들기 (createElement)
- 해당 페이지에 필요한 컴포넌트 등록 (append)
- wrapper 요소 반환 

``` javascript
function MainPage() {
  const $wrapper = document.createElement('div');

  $wrapper.append(
    Header(),
    OtherComponent(),
    Footer(),
  );

  return $wrapper;
}
```

## Router
**함수**
- routes
- router
- navigate
#### routes

경로와 해당 경로의 컴포넌트를 저장하는 자료구조
``` javascript
const routes = [
  { path: '/', component: LandingPage },
  { path: '/main', component: MainPage },
];
```

#### router
경로에 해당되는 페이지 컴포넌트 DOM에 삽입
1. routes에서 path에 해당하는 컴포넌트 찾기
2. '.app'  초기화 (페이지 중복 방지)
3. 페이지 컴포넌트 '.app'에 삽입
``` javascript
export const router = (routes, path) => {
  const component = routes
    .find(route => route.path === path)
    .component;
  
  $('.app').innerHTML = '';
  $('.app').append(component());
};
```

#### navigate 함수 구현
a 태그 클릭시 navigate 함수 호출

1. 페이지 요청 막기 (preventDefault)
2. target의 href 속성 값 가져오기 (getAttribute)
3. url 변경 (history.pushState) 
4. router 함수 호출 

``` javascript
export const navigate = e => {
  e.preventDefault();

  const path = e.target.getAttribute('href');
  
  window.history.pushState({}, null, path);
  router(routes, path);
};
```