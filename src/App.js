import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './page/css/style.css'

import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import ForgotpPasswordPage from './page/ForgotPasswordPage';
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
            <Route path="/" element={
              <section className="home">
              <h1 className="title">會員管理系統</h1>
              <h2 className="sub-title">Demo Page</h2>
              <Link to={isAuthenticated ? "/main" : "/login"} className="btn2">
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <span>Login</span>
              </Link>
              </section>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotpPasswordPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
