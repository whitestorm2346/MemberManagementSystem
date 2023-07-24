import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function MainPage(){
    const { setAuthenticated, userAccount, setUserAccount } = useContext(LoginContext)

    const logout = () => {
        setAuthenticated(false)
        setUserAccount("")
        alert("Logout Successfully!")
    }

    return(
        <>
        <section className="main">
        <h1 className="title">Welcome Back</h1>
        <h2 className="sub-title">{userAccount}</h2>
        <div className="buttons">
            <Link to={"/register"} className="btn2">
                <i className="fa-solid fa-address-card"></i>
                <span>Register for Membership</span>
            </Link>
            <Link to={"/login"} className="btn2 warning" onClick={logout}>
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Logout</span>
            </Link>
        </div>
        </section>
        </>
    )
}

export default MainPage;