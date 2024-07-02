import {atom} from 'recoil';

export const userNameAtom = atom({
  key: "userName",
  default: "홍길동",
});


export const emailAtom = atom({
  key: "email",
  default: "Likelion@cau.ac.kr",
});


export const isSubmittedAtom = atom({
  key: "isSubmitted",
  default: false,
});


export const dateAtom = atom({
  key: "date",
  default: "2024-06-26",
});