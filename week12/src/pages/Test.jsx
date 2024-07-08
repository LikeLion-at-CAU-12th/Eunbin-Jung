import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const baseURL = 'https://gominzipsession.o-r.kr';

  useEffect(() => {
    const fetchQuestions = async()=>{
      const response = await axios.get(`${baseURL}/liontest/question`);
      setQuestions(response.data.questions);
    };
    fetchQuestions();
  }, [])

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  }; //사용자가 선택한 답변 상태(state)에 저장

  const handleSubmit = () => {
    const SubmittedAnswers = Object.keys(answers).map(key => answers[key]);

    axios.post(`${baseURL}/liontest/result`, { answers: SubmittedAnswers })
      .then(response => {
        const correctCount = response.data.correctCount;
        navigate(`/result/${correctCount}`);
      });
  };

  return(
    <MenuDom>
      {/* <Header></Header> */}
      <Title>🦁멋사인 테스트🦁</Title>
      <QuestionList>
      {questions.map((question) => (
          <QuestionItem key={question.id}>
            <QuestionText>{question.id}. {question.question}</QuestionText>
            {question.choices.map((choice, index) => {
               const isChecked = answers[question.id] === index + 1;
               return(
                <ChoiceLabel key={index} checked={isChecked}>
                <ChoiceInput
                  type="radio"
                  name={`question_${question.id}`}
                  value={index + 1}
                  checked={isChecked}
                  onChange={() => handleAnswerChange(question.id, index + 1)}
                />
                <ChoiceText>{choice}</ChoiceText>
              </ChoiceLabel>
               )
               })}
          </QuestionItem>
        ))}
      </QuestionList>
      <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
    </MenuDom>
  );
};

export default Test;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
  margin-bottom: 20px;
`;

const QuestionList = styled.ul`
  list-style: none;
  padding: 0;
  width: 60%;
`;

const QuestionItem = styled.li`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 10px;  
  margin-bottom: 30px;
`;

const QuestionText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ChoiceLabel = styled.label`
  display: block;
  background-color: ${({ checked }) => (checked ? '#b0e0e6' : '#e0e0e0')};
  font-weight: ${({ checked }) => (checked ? 'bold' : 'normal')};
  font-size: ${({ checked }) => (checked ? '25px' : '18px')};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background: #d0d0d0;
  }
`;

const ChoiceInput = styled.input`
  display: none;
`;

const ChoiceText = styled.span`
  padding: 5px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'EF_jejudoldam';

  &:hover {
    background: #45a049;
  }
`;