import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoImage from "../assets/img/logo.png";

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const HeaderContainer = styled.div`
    width: 100%;
    background-color: ${scrolling ? "rgba(255, 255, 255, 0.8)" : "transparent"};
    color: rgb(0, 0, 0);
    font-family: Pretendard;
    backdrop-filter: ${scrolling ? "blur(10px)" : "none"};
    z-index: 1;
    position: fixed;
    transition: all 0.3s ease;
  `;

  const Header = styled.div`
    max-width: 1080px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
  `;

  const Left = styled.div`
    display: flex;
    align-items: center;
  `;

  const Right = styled.div`
    display: flex;
    align-items: center;
  `;

  const HeaderButton = styled.button`
    background-color: #3e3e3e;
    border: none;
    padding: 9px 18px;
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 12px;
    transition: all 0.5s ease;

    &:hover {
      color: rgb(0, 0, 0);
      background-color: #37f28d;
    }
  `;

  const Logo = styled.img`
    width: 56px;
    height: 56px;
  `;

  const AppName = styled.div`
    font-weight: bold;
    font-size: 36px;
    margin-left: 35px;
  `;

  const TeamName = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
  `;

  return (
    <HeaderContainer>
      <Header>
        <Left>
          <Logo src={logoImage} className="logoimage" alt="logo" />
          <AppName>Runcanvas</AppName>
        </Left>
        <Right>
          <TeamName>런캔버스팀</TeamName>
          <HeaderButton>사전예약하기</HeaderButton>
        </Right>
      </Header>
    </HeaderContainer>
  );
}

export default Header;
