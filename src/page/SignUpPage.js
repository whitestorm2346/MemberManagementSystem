import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function SignUpPage(){
    const navigate = useNavigate()

    const sign_up = async () => {
        let account = document.getElementById('account').value
        let new_password = document.getElementById('new-password').value
        let check_password = document.getElementById('check-password').value
    
        if(account === '' || new_password === '' || check_password === '') {
            return;
        }
    
        if (new_password !== check_password) {
            alert('The passwords do not fit!')
            return;
        }
    
        let {data, error} = await supabase
        .from('member-list')
        .select("*")
        .eq('account', account)
    
        if (error) {
            console.error(error);
        }
        else if (data.length) {
            alert('This account already exist!')
        }
        else {
            let { data, error } = await supabase
                .from('member-list')
                .insert([{ 
                    account: account, 
                    password: new_password 
                }]).select()
    
            if (error) {
                console.error(error);
                return;
            }
            
            alert('Sign Up Successfully!')

            navigate('/login')
        }
    }

    const reset = () => {
        const input_account = document.getElementById('account')
        input_account.value = ''
    
        const input_new_password = document.getElementById('new-password')
        input_new_password.value = ''
    
        const input_check_password = document.getElementById('check-password')
        input_check_password.value = ''
    }

    useEffect(() => {
        const show_pw_btn1 = document.getElementById('show-pw-1')
        const hide_pw_btn1 = document.getElementById('hide-pw-1')
        const input_new_password = document.getElementById('new-password')

        show_pw_btn1.addEventListener('click', () => {
            show_pw_btn1.classList.add('hide')
            hide_pw_btn1.classList.remove('hide')
            input_new_password.setAttribute("type", "text")
        })

        hide_pw_btn1.addEventListener('click', () => {
            hide_pw_btn1.classList.add('hide')
            show_pw_btn1.classList.remove('hide')
            input_new_password.setAttribute("type", "password")
        })

        const show_pw_btn2 = document.getElementById('show-pw-2')
        const hide_pw_btn2 = document.getElementById('hide-pw-2')
        const input_check_password = document.getElementById('check-password')

        show_pw_btn2.addEventListener('click', () => {
            show_pw_btn2.classList.add('hide')
            hide_pw_btn2.classList.remove('hide')
            input_check_password.setAttribute("type", "text")
        })

        hide_pw_btn2.addEventListener('click', () => {
            hide_pw_btn2.classList.add('hide')
            show_pw_btn2.classList.remove('hide')
            input_check_password.setAttribute("type", "password")
        })
    }, [])

    return(
        <>
        <section className="sign-up">
        <h1 className="title">註冊帳戶</h1>
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
                name="new password"
                id="new-password"
                placeholder="New Password"
                />
                <i className="eyes fa-solid fa-eye show-pw" id="show-pw-1"></i>
                <i className="eyes fa-solid fa-eye-slash hide-pw hide" id="hide-pw-1"></i>
            </div>
            <div className="blank">
                <input
                type="password"
                name="check password"
                id="check-password"
                placeholder="Check Password"
                />
                <i className="eyes fa-solid fa-eye show-pw" id="show-pw-2"></i>
                <i className="eyes fa-solid fa-eye-slash hide-pw hide" id="hide-pw-2"></i>
            </div>
        </div>
        <div className="buttons">
            <button type="submit" className="btn submit" id="submit" onClick={sign_up}>註冊</button>
            <button type="reset" className="btn reset warning" id="reset" onClick={reset}>重置</button>
        </div>
        <div className="buttons">
            <Link to={"/login"} className="btn2">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Enter</span>
            </Link>
            <Link to={"/"} className="btn2">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </Link>
        </div>
        </section>
        </>
    )
}

export default SignUpPage;