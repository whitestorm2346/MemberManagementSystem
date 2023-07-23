import { Link } from "react-router-dom";

function HomePage(){
    return(
        <>
        <section className="home">
        <h1 className="title">會員管理系統</h1>
        <h2 className="sub-title">Demo Page</h2>
        <Link to={"/login"} className="btn2">
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Enter</span>
        </Link>
        </section>
        </>
    )
}

export default HomePage;