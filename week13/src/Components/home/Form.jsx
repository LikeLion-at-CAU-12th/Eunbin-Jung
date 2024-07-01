import React from 'react'
import { useRecoilState } from 'recoil'
import { dateAtom, emailAtom, userNameAtom } from '../../recoil/atom'

const Form = ({type, inputType}) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [date, setDate] = useRecoilState(dateAtom);
 
  const onChange = (e)=>{
    const value = e.target.value;
    if (inputType === "이름"){
      setUserName(value);
    } else if (inputType === "이메일"){
      setEmail(value);
    } else {
      setDate(value);
    }
  }


  return (
    <>
    <div>{inputType}</div>
    <input type={type} onChange={onChange} />
    </>
  )
}

export default Form