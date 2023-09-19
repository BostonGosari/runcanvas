import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../firebase";

const PASSWORD = process.env.REACT_APP_PASSWORD;

const ListPageComponent = styled.div`
  background-color: black;
  color: white;

  .audienceList {
    padding: 20px;
    text-align: center;

    h1 {
      font-size: 24px;
      margin-bottom: 20px;
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
  }
`;

function ListPage() {
  const [password, setPassword] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [forms, setForms] = useState([]);

  const getForms = async () => {
    const data = await getDocs(collection(dbService, "forms"));
    const newData = data.docs.map((doc) => ({ ...doc.data() }));
    setForms(newData);
    console.log("get Audiences!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log(password, PASSWORD);
    if (password === PASSWORD) {
      getForms();
      setShowTable(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <ListPageComponent>
      {showTable ? (
        <div className="audienceList">
          <h1>신청리스트</h1>
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
              {forms.map((per, index) => (
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
        </div>
      ) : (
        <form onSubmit={handlePasswordSubmit}>
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
    </ListPageComponent>
  );
}

export default ListPage;
