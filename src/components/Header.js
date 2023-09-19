import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import logoImage from "../assets/img/logo.png";

function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const HeaderContainer = styled.div`
    width: 100%;
    background-color: ${scrolling ? "rgba(255, 255, 255, 0.8)" : "transparent"};
    color: rgb(0, 0, 0);
    font-family: Pretendard, Apple SD Gothic Neo;
    backdrop-filter: ${scrolling ? "blur(10px)" : "none"};
    z-index: 1;
    position: fixed;
    transition: opacity 0.3s ease;
  `;

  const Header = styled.div`
    max-width: 1080px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    @media screen and (max-width: 768px) {
      padding: 10px 10px;
    }
  `;

  const LeftHeader = styled.div`
    display: flex;
    align-items: center;
  `;

  const RightHeader = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
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
    width: 40px;
    height: 40px;

    @media screen and (max-width: 768px) {
      width: 32px;
      height: 32px;
    }
  `;

  const AppName = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-left: 20px;

    @media screen and (max-width: 768px) {
      font-size: 20px;
      margin-left: 6px;
    }
  `;

  const TeamName = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
  `;

  return (
    <HeaderContainer>
      <Header>
        <LeftHeader>
          <Logo src={logoImage} className="logoimage" alt="logo" />
          <AppName>Runcanvas</AppName>
        </LeftHeader>
        <RightHeader>
          <TeamName>런캔버스팀</TeamName>
          <HeaderButton onClick={() => openModal()}>사전예약하기</HeaderButton>
        </RightHeader>
      </Header>
      {isModalOpen && <Modal onClose={() => closeModal()} />}
    </HeaderContainer>
  );
}

export default Header;
