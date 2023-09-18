import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import bodyImage from "../assets/img/body.jpg";




const HomeContainer = styled.div`
  max-width: 1512px;
  margin: 0 auto;
  position: relative;
`;

const HomeImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Button1 = styled.button`
  background-color: #3e3e3e;
  color: rgb(255, 255, 255);
  border: none;
  padding: 1.5vw 4vw;
  border-radius: 1.5vw;
  font-size: 3vw;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 12%;
  left: 50%;
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in;

  &:hover {
    color: rgb(0, 0, 0);
    background-color: #37f28d;
    transition: all 0.3s ease-in;
  }
`;

const Button2 = styled.button`
  background-color: #3e3e3e;
  color: rgb(255, 255, 255);
  border: none;
  padding: 1.5vw 4vw;
  border-radius: 1.5vw;
  font-size: 3vw;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 91%;
  left: 50%;
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in;

  &:hover {
    color: rgb(0, 0, 0);
    background-color: #37f28d;
    transition: all 0.3s ease-in;
  }
`;

function Home() {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
  };

  useEffect(() => {
    // 페이지가 로드될 때 버튼 요소를 부드럽게 나타나게 하려면 타임아웃을 사용할 수 있습니다.
    setTimeout(() => {
      setIsShowing(true); // Button1이 나타난 후 0.5초 후에 Button2를 나타나게 함
    }, 500); // Button1을 나타낸 후 0.5초 후에 Button2를 나타나게 함
  }, []);

  return (
    <HomeContainer>
      <div>{isShowing ? <Modal onClose={setIsShowing} /> : null}</div>
      <HomeImage src={bodyImage} alt="Body" />
      <Button1 onClick={() => openModal()}>사전예약하기</Button1>
      <Button2 onClick={() => openModal()}>사전예약하기</Button2>
     
    </HomeContainer>
  );
}

export default Home;
