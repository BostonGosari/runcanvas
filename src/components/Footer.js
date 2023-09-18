import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Footer() {
  const FooterContainer = styled.div`
    max-width: 1512px;
    margin: 0 auto;
  `;

  const Footer = styled.div`
    background-color: #1dd9ac; /* 배경색을 검은색으로 설정 */
    color: #fff;
    text-align: center;
    font-family: SF Pro;
    font-size: 15px;
    font-style: normal;
    font-weight: 274;
    line-height: normal;
  `;

  const WhiteLine = styled.div`
    background-color: white;
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  `;

  return (
    <FooterContainer>
      <Footer>
        <WhiteLine />© 2023 BOSTONGOSARI. All rights reserved.
      </Footer>
    </FooterContainer>
  );
}

export default Footer;
