import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <MenuDom>
      <Title>당신의 멋사력은❓🦁🤔</Title>
      <StyledLink to="/question">
        ✍️멋사인 테스트
      </StyledLink>
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

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;