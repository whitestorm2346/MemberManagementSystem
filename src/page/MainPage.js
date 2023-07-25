import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

import MainPageButtons from '../component/MainPageButtons';

function MainPage(){
    const { 
        setAuthenticated, 
        userAccount, 
        setUserAccount,
        userType
    } = useContext(LoginContext)

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
            <MainPageButtons userType={userType} />
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