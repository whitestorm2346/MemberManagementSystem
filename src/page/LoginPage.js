import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, reset } from './script/login.js';
import { LoginContext } from '../context/LoginContext.js';

function LoginPage(){
    const { isAuthenticated, setIsAuthenticated, setUserID } = useContext(LoginContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/main');
        else setUserID('');
    }, [isAuthenticated]);
    
    const handleLogin = async () => {
        try {
            let account_input = document.getElementById("account")
            setUserID(account_input.value)
            
            let result = await login();
            setIsAuthenticated(result);
        } 
        catch (error) {
            console.error('Error during login:', error);
        }
    };

    useEffect(() => {
        const show_pw_btn = document.getElementById('show-pw')
        const hide_pw_btn = document.getElementById('hide-pw')
        const input_password = document.getElementById('password')

        show_pw_btn.addEventListener('click', () => {
            show_pw_btn.classList.add('hide')
            hide_pw_btn.classList.remove('hide')

            input_password.setAttribute("type", "text")
        })

        hide_pw_btn.addEventListener('click', () => {
            hide_pw_btn.classList.add('hide')
            show_pw_btn.classList.remove('hide')

            input_password.setAttribute("type", "password")
        })
    }, [])

    return(
        <>
        <section className="login">
        <h1 className="title">帳戶登入</h1>
        <div className="container">
            <div className="blank">
                <input
                type="text"
                name="account"
                id="account"
                placeholder="Account"
                />
            </div>
            <div className="blank">
                <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                />
                <i className="eyes fa-solid fa-eye show-pw" id="show-pw"></i>
                <i className="eyes fa-solid fa-eye-slash hide-pw hide" id="hide-pw"></i>
            </div>
        </div>
        <div className="buttons">
            <button type="submit" className="btn submit" id="submit" onClick={handleLogin}>登入</button>
            <button type="reset" className="btn reset" id="reset" onClick={reset}>重置</button>
        </div>
        <div className="buttons">
            <a href="/sign-up" className="btn2">
                <i className="fa-solid fa-user-plus"></i>
                <span>Sign Up</span>
            </a>
            <a href="/" className="btn2">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </a>
            <a href="/forgot-password" className="btn2">
                <i className="fa-solid fa-user-shield"></i>
                <span>Forgot Password</span>
            </a>
        </div>
        </section>
        </>
    )
}

export default LoginPage;