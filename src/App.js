import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './page/css/style.css'
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import ForgotpPasswordPage from './page/ForgotPasswordPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotpPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
