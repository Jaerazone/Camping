import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import backgroundImg from "../../assets/메인배경화면.jpg";

const SearchBackgroundimg = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;

    &::after {
        width: 100%;
        height: 500px;
        content: "";
        background-image: url(${backgroundImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -10;
        filter: brightness(60%);
    }
`;

const SearchInput = styled.div`
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    span {
        width: 470px;
        height: 45px;
        box-shadow: rgba(0, 0, 0, 1) 0px 0px 30px;
        border-radius: 15px;
    }
    span:hover {
        width: 470px;
        height: 45px;
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        border-radius: 15px;
    }
    input {
        width: 400px;
        height: 31px;
        border: none;
        line-height: 44px;
        padding: 13px 0 0 10px;
        border-radius: 20px 0 0 20px;
        font-size: 20px;
        z-index: -5;
        outline: none;
    }
    button {
        border: none;
        background-color: var(--main-color-orange);
        color: white;
        font-size: larger;
        padding: 5px;
        width: 60px;
        border-radius: 0 20px 20px 0;
    }
    button:hover {
        color: var(--main-color-black);
    }
`;
const BtnIcon = styled.div`
    margin-top: 5px;
    font-size: large;
`;

const SearchFilter = styled.ul`
    list-style-type: none;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;

    li {
        padding: 7px;
        border-radius: 20px;
        background-color: rgba(127, 156, 159, 0.3);
        font-weight: bold;
    }
    li:hover {
        background-color: var(--main-color-orange-light);
        color: var(--main-color-black);
        font-weight: 600;
        box-shadow: rgb(61, 61, 61) 0px 0px 8px;
    }
`;

const SeachPage = () => {
    return (
        <SearchBackgroundimg>
            <div className="search__backgroundimg">
                <div style={{ padding: "1px" }}></div>
                <form action="">
                    <SearchInput>
                        <span>
                            <input
                                type="text"
                                placeholder="검색어를 입력 해 주세요"
                            />
                            <button>
                                <BtnIcon>
                                    <SearchIcon viewBox="3 3 15 15" />
                                </BtnIcon>
                                {/* className="btn_icon" */}
                            </button>
                        </span>
                    </SearchInput>
                </form>
                <SearchFilter>
                    <li>#필터</li>
                    <li>#부산</li>
                    <li>#바다</li>
                    <li>#노지</li>
                    <li>#사상</li>
                </SearchFilter>
            </div>
        </SearchBackgroundimg>
    );
};

export default SeachPage;
