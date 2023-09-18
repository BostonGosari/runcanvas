import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import cancel from "../assets/img/cancel.png";
import check from "../assets/img/check.png";
// import { dbService } from "../index";
// import { doc, setDoc } from "firebase/firestore";

const AudienceBack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const AudienceModal = styled.div`
  display: flex;
  z-index: 100;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: calc(50% - 365px);
  left: calc(50% - 300px);
  width: 600px;
  height: 726px;
  border-radius: 30px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);

  .cancelButton {
    width: 20px;
    height: 20px;
    float: right;
    margin-right: 37px;
    margin-left: auto;
    margin-top: 27px;
    margin-bottom: 7px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    color: #fff;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 15px;
  }

  .desc {
    color: #ddd;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 510;
    line-height: 170%;
    padding-top: 20px;
    padding-bottom: 25px;
  }

  .descmo {
    display: none;
  }

  .fields {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .label {
    color: #fff;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 510;
    line-height: normal;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .textField {
    width: 414px;
    /* height: 44px; */
    flex-shrink: 0;

    border-radius: 5px;
    border: 1px solid #fff;
    background: rgba(217, 217, 217, 0.19);
    padding: 10px 20px;

    color: #fff;
    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    outline: none;
  }
  .accountNum {
    display: flex;
    justify-content: center;
    cursor: "pointer";
    gap: 5px;
    align-items: center;
  }

  .copy {
    width: 12px;
    height: 15px;
  }

  .fee {
    color: #fff;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding-top: 45px;
  }
  .checkDiv {
    display: flex;
    gap: 10px;
    padding-top: 15px;
    color: #fff;
    text-align: center;
    font-family: "SF Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input[type="checkbox" i] {
    width: 14px;
    height: 14px;
    border-radius: 1px;
    border: 1px solid #fff;
    background-color: none !important;
  }

  .apply {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 38px;
    /* height: 44px; */
    margin: 30px auto 30px auto;
    background: #3300ff;
    border-radius: 25px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-decoration: none;
    text-align: center;
    border-style: none;
    color: #dadcfa;
  }

  .apply:disabled {
    cursor: not-allowed;
    background: #737373;
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

    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(25px);

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
    }

    input[type="checkbox" i] {
      width: 12px;
      height: 12px;
    }
    .apply {
      width: 120px;
      /* height: 35px; */
      margin: 30px auto 45px auto;
      background: #3300ff;
      border-radius: 25px;
      padding: 9px 20px;
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
  const [isChecked, setIsChecked] = useState(false);
  const [isApplyed, setIsApplyed] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "name") {
      setName(value);
    } else setPhone(value);
  };

  //   function handleOnSubmit() {
  //     console.log("Document written with UID: ", name);
  //     const docRef = setDoc(doc(dbService, "청중참가단", name), {
  //       name: name,
  //       phone: phone,
  //     });

  //     if (docRef) {
  //       setIsApplyed(!isApplyed);
  //     }
  //   }

  const isFormValid = name.trim() !== "" && /^\d+$/.test(phone) && isChecked;

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
            <a className="title">
              DREAMLANDTHON
              <br />
              청중참가단
            </a>
            <a className="desc">
              7월 29일 오후 2시 30분, 드림랜드의 마지막날을 함께 즐겨요. <br />
              청중참가단 전원에게 ID CARD와 기념 굿즈가 제공됩니다.
            </a>
            <a className="descmo">
              7월 29일 오후 2시 30분,
              <br />
              드림랜드의 마지막날을 함께 즐겨요. <br />
              청중참가단 전원에게 ID CARD와 기념 굿즈가 제공됩니다.
            </a>
            <div className="fields">
              <a className="label">이름</a>
              <input
                className="textField"
                value={name}
                name="name"
                id="name"
                type="text"
                placeholder="홍길동(한글)"
                required
                onChange={onChange}
              />
              <a className="label">전화번호</a>
              <input
                className="textField"
                value={phone}
                name="phone"
                id="name"
                type="text"
                placeholder="01012345678"
                required
                onChange={onChange}
              />
            </div>
            <div className="fee">
              아래 계좌로 보증금 3,000원을 납부하시면 신청이 완료됩니다.
              <br />
              신청서 제출 후 24시간 이내로 입금 미확인시 신청이 취소될 수
              있습니다. <br />
              3000원은 보증금으로, 행사 참여시 100% 환급해드립니다.
            </div>
            <div className="checkDiv">
              <input
                className="checkBox"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <a>입금했어요</a>
            </div>

            <button
              className={`apply ${!isFormValid ? "disabled" : ""}`}
              disabled={!isFormValid}
              //   onClick={handleOnSubmit}
            >
              신청하기
            </button>
          </div>
        ) : (
          <div className="contents">
            <a className="title">
              DREAMLANDTHON
              <br />
              청중참가단
            </a>
            <img className="checkImage" src={check} />
            <a className="title">신청이 완료되었습니다.</a>
            <a className="fee">
              7월 29일 오후 2시 30분, <br />
              한동대학교 김영길 그레이스 채플에서 만나요!
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
