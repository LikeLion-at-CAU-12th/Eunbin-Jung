import styled from "styled-components";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";


function App() {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Test />} />
        <Route path="/result/:num" element={<TestResult />} />
      </Routes>
    </AppDom>
  );
};

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;