import styled from "styled-components";
import {Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";


function App() {
  return (
    <AppDom>
      <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Test />} />
        <Route path="/reslut/:num" element={<TestResult />} />
      </BrowserRouter>
    </AppDom>
  )
}

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