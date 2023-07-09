import { sign_up, reset } from './script/sign-up.js';

function SignUpPage(){
    return(
        <>
        <section className="sign-up">
        <h1 className="title">註冊帳戶</h1>
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
            type="text"
            name="new password"
            id="new-password"
            placeholder="New Password"
            />
            <i className="eyes fa-solid fa-eye show-pw" id="show-pw"></i>
            <i className="eyes fa-solid fa-eye-slash hide-pw" id="hide-pw"></i>
        </div>
        <div className="blank">
            <input
            type="text"
            name="check password"
            id="check-password"
            placeholder="Check Password"
            />
            <i className="eyes fa-solid fa-eye show-pw" id="show-pw"></i>
            <i className="eyes fa-solid fa-eye-slash hide-pw" id="hide-pw"></i>
        </div>
        <div className="buttons">
            <button type="submit" className="btn submit" id="submit" onClick={sign_up}>註冊帳戶</button>
            <button type="reset" className="btn reset" id="reset" onClick={reset}>重置</button>
        </div>
        <div className="links">
            <a href="/login">返回登入</a>
        </div>
        </section>
        </>
    )
}

export default SignUpPage;