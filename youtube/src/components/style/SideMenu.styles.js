import styled from "styled-components";

export const Wrapper = styled.aside`
    width: 240px;
    height: 90vh;
    background-color: #ffffffff;
    padding-right: 20px;
    overflow: auto;

    li a {
        color: black;
        text-decoration: none;
        width: 100%;
        height: 40px;
        display: flex;
        gap: 20px;
        padding: 10px 20px;
        font-size: .9rem;

        &:hover {
            background-color: rgba(0,0,0,.1);
        }
    }

    hr {
        color: #E5E5E5;
        margin: 10px 0;
    }
`;