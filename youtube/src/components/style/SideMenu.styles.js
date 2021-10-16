import styled from "styled-components";

export const Wrapper = styled.aside`
    width: 250px;
    height: 94vh;
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
        border: 1px solid #e5e5e5;
        margin: 10px 0;
    }

    .sideTitle {
        width: 100%;
        height: 40px;
        padding: 10px 20px;
    }
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        height: 56px;
        border-radius: 8px;
        background: #ffffffff;
        width: 8px;
    }
    &:hover {
        &::-webkit-scrollbar-thumb{
            background-color: rgba(0,0,0,.1);
        }
    }

    .comment {
        padding: 20px;
        color: #606060;
        font-size: .8rem;
        gap: 20px;
        display: flex;
        flex-direction: column;
    }
`;