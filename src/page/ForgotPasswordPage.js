import { Link } from "react-router-dom";

function ForgotPasswordPage(){
    return(
        <>
        <section className="home">
        <h1 className="title">忘記密碼</h1>
        <Link to={"/"} className="btn2">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
        </Link>
        </section>
        </>
    )
}

export default ForgotPasswordPage;