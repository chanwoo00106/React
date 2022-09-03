import { useState } from "react";
import * as S from "./style";
import { Bars_3, X_mark } from "@assets/index";

export default function Header() {
  const navs = ["Home", "About", "Work", "Skills", "Contact"];
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Title>CHAN</S.Title>
      <S.Navbar>
        {navs.map((nav) => (
          <S.Nav key={nav}>
            <a>{nav}</a>
          </S.Nav>
        ))}
      </S.Navbar>

      <S.App>
        <Bars_3 onClick={() => setToggle(!toggle)} />

        {toggle && (
          <S.AppNavbar>
            <S.ExitBtn>
              <X_mark onClick={() => setToggle(!toggle)} />
            </S.ExitBtn>
            {navs.map((nav) => (
              <S.AppNav key={nav}>
                <a>{nav}</a>
              </S.AppNav>
            ))}
          </S.AppNavbar>
        )}
      </S.App>
    </S.Wrapper>
  );
}
