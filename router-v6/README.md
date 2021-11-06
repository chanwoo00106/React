# React-router-dom v6

react-router-dom 이 업데이트 되어 정리를 한 번 해보겠다.

## 변경점

- ### Switch가 사라짐

  이제부터는 Switch대신 Routes를 사용하게 됨

- ### useHistory가 사라짐

  대신에 useNavigate를 사용하게 됨<br>
  ex) navigate("/")

- ### useRouteMatch가 사라짐

  대신에 상대경로를 적는게 가능해 짐<br>
  ex)

  ```jsx
  참고로 about 앞에 /를 추가하면 진짜 about페이지로 가게됨
  <Route path="about" element={<UserAbout />} />
  <link to="about" />
  ```

- ### Route에 children이나 component 대신 element

  before

  ```jsx
  <Route path="/" component={Home} />
  <Route path="/about">
    <Home />
  </Route>
  ```

  after

  ```jsx
  <Route path="/" element={<Home />} />
  ```

- ### Route는 Routes의 직속 자식이어야 함

  말그대로 직속 자식이어야 함

- ### Route에 exect Prop이 사라짐

  이제는 Route에 기본적으로 exect가 있고 exect를 없애려면 path에 \*을 붙이면 된다

  ```jsx
  <Route path="/about/*" element={<About />} />
  ```

- ### Optional URL 파라미터가 사라짐

  전에는 파라미터 뒤에 ?를 붙이면 됐지만<br>
  지금은 Route를 두 번 쓰면 된다.<br>

  before

  ```jsx
  <Route path="/optional/:value?" element={<Optional />}>
  ```

  after

  ```jsx
  <Route path="/optional/" element={<Optional />}>
  <Route path="/optional/:value" element={<Optional />}>
  ```

- ### 새로 추가된 서브 라우트 구현

  전에는 서브 라우트를 페이지 안에서 했다면 이제는<br>
  Route의 children에 넣어주면 된다<br>
  아래와 같이 작성하면 `/user/about` 로 들어갔을 때 UserAbout 컴포넌트가 열리게 됩니다.

  ```jsx
  <Route path="/user" element={<User />}>
    <Route path="about" element={<UserAbout />} />
  </Route>
  ```

- ### NavLink에 activeStyle, activeClass가 사라짐

  before

  ```jsx
  <NavLink to="/Teemo" activeStyle={{ fontWeight: "bold" }}>
    Captain Teemo
  </NavLink>

  <NavLink to="/Teemo" activeClassName="bold">
    Captain Teemo
  </NavLink>
  ```

  after

  ```jsx
  <NavLink
    to="/Teemo"
    style={({ isActice }) => ({ fontWeight: isActive ? "bold" : "normal" })}
  >
    Captain Teemo
  </NavLink>

  <NavLink to="/Teemo" className={({isActive}) => (isAcive ? "bold" : "")}>
    Captain Teemo
  </NavLink>
  ```

대충 이번에 업데이트 된 것들을 정리해 봤는데 이것 말고도 많이 있다고 한다
