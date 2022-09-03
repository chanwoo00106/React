import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
  padding: 0.5rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: #2d3436;
`;

export const Navbar = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: cneter;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Nav = styled.li`
  position: relative;

  &::after {
    content: "";
    width: 5px;
    height: 5px;
    background: #2f3542;
    position: absolute;
    border-radius: 100%;
    top: -5px;
    left: 50%;
    transtion: translateX(-50%);
    display: none;
  }

  &:hover {
    &::after {
      display: block;
    }
  }
`;

export const App = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;

const slide = keyframes`
  100% {
    right: 0;
  }
  0 {
    right: -60%;
  }
`;

export const AppNavbar = styled.ul`
  position: fixed;
  padding: 1rem;
  padding-right: 10%;
  top: 0;
  right: -60%;
  width: 60%;
  height: 100vh;
  list-style: none;
  background: #ecf0f1;
  animation-name: ${slide};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
`;

export const ExitBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const AppNav = styled.li`
  padding: 1rem 0;

  a:hover {
    text-decoration: underline;
  }
`;
