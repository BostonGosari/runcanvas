import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
function Home() {
  const Home = styled.div`
    display: flex;
    justify-content: center;
    a {
      border-radius: 30px;
      background: #000;
      color: #fff;
      font-family: Pretendard;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      text-align: center;
      padding: 27px 74px;
    }
  `;

  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(true);
  };

  return (
    <Home>
      <a className="apply" onClick={() => openModal()}>
        사전예약하기
      </a>
      <div>{isShowing != "" ? <Modal onClose={setIsShowing} /> : null}</div>
    </Home>
  );
}

export default Home;
