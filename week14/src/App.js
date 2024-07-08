import './App.css';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
