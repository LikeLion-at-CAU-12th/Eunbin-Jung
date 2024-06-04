import React from 'react';
import styled from 'styled-components';
import { getPerPage } from '../../apis/userlist';

const PageSelction = ({curPage, setUserData, setCurPage}) => {
  const handleClick = async(page) => {
    const response = await getPerPage(0); //전체 데이터 받아서 저장
    const totalPage = 5;
    const offset = (page - 1) * totalPage;
    const slicedData = response.slice(offset, offset + totalPage); //5개씩 잘라서 직접 페이지 구분

    setUserData(slicedData);
    setCurPage(page);
  }

  return (
    <SelectionLayout>{[1,2,3,4,5,6].map(
      (val) => 
      <PageBox
      key={val} 
      $active={val === curPage ? true : false} 
      onClick={() => handleClick(val)}>
        {val}
      </PageBox>
      )}</SelectionLayout>
  );
};

export default PageSelction;

const SelectionLayout = styled.div`
display: flex;
gap: 3rem;
margin-bottom: 2rem;
`

const PageBox = styled.div`
font-size: 2rem;
color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
&:hover{
  cursor: pointer;
  color: white;
}
`