import {atom} from 'recoil';

export const userNameAtom = atom({
  key: "userName",
  default: "홍길동",
});


export const ageAtom = atom({
  key: "age",
  default: "20",
});