import * as S from "./style";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Title>CHAN</S.Title>
      <S.Navbar>
        <S.Nav>
          <a>Home</a>
        </S.Nav>
        <S.Nav>
          <a>About</a>
        </S.Nav>
        <S.Nav>
          <a>Work</a>
        </S.Nav>
        <S.Nav>
          <a>Skills</a>
        </S.Nav>
        <S.Nav>
          <a>Contact</a>
        </S.Nav>
      </S.Navbar>
    </S.Wrapper>
  );
}
