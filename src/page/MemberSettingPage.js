import { Link } from "react-router-dom";

function MemberSettingPage(){
    return(
        <>
        <section className="member-setting">
        <h1 className="title">會員資料設定</h1>
        <Link to={"/"} className="btn2">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
        </Link>
        </section>
        </>
    )
}

export default MemberSettingPage;