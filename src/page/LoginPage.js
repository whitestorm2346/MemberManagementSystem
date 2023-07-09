import {login, reset} from './script/login.js';

function LoginPage(){
    return(
        <>
        <section className="login">
        <h1 className="title">帳戶登入</h1>
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
            name="password"
            id="password"
            placeholder="Password"
            />
            <i className="eyes fa-solid fa-eye show-pw" id="show-pw"></i>
            <i className="eyes fa-solid fa-eye-slash hide-pw" id="hide-pw"></i>
        </div>
        <div className="buttons">
            <button type="submit" className="btn submit" id="submit" onClick={login}>登入</button>
            <button type="reset" className="btn reset" id="reset" onClick={reset}>重置</button>
        </div>
        </section>

        <script src="/script/login.js"></script>
        </>
    )
}

export default LoginPage;