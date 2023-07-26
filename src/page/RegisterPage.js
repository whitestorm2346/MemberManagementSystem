import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function RegisterPage(){
    const register = () => {

    }

    return(
        <>
        <section className="register">
        <h1 className="title">註冊會員</h1>
        <div className="container">
            <div className="blank2" id="membership-terms">
                <input
                type="checkbox"
                className="checkbox"
                name="check-membership-terms"
                id="check-membership-terms"
                />
                <p className="center">請詳細閱讀完<span>會員條款</span>後再勾選</p>
            </div>
        </div>
        <div className="buttons-around">
            <button type="submit" className="btn submit" id="submit" onClick={register}>確認註冊</button>
        </div>
        <div className="buttons-around">
            <Link to={"/"} className="btn2">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </Link>
        </div>
        </section>
        </>
    )
}

export default RegisterPage;