function SignUpPage(){
    const reset = () => {
        console.log('reset active')
    
        const input_account = document.getElementById('account')
        input_account.value = ''
    
        const input_new_password = document.getElementById('new-password')
        input_new_password.value = ''

        const input_check_password = document.getElementById('check-password')
        input_check_password.value = ''
    }

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
        <button type="submit" className="btn submit" id="submit">登入</button>
        <button type="reset" className="btn reset" id="reset" onClick={reset}>重置</button>
        </section>

        <script src="/script/sign-up.js"></script>
        </>
    )
}

export default SignUpPage;