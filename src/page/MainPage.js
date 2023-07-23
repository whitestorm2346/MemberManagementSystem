import { Link } from "react-router-dom";

function MainPage(){
    const logout = () => {
        
    }

    return(
        <>
        <section className="main">
        <h1 className="title">會員管理系統</h1>
        <h2 className="sub-title">Main Page</h2>
        <div className="buttons">
            <Link to={"/register"} className="btn2">
                <i className="fa-solid fa-address-card"></i>
                <span>Register for Membership</span>
            </Link>
            <Link to={"/"} className="btn2" onClick={logout}>
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Logout</span>
            </Link>
        </div>
        </section>
        </>
    )
}

export default MainPage;