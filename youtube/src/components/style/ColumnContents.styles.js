import styled from "styled-components";

export const Wrapper = styled.div`
    gap: 10px;
    p {
        padding: 20px 0;
    }
    .constents {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .tag {
            display: flex;
            flex-direction: row;
            gap: 20px;
            
            .img {
                height: 150px;
            }
        }

    }
`;