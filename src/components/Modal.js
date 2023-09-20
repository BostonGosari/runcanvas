import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import cancel from "../assets/img/cancel.png";
import check from "../assets/img/check.png";
import { dbService } from "../firebase";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";

const AudienceBack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(28, 27, 27, 0.4);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  backdrop-filter: blur(8px);
`;

const AudienceModal = styled.div`
  display: flex;
  z-index: 100;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: calc(50% - 360px);
  left: calc(50% - 236px);
  width: 472px;
  height: 720px;
  border-radius: 30px;
  border: 3px solid #fff;
  background: rgba(255, 255, 255, 0.8);

  backdrop-filter: blur(10px);
  .cancelButton {
    width: 20px;
    height: 20px;
    float: right;
    margin-right: 37px;
    margin-left: auto;
    margin-top: 27px;
    margin-bottom: 15px;
  }

  .title {
    color: #000000;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 15px;
  }

  .fee {
    color: #000000;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding-top: 45px;
    padding-bottom: 110px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
  }
  .fields {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
  }

  .label {
    color: #000000;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 510;
    line-height: normal;
    padding-top: 24px;
    padding-bottom: 10px;
  }

  .textField {
    /* height: 44px; */
    flex-shrink: 0;

    border-radius: 5px;
    border: 1px solid #000000;
    background: rgba(217, 217, 217, 0.19);
    padding: 10px 20px;
    width: 310px;
    color: #000000;
    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    outline: none;
  }

  #phone {
    margin-bottom: 30px;
  }

  .accountNum {
    display: flex;
    justify-content: center;
    cursor: "pointer";
    gap: 5px;
    align-items: center;
  }

  .checkDiv {
    display: flex;
    gap: 10px;
    padding-top: 10px;

    color: #000000;

    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 350px;
  }
  input[type="checkbox" i] {
    width: 14px;
    height: 14px;
    border-radius: 1px;
    border: 1px solid #000000;
    background-color: none !important;
  }

  input[type="checkbox"]:checked {
    border: 1px solid #000000;
    background-color: #fff;
    color: #000000;
  }
  .apply {
    margin-top: 55px;
    width: 176px;
    height: 48px;
    color: #fff;
    border-radius: 15px;
    background: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    border-style: none;
    font-family: "SF Pro", sans-serif;
  }

  .apply:disabled {
    cursor: not-allowed;
    background: gray;
    border: 1px solid lightgray;
  }

  .checkImage {
    width: 114px;
    padding-top: 100px;
    padding-bottom: 30px;
  }

  a:-webkit-any-link {
    text-decoration: none !important;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: calc(50% - 315px);
    left: calc(50% - 46%);
    width: 92%;
    height: 630px;
    border-radius: 30px;
    border: 2px solid #fff;

    .cancelButton {
      width: 14px;
      height: 14px;
      float: right;
      margin-right: 20px;
      margin-left: auto;
      margin-top: 20px;
      margin-bottom: 13px;
    }

    .contents {
      width: 92%;
      height: 92%;
      justify-content: space-evenly;
    }

    .title {
      font-size: 18px;
      padding-top: 10px;
    }
    .desc {
      display: none;
    }
    .descmo {
      display: block;
      color: #ddd;
      text-align: center;
      font-family: "SF Pro", sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 510;
      line-height: 170%;
      padding-top: 20px;
      padding-bottom: 25px;
    }

    .fields {
      width: 92%;
    }

    .label {
      font-size: 10px;
      padding-bottom: 5px;
    }

    .textField {
      width: 92%;
      /* height: 40px; */
      padding: 10px 13px;
      font-size: 12px;
    }

    .fee {
      font-size: 11px;
      padding-top: 20px;
    }

    .checkDiv {
      padding-top: 20px;
      font-size: 12px;
      width: 92%;
    }

    input[type="checkbox" i] {
      width: 12px;
      height: 12px;
    }
    .apply {
      width: 136px;
      /* height: 35px; */
      font-family: "SF Pro", sans-serif;
      margin: 30px auto 45px auto;
      border-radius: 25px;
      padding: 11px 20px;
      font-size: 14px;
    }
    .checkImage {
      width: 114px;
      padding-top: 92px;
      padding-bottom: 37px;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 389px) {
    top: calc(50% - 42%);
    height: 85%;
    .fee {
      padding-top: 10px;
    }
    .apply {
      margin: 20px auto;
    }
    .descmo {
      padding-top: 20px;
      padding-bottom: 0px;
    }
  }
`;

function Modal(props) {
  const { onClose } = props;
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isApplyed, setIsApplyed] = useState(false);
  const [name, setName] = useState("");
  const [crew, setCrew] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    } else if (name === "crew") {
      setCrew(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setPhone(value);
    }
  };

  function handleOnSubmit() {
    console.log("Document written with UID: ", email);
    const docRef = setDoc(doc(dbService, "forms", email), {
      name: name,
      phone: phone,
      email: email,
      crew: crew,
      personal: isChecked1,
      ad: isChecked2,
      time: serverTimestamp(),
    });

    if (docRef) {
      setIsApplyed(!isApplyed);
    }
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // 이메일 유효성 검사
  const isPhoneNumberValid = /^010-\d{4}-\d{4}$/.test(phone); // 전화번호 유효성 검사

  const isFormValid =
    name.trim() !== "" && isChecked1 && isEmailValid && isPhoneNumberValid;

  return createPortal(
    <AudienceBack>
      <AudienceModal>
        <img
          className="cancelButton"
          src={cancel}
          onClick={() => {
            onClose(false);
          }}
        ></img>
        {!isApplyed ? (
          <div className="contents">
            <div className="fields">
              <a className="label">성함*</a>
              <input
                className="textField"
                value={name}
                name="name"
                id="name"
                type="text"
                placeholder="홍길동"
                required
                onChange={onChange}
              />
              <a className="label">
                크루명(소속된 러닝 크루가 있다면 작성해주세요.){" "}
              </a>
              <input
                className="textField"
                value={crew}
                name="crew"
                id="crew"
                type="text"
                placeholder="런캔버스"
                onChange={onChange}
              />
              <a className="label">이메일*</a>
              <input
                className="textField"
                value={email}
                name="email"
                id="name"
                type="text"
                placeholder="run@can.vas"
                required
                onChange={onChange}
              />
              <a className="label">
                전화번호*(010-xxxx-xxxx 형식으로 입력해주세요.)
              </a>
              <input
                className="textField"
                value={phone}
                name="phone"
                id="phone"
                type="text"
                placeholder="010-1234-5678"
                required
                onChange={onChange}
              />
            </div>

            <div className="checkDiv">
              <input
                className="checkBox"
                type="checkbox"
                checked={isChecked1}
                onChange={() => setIsChecked1(!isChecked1)}
              />
              <a>
                개인정보 수집, 이용 동의서* <br />
                (개인정보는 해당 이벤트 이후 즉시 파기 예정입니다.)
              </a>
            </div>
            <div className="checkDiv">
              <input
                className="checkBox"
                type="checkbox"
                checked={isChecked2}
                onChange={() => setIsChecked2(!isChecked2)}
              />
              <a>광고성 정보 수신 동의 (이벤트, 혜택 등 정보 안내)</a>
            </div>

            <button
              className={`apply ${!isFormValid ? "disabled" : ""}`}
              disabled={!isFormValid}
              onClick={handleOnSubmit}
            >
              사전예약신청
            </button>
          </div>
        ) : (
          <div className="contents">
            <img className="checkImage" src={check} />
            <a className="title">신청이 완료되었습니다.</a>
            <a className="fee">
              추후에 입력하신 정보를 바탕으로 <br />
              연락드리겠습니다. <br />
              감사합니다 :)
            </a>
            <button
              className="apply"
              onClick={() => {
                onClose(false);
              }}
            >
              메인으로
            </button>
          </div>
        )}
      </AudienceModal>
    </AudienceBack>,
    document.getElementById("modal")
  );
}
export default Modal;
