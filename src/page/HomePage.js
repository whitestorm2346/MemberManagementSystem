function HomePage(){
    return(
        <>
        <section className="login">
        <h1 className="title">帳戶登入</h1>
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
            name="password"
            className="password"
            id="password"
            placeholder="Password"
            />
            <i className="eyes fa-solid fa-eye show-pw" id="show-pw"></i>
            <i className="eyes fa-solid fa-eye-slash hide-pw" id="hide-pw"></i>
        </div>
        <button type="submit" className="btn submit" id="submit">登入</button>
        <button type="reset" className="btn reset" id="reset">重置</button>
        </section>
        </>
    )
}

export default HomePage;