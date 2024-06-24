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
      <Title>🦁멋사인 테스트🦁</Title>
      <ul>
      {questions.map((question) => (
          <li key={question.id}>
            <p>{question.question}</p>
            {question.choices.map((choice, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={index + 1}
                  onChange={() => handleAnswerChange(question.id, index + 1)}
                />
                {choice}
              </label>
            ))}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>제출</button>
    </MenuDom>
  );
  };

export default Test

const MenuDom = styled.div`
  display: flex;
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
`;