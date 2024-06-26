import React, {useState} from 'react';
import styled from 'styled-components';
import { filterType } from '../../constants/filtertype';
import { getGenderUser, getPerPage, getPartUser } from '../../apis/userlist';

const UserFilter = ({setFilter, setCurPage, setUserData}) => {
  const [curFilter, setCurFilter] = useState('');

  const handleClick = async(type, param) => {
    if(type === "all"){
      const response = await getPerPage(1);
      //response 값을 저장하기 위해서 새로운 상태(state)가 필요하다!
      //useState를 이용해서 이 값을 저장해주도록 하자!
      setUserData(response);
      setCurPage(1); //현재 페이지 1로 초기화
    } else if (type === "gender"){
      const response = await getGenderUser(param);
      setUserData(response);
      setCurPage(1);
    } else if (type === "part"){
      const response = await getPartUser(param);
      setUserData(response);
      setCurPage(1);
    }
    setFilter(param); //param 대신 다른 값으로 변경 가능, 색상 변경할 때 잘 이용하기!
    setCurFilter(param);
  }
  return (
    <FilterLayout>{filterType.map(
      (data, idx) => 
      <FilterBox 
      key={idx}
      $active={curFilter === data.param ? true : false}
      onClick={() => handleClick(data.type, data.param)}>{data.title}
      </FilterBox>
    )}</FilterLayout>
  );
};

export default UserFilter;

const FilterLayout = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
overflow-x: scroll;
padding-left: 2rem;
padding-right: 2rem;
margin-top: 2rem;
gap: 2rem;
&::-webkit-scrollbar{
  display : none;
}
`

const FilterBox = styled.div`
display: flex;
padding: 1rem 4rem 1rem 4rem;
background-color: ${(props) => props.$active ? "#FF7F3E" : "#C9C9C9"};
border-radius: 1rem;
font-size: 3rem;
whith-space: nowrap;
&:hover{
  cursor: pointer;
  color: white;
}
`