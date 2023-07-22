import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

function HomePage(){
    const { isAuthenticated } = useContext(LoginContext)

    return(
        <>
        <section className="home">
        <h1 className="title">會員管理系統</h1>
        <h2 className="sub-title">Demo Page</h2>
        <Link to={isAuthenticated ? "/main" : "/login"} className="btn2">
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Login</span>
        </Link>
        </section>
        </>
    )
}

export default HomePage;