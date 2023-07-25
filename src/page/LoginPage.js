import { useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext.js';

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function LoginPage(){
    const { 
        isAuthenticated, 
        setIsAuthenticated, 
        setUserAccount,
        setUserID 
    } = useContext(LoginContext)
    const navigate = useNavigate();
    
    const login = async () => {
        let account = document.getElementById('account').value
        let password = document.getElementById('password').value

        if(account === '' || password === '') {
            return false;
        }

        let {data, error} = await supabase
        .from('member-list')
        .select("*")
        .eq('account', account)

        if (error) {
            console.error(error);
            return false; 
        }

        if(data.length){
            if(password === data[0].password){
                alert('Login Successfully!')

                setUserAccount(account)
                setUserID(data[0].id)
                setIsAuthenticated(true);
            }
            else{
                alert('This account does not exist, or the password is wrong!')
            }
        }
        else{
            alert('This account does not exist, or the password is wrong!')
        }
    };

    const reset = () => {
        const input_account = document.getElementById('account')
        input_account.value = ''
    
        const input_password = document.getElementById('password')
        input_password.value = ''
    }

    useEffect(() => {
        if (isAuthenticated) navigate('/');
        else setUserAccount('');
    }, [isAuthenticated]);

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
            <button type="reset" className="btn reset warning" id="reset" onClick={reset}>重置</button>
        </div>
        <div className="buttons">
            <Link to={"/sign-up"} className="btn2">
                <i className="fa-solid fa-user-plus"></i>
                <span>Sign Up</span>
            </Link>
            <Link to={"/"} className="btn2">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </Link>
            <Link to={"/forgot-password"} className="btn2">
                <i className="fa-solid fa-user-shield"></i>
                <span>Forgot Password</span>
            </Link>
        </div>
        </section>
        </>
    )
}

export default LoginPage;