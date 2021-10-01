import styled from "styled-components";

export const HeaderS = styled.header`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 10px #DDDFE2;
    height: 70px;
    padding: 0 10px;
`;

export const HeaderLogo = styled.div`
    position: relative;
    .logo-icon {
        color: #087BEA;
    }
`;

export const SearchDiv = styled.div`
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
`;

export const CenterUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 100px;

    .icons {
        color: black;
    }
    .hover-icon {
        color: #1877F2;
    }
`;

export const RightIcons = styled.div`
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
`;