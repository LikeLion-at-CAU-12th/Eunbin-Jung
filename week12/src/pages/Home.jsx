import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


const Home = () => {
    // 로그인이 되어 있는 상태라면 멋사 페이지로, 로그인이 되어 있지 않다면 로그인 페이지로 이동
    const router = useNavigate();

    const onClick = () => {
      const savedAccessToken = localStorage.getItem("access");
      if (savedAccessToken) {
        router('/question');
      }
      else {
        alert("로그인이 필요한 서비스입니다.")
        router('/login');
      }
    };
  
  return (
    <MenuDom>
      <Title>당신의 멋사력은❓🦁🤔</Title>
      <StyledButton onClick={onClick}>
        ✍️ 멋사인 테스트
      </StyledButton>
    </MenuDom>
  );
};

export default Home;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-style: none;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-family: 'EF_jejudoldam';
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 5%;
`;