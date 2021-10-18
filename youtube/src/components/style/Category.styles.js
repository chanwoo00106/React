import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    margin-bottom: 30px;
    
    a {
        width: 100%;
        padding: 20px;
        background-color: #ffffffff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: black;
        text-decoration: none;
        cursor: pointer;
        
        &:hover {
            background-color: rgba(0,0,0,.1);
        }
    }

    .select {
        background-color: rgba(0,0,0,.3);
    }
`;