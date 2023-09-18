import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
function Home() {
  const Home = styled.div``;

  const [isShowing, setIsShowing] = useState(false);
  const openModal = () => {
    setIsShowing(true);
  };

  return (
    <Home>
      <a className="apply" onClick={() => openModal()}>
        사전신청하기
      </a>
      <div>{isShowing != "" ? <Modal onClose={setIsShowing} /> : null}</div>
    </Home>
  );
}

export default Home;
