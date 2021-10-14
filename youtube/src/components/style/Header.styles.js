import styled from "styled-components";

export const Wrapper = styled.div`
    height: 6vh;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .start {
        a {
            margin-left: 20px;

            .logo {
                width: 100px;
            }
        }
    }
    .center {
        height: 100%;
        width: 50%;
        max-width: 640px;
        display: flex;
        align-items: center;

        .input-wrap {
            border: 1px solid #CCCCCC;
            height: 70%;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 5px;
            gap: 5px;

    
            input {
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
            }
        }
        .search-btn {
            height: 70%;
            padding: 0 20px;
            border: 1px solid #CCCCCC;
            border-left: none;
        }
        .microphone {
            margin-left: 20px;
        }
    }

    .buttons {
        width: 200px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;