import styled from "styled-components";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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