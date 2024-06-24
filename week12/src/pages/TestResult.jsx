import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TestResult = () => {
  const { num } = useParams(); // URL의 매개변수에서 num을 가져옴
  const [result, setResult] = useState({});
  const navigate = useNavigate();
  const baseURL = 'https://gominzipsession.o-r.kr';

  useEffect(() => {
    const fetchResult = async()=>{
      const response = await axios.get(`${baseURL}/liontest/result/${num}`)
      setResult(response.data);
    };
    fetchResult();
    }, [num, navigate]);

  return (
    <div>
      <h1>당신의 멋사력은❓🤔</h1>
      <h2>{result.resultTitle}</h2>
      <h3><img src={result.resultImg} alt="결과 이미지" /></h3>
    </div>
  );
};

export default TestResult