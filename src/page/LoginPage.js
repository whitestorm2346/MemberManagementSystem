import { useEffect } from 'react';
import { login, reset } from './script/login.js';

function LoginPage(){
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
            <button type="submit" className="btn submit" id="submit" onClick={login}>登入</button>
            <button type="reset" className="btn reset" id="reset" onClick={reset}>重置</button>
        </div>
        <div className="links">
            <a href="/sign-up">註冊帳戶</a>
            <a href="/forgot-password">忘記密碼</a>
        </div>
        <a href="/" className="btn2">
            <i className="fa-solid fa-house"></i>
        </a>
        </section>
        </>
    )
}

export default LoginPage;