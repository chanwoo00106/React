import styled from "styled-components";

export const HeaderS = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 10px #DDDFE2;
    height: 70px;
    padding: 0 10px;
    .header-logo {
        position: relative;
        .logo-icon {
            color: #087BEA;
        }

        .search-div {
            position: absolute;
            top: 0;
            width: 82%;
            height: 100%;
            display: inline-block;

            .search {
                margin-top: 50%;
                transform: translateY(-25%);
                background: #F0F2F5;
                border-radius: 30px;
                outline: none;
                border: none;
                margin-left: 20px;
                padding: 7px 16px 9px 10px;
                text-align: left;
                height: 40px;
            }
        }
    }
    .centerUl {
        list-style: none;
        display: flex;
        gap: 100px;

        .icons {
            color: black;
        }
        .hover-icon {
            color: #1877F2;
        }
    }

    .right-icons {
        display: flex;
        align-items: center;
        width: 25%;
        justify-content: space-between;
        .right-icon {
            background-color: #E4E6EB;
            width: 50px;
            height: 50px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .user {
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 30px;
            transition: .2s;
            padding: 4px;

            .user-name {
                width: 50px;
                font-weight: bold;
            }
        }
        .user:hover, .right-icon:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;

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