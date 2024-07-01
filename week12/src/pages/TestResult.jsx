import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const TestResult = () => {
  const { num } = useParams(); // URL의 매개변수에서 num을 가져옴
  const [result, setResult] = useState({});
  const navigate = useNavigate();
  const baseURL = 'https://gominzipsession.o-r.kr';

  const goToHome = ()=>{
    navigate("/");
  }

  useEffect(() => {
    const fetchResult = async()=>{
      const response = await axios.get(`${baseURL}/liontest/result/${num}`)
      setResult(response.data);
    };
    fetchResult();
    }, [num, navigate]);

  return (
    <ResultDom>
      <h1>🦁 당신의 멋사력은 🦁<br />.<br />.</h1>
      <h2>{result.resultTitle}</h2>
      <h3><img src={result.resultImg} alt="결과 이미지" /></h3>
      <BackBtn onClick={goToHome}>처음부터</BackBtn>
    </ResultDom>
  );
};

export default TestResult

const ResultDom = styled.div`
  text-align: center;
`;

const BackBtn = styled.button`
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'EF_jejudoldam';
  margin-top: 30px;

  &:hover {
    background: #45a049;
  }
`;