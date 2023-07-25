import { Link } from "react-router-dom";

function MainPageButtons({ userType }) {
    let element;

    switch(userType){
        case '0':
            element = 
                <Link to={"/member-setting"} className="btn2">
                    <i className="fa-solid fa-gear"></i>
                    <span>Setting</span>
                </Link>
            break;

        case '1':
            element = 
                <Link to={"/register"} className="btn2">
                    <i className="fa-solid fa-address-card"></i>
                    <span>Register for Membership</span>
                </Link>
            break;

        default:
            element = null;
            break;
    }

    return ({element});
}
  
export default MainPageButtons;