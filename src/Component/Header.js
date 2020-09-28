import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Header = () => {
  const HeaderStyle = styled.div`
    background-image: url("images/background.jpg");
    height: 880px;
    background-size: 100% 100%;
  `;
  const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
  `;

  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px;
    list-style-type: none;
    color: white;
    font-weight: 800;
    margin-top: 10px;
    margin-right: 15px;
  `;

  const LogoStyle = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    color: white;
    font-size: 35px;
    font-weight: 800;
  `;

  const Section1 = styled.div`
    margin: 50px 0;
  `;

  return (
    <HeaderStyle>
      <NavStyle>
        <LogoStyle>👹</LogoStyle>
        <div>
          <MenuStyle>
            <li>호스트가 되어보세요</li>
            <li>도움말</li>
            <li>회원가입</li>
            <li>로그인</li>
          </MenuStyle>
        </div>
      </NavStyle>
      <Section1>
        <Search />
      </Section1>
    </HeaderStyle>
  );
};

export default Header;
