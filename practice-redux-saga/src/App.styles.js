import styled from "styled-components";

export const AppWrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  text-align: center;
  padding: 0 20px;

  .users {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(1fr, 5);
    gap: 20px;

    .user {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }
  }
`;
