import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const apikey = process.env.REACT_APP_APIKEY;
const Authorization = process.env.REACT_APP_AUTHORIZATION;

function UserName({ userType }) {
    const { 
        userAccount, 
        userNickname, 
        userID, 
        setUserNickname,
        setFontColor
    } = useContext(LoginContext)

    const set_member_name = async () => {
        try{
            const response = await fetch(`https://opmmtdruwghceprzcjds.supabase.co/rest/v1/member-setting?select=*&id=eq.${userID}`, {
              method: 'GET',
              headers: {
                apikey: apikey,
                Authorization: Authorization
              }
            });
            const data = await response.json();

            setUserNickname(data[0].nickname)
            setFontColor(data[0].font_color)
        }
        catch(error){
            console.log(error);
        }
    }

    set_member_name()

    let name;

    switch(userType){
        case 0:
            name = userAccount
            break;

        case 1:
            name = userNickname
            break;

        default:
            name = '';
            break;
    }

    return (<>{name}</>);
}
  
export default UserName;