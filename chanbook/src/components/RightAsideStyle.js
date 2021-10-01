import styled from "styled-components";

export const Aside = styled.aside`
    margin-top: 10px;
    padding-left: 10px;
    width: 17%;
    position: fixed;

    .asideUl {
        display: flex;
        flex-direction: column;
        height: 100%;

        li {
            min-height: 44px;
            display: flex;
            align-items: center;

            a {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 10px 10px 10px 5px;
                border-radius: 10px;
                gap: 10px;
                text-decoration: none;
                color: black;

                .more {
                    background-color: #E4E6EB;
                    border-radius: 50px;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            a:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }
            a:not(:hover) {
                transition: .2s;
            }
        }
    }

    .asideHr {
        width: 100%;
        margin: 5px 0;
    }
    .quickly {
        color: #65676B;
        font-weight: bold;
        font-size: 1.2rem;
    }
`;