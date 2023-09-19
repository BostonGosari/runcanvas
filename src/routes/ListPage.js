import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../firebase";

const PASSWORD = process.env.REACT_APP_PASSWORD;

const ListPageComponent = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  .audienceList {
    padding: 20px;
    text-align: center;
    max-width: 800px;
    width: 100%;

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .toggle-button {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      button {
        background-color: #555;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        margin: 0 10px;

        &.active {
          background-color: #777;
        }
      }
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background-color: #333;
      border-radius: 5px;
      overflow: hidden;
    }

    th,
    td {
      padding: 15px;
      text-align: left;
    }

    th {
      background-color: #555;
      color: white;
    }

    tr:nth-child(even) {
      background-color: #444;
    }

    tr:hover {
      background-color: #555;
    }

    .data-count {
      font-size: 18px;
      margin-bottom: 10px;
      color: #ccc;
    }

    .password-form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input[type="password"] {
        padding: 10px;
        width: 200px;
        border: 1px solid #333;
        border-radius: 5px;
        font-size: 16px;
        margin-bottom: 10px;
      }

      button {
        background-color: #555;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
      }
    }
  }
`;

function ListPage() {
  const [password, setPassword] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [showCrew, setShowCrew] = useState(true); // 기본적으로 크루명을 표시
  const [forms, setForms] = useState([]);

  const getForms = async () => {
    const data = await getDocs(collection(dbService, "forms"));
    const newData = data.docs.map((doc) => ({ ...doc.data() }));
    setForms(newData);
    console.log("get Audiences!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === PASSWORD) {
      getForms();
      setShowTable(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const toggleDataDisplay = (displayCrew) => {
    setShowCrew(displayCrew);
  };

  return (
    <ListPageComponent>
      <h1>🌿보스턴고사리짱🌿</h1>
      <h1> 총 신청자 {forms.length}명</h1>
      <div className="audienceList">
        {showTable ? (
          <>
            <div className="toggle-button">
              <button
                className={showCrew ? "active" : ""}
                onClick={() => toggleDataDisplay(true)}
              >
                크루
              </button>
              <button
                className={!showCrew ? "active" : ""}
                onClick={() => toggleDataDisplay(false)}
              >
                개인
              </button>
            </div>
            {showCrew ? (
              <>
                <p>크루 신청자 리스트</p>
                <div className="data-count">
                  현재 크루 신청자 수:{" "}
                  {forms.filter((form) => !!form.crew).length}
                </div>
              </>
            ) : (
              <>
                <p>개인 신청자 리스트</p>
                <div className="data-count">
                  현재 개인 신청자 수:{" "}
                  {forms.filter((form) => !form.crew).length}
                </div>
              </>
            )}
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>이름</th>
                  <th>크루명</th>
                  <th>이메일</th>
                  <th>전화번호</th>
                </tr>
              </thead>
              <tbody>
                {forms
                  .filter((form) => (showCrew ? !!form.crew : !form.crew))
                  .map((per, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{per.name}</td>
                      <td>{per.crew}</td>
                      <td>{per.email}</td>
                      <td>{per.phone}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        ) : (
          <form className="password-form" onSubmit={handlePasswordSubmit}>
            <h1>비밀번호를 입력하세요</h1>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">확인</button>
          </form>
        )}
      </div>
    </ListPageComponent>
  );
}

export default ListPage;
