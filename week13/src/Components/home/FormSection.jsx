import React, { useContext, useState } from 'react'

import Form from './Form'
import { Button, Wrapper } from '../layout/common'
import { ThemeColorContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isSubmittedAtom } from '../../recoil/atom'
import Modal from './Modal'

const FormSection = () => {
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();
  const setIsSubmitted = useSetRecoilState(isSubmittedAtom);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBtn = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsSubmitted(true);
    navigate('/mypage');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Form type='type' inputType='이름' />
      <Form type='email' inputType='이메일' />
      <Form type='date' inputType='날짜' />
      <Button mode={mode.button} onClick={handleBtn}>제출</Button>
      <Modal isOpen={isModalOpen} onConfirm={handleConfirm} onCancel={handleCancel}></Modal>
    </Wrapper>
  )
}

export default FormSection