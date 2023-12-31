import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginContext } from './context/LoginContext';
import './page/css/style.css'

import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import ForgotPasswordPage from './page/ForgotPasswordPage';
import HomePage from './page/HomePage';
import MainPage from './page/MainPage';
import RegisterPage from './page/RegisterPage';
import MemberSettingPage from './page/MemberSettingPage';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userID, setUserID] = useState("")
  const [userAccount, setUserAccount] = useState("")
  const [userNickname, setUserNickname] = useState("")
  const [userType, setUserType] = useState(0)
  const [fontColor, setFontColor] = useState("#000000")

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ 
          isAuthenticated, setIsAuthenticated,
          userID, setUserID, 
          userAccount, setUserAccount,
          userNickname, setUserNickname,
          userType, setUserType,
          fontColor, setFontColor
      }}>
        <Routes>
            <Route path="/" element={ isAuthenticated ? <MainPage /> : <HomePage /> } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/member-setting" element={<MemberSettingPage />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
