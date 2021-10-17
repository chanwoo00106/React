import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 20px 50px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    div {
        img {
            width: 100%;
        }
    }
`;