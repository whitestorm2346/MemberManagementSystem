function SignUpPage(){
    return(
        <>
        <section className="sign-up">
        <h1 className="title">註冊帳戶</h1>
        <div className="blank">
            <input
            type="text"
            name="account"
            className="account"
            id="account"
            placeholder="Account"
            />
        </div>
        <div className="blank">
            <input
            type="text"
            name="new password"
            className="password"
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
            className="password"
            id="check-password"
            placeholder="Check Password"
            />
            <i className="eyes fa-solid fa-eye show-pw" id="show-pw"></i>
            <i className="eyes fa-solid fa-eye-slash hide-pw" id="hide-pw"></i>
        </div>
        <button type="submit" className="btn submit" id="submit">登入</button>
        <button type="reset" className="btn reset" id="reset">重置</button>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
        <script src="/script/login.js"></script>
        </>
    )
}

export default SignUpPage;