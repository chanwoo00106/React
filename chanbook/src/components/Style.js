import styled from "styled-components";

export const HeaderS = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 10px #DDDFE2;
    height: 70px;
    width: 100%;
    padding: 0 10px;
    position: fixed;
    top: 0;

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

export const Content = styled.div`
    margin: 30px 0;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    .top {
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
            color: #C9CCD1;
        }
        input {
            outline: none;
            border-radius: 50px;
            border: none;
            background-color: #E4E6E9;
            width: 100%;
            height: 40px;
            font-size: 1rem;
        }
        input:hover {
            background-color: #D2D5D8;
        }
        input:not(:hover){
            transition: .2s;
        }
        input::placeholder {
            color: #656781;
            padding-left: 20px;
        }
    }

    hr {
        width: 99%;
        margin: 10px auto;
        border: .1px solid #E4E6EB;
    }

    .bottom {
        display: flex;
        justify-content: space-around;
        align-items: center;

        div {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #087BEA;
            width: 100%;
            justify-content: center;
            padding: 10px 0;
            border-radius: 10px;
        }
        div:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        div:not(:hover){
            transition: .2s;
        }
        div span {
            color: #65676B;
        }
    }
`;

export const NewsS = styled.div`
    margin: 30px 0;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    .user {
        display: flex;
        gap: 10px;
        .name {
            font-weight: bold;
        }
    }

    .userCircle {
        color: #C9CCD1;
    }

    .text {
        margin: 10px 0;
    }

    .img img {
        max-width: 100%;
    }

    .thumb-num {
        margin: 10px 0;

        svg {
            color: #087BEA;
            margin-right: 5px;
        }
    }
    hr {
        border: .1px solid #CED0D4;
    }
    .emoji {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        margin: 5px 0;
        gap: 5px;

        div {
            padding: 7px 0;
            border-radius: 10px;
            color: #65676B;

            svg {
                margin-right: 5px;
            }
        }
        div:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        div:not(:hover) {
            transition: .2s;
        }
    }

    .comment {
        margin-top: 20px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 7px;
        }
        input {
            outline: none;
            border: none;
            border-radius: 50px;
            background-color: #F0F2F5;
            width: 100%;
            min-height: 35px;
            padding-left: 10px;
            font-size: 1rem;
        }
    }
`;

export const MessageDiv = styled.div`
    position: fixed;
    right: 0;
    width: 20%;
    padding-right: 5px;
    top: 70px;
    padding-top: 10px;

    .sponsored {
        color: #727478;
        padding: 15px 0;
    }

    hr {
        width: 90%;
        border: .1px solid #CED0D4;
    }
    .Messenger {
        h3 {
            margin-top: 10px;
            padding: 10px 0;
        }
    }
`;

export const UserS = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 7px;
    border-radius: 10px;

    .userImg {
        position: relative;
        margin-right: 10px;
        svg {
            color: #C9CCD1;
        }
        .greenCircle {
            width: 10px;
            height: 10px;
            background-color: #31A24C;
            border-radius: 50px;
            position: absolute;
            right: 1px;
            bottom: 1px;
        }
    }
    p {
        color: #050505;
    }
    &:hover {
        background-color: rgba(0,0,0,.08);
    }
    &:not(:hover) {
        transition: .2s;
    }
`;

export const WhiteBg = styled.div`
    background-color: rgba(225, 225, 225, .7);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`;

export const MainPopup = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 500px;
    min-width: 500px;
    background-color: #ffffff;
    border-radius: 10px;

    .title {
        display: flex;
        justify-content: center;
        padding: 10px;
        .exit {
            position: absolute;
            right: 10px;
            background-color: rgba(225, 225, 225, .7);
            padding: 5px;
            border-radius: 50px;
            svg {
                height: 22px;
            }
            &:hover {
                background-color: rgba(225, 225, 225, 1);
            }
            &:not(:hover) {
                transition: .2s;
            }
        }
    }
    hr {
        border: .1px solid #CED0D4;
    }
    .writePadding {
        padding: 10px;
        width: 100%;
        height: 280px;

        .user {
            display: flex;
            padding-bottom: 20px;
            align-items: center;
            gap: 10px;
            
            svg {
                color: #C9CCD1;
            }
            select {
                border: none;
                border-radius: 5px;
                background-color: rgba(225, 225, 225, .7);
                padding: 2px;
            }
        }
        textarea {
            resize: none;
            outline: none;
            font-size: 1.4rem;
            font-weight: bold;
            width: 100%;
            height: 100%;
            font-family: 'Segoe UI Historic';
            border: none;
        }
        .add {
            border: 1px solid #CED0D4;
            padding: 15px;
            border-radius: 10px;
            font-family: inherit;
        }
        .submit {
            margin-top: 15px;
            width: 100%;
            height: 30px;
            border: none;
            background-color: #1877F2;
            color: #ffffff;
            border-radius: 10px;
        }
    }
`;