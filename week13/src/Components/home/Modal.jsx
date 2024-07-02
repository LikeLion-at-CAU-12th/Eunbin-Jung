import React, { useContext } from 'react'
import { ThemeColorContext } from '../../context/context'
import { dateAtom, emailAtom, userNameAtom } from '../../recoil/atom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { Button } from '../layout/common';

const Modal = ({ isOpen, onConfirm, onCancel}) => {
  const mode = useContext(ThemeColorContext);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const date = useRecoilValue(dateAtom);

  if (!isOpen) return null;

  return (
      <Overlay>
        <ModalContent mode={mode.sub}>
          <h3>이름 : {userName}</h3>
          <h3>이메일 : {email}</h3>
          <h3>날짜 : {date}</h3>
          <h2>입력하신 정보가 맞습니까?</h2>
          <ModalBtn>
            <Button mode={mode.button} onClick={onConfirm}>확인</Button>
            <Button mode={mode.button} onClick={onCancel}>취소</Button>
          </ModalBtn>
        </ModalContent>
     </Overlay>
  )
}


export default Modal

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.mode};
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ModalBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;