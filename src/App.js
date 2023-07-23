import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './page/css/style.css'

import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import ForgotpPasswordPage from './page/ForgotPasswordPage';
import HomePage from './page/HomePage';
import MainPage from './page/MainPage';
import RegisterPage from './page/RegisterPage';

import { LoginContext } from './context/LoginContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userID, setUserID] = useState("")

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated, userID, setUserID }}>
        <Routes>
            <Route path="/" element={ isAuthenticated ? <MainPage /> : <HomePage /> } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotpPasswordPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
