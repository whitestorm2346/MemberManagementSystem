import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './page/css/style.css'
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
