import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import bodyImage from "../assets/img/body.jpg";
import mobileBodyImage from "../assets/img/mobileBody.jpg";

const HomeContainer = styled.div`
  max-width: 1512px;
  margin: 0 auto;
  position: relative;
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileHomeImage = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

const Button1 = styled.button`
  background-color: #000000;
  color: rgb(255, 255, 255);
  border: none;
  padding: 1.2vw 3vw;
  border-radius: 1.5vw;
  font-size: 2.3vw;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 12.2%;
  left: 50%;
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in;

  &:hover {
    color: rgb(0, 0, 0);
    background-color: #37f28d;
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 768px) {
    padding: 3vw 8vw;
    border-radius: 3vw;
    font-size: 6vw;
    top: 15%;

    &:hover {
      color: rgb(255, 255, 255);
      background-color: #3e3e3e;
      transition: none;
    }
  }
`;

const Button2 = styled.button`
  background-color: #000000;
  color: rgb(255, 255, 255);
  border: none;
  padding: 1.2vw 3vw;
  border-radius: 1.5vw;
  font-size: 2.3vw;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 91.5%;
  left: 50%;
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in;

  &:hover {
    color: rgb(0, 0, 0);
    background-color: #37f28d;
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 768px) {
    padding: 3vw 8vw;
    border-radius: 3vw;
    font-size: 6vw;
    top: 91%;

    &:hover {
      color: rgb(255, 255, 255);
      background-color: #3e3e3e;
      transition: none;
    }
  }
`;

function Home() {
  const [isShowing, setIsShowing] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const openModal = () => {
    setIsShowing(true);
  };

  useEffect(() => {
    // 페이지가 로드될 때 버튼 요소를 부드럽게 나타나게 하려면 타임아웃을 사용할 수 있습니다.
    setTimeout(() => {
      setShowButton(true); // Button1이 나타난 후 0.5초 후에 Button2를 나타나게 함
    }, 500); // Button1을 나타낸 후 0.5초 후에 Button2를 나타나게 함
  }, []);

  return (
    <HomeContainer>
      <div>{isShowing ? <Modal onClose={setIsShowing} /> : null}</div>
      <HomeImage src={bodyImage} alt="Body" />
      <MobileHomeImage src={mobileBodyImage} alt="MobileBody" />
      <Button1 showButton={showButton} onClick={() => openModal()}>
        사전예약하기
      </Button1>
      <Button2 showButton={showButton} onClick={() => openModal()}>
        사전예약하기
      </Button2>
    </HomeContainer>
  );
}

export default Home;
