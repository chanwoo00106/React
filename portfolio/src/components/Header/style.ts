import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 0.5rem 5rem;
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
