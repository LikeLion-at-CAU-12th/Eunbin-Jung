import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom'
import { Button, Title, Wrapper } from '../Components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const userName = useRecoilValue(userNameAtom);
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();

  const resetUserName = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const reset = useResetRecoilState(isSubmittedAtom);

  const handleReset = ()=>{
    resetUserName();
    resetEmail();
    reset();
    navigate("/");
  }
  return (
    <Wrapper>
      <Title>Welcome {userName}🤗</Title>
      <Button mode={mode.button} onClick={handleReset}>🏠</Button>
    </Wrapper>
  )
}

export default MyPage