import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getMyPage } from '../apis/user';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const router = useNavigate();

  //로그아웃 버튼을 누르면 토큰이 제거되고 로그인 페이지로 이동
  const handleLogout = ()=>{
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    router('/');
  }

  useEffect(()=>{
    getMyPage(localStorage.getItem("access"))
      .then((data)=>{
       setData(data);
       setLoading(false);
      })
      .catch((error) => {
        alert("토근 기한 만료");
      });
  }, []);

  if (loading) return <div>로딩중입니당...⌛</div>;

  return (
    <>
    <Wrapper>
      <Title>회원 정보</Title>
      <div>회원님 성함: {data.name}</div>
      <div>회원님 나이: {data.age}</div>
    </Wrapper>
    <Button onClick={handleLogout}>로그아웃</Button>
    </>
  )
}

export default MyPage

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Button = styled.div`
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: "OTWelcomeRA";
  
  width: 15%;
  text-align: center;
  margin: auto;
  margin-top: 20px;

  &:hover {
    background: #45a049;
  }
  `;