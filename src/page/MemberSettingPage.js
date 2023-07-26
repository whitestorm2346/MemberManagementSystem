import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function MemberSettingPage(){
    const { 
        userID,
        userNickname,
        setUserNickname,
        fontColor,
        setFontColor
    } = useContext(LoginContext)
    const navigate = useNavigate()

    const modify = async () => {
        let new_nickname = document.getElementById('new-nickname').value
        let font_color = document.getElementById('font-color').value

        if (new_nickname === '') new_nickname = userNickname

        let {data, error} = await supabase
        .from('member-setting')
        .update([{
            'nickname': new_nickname,
            'font_color': font_color
        }])
        .eq('id', userID)
        .select("*")

        if (error) {
            console.error(error);
            return false; 
        }

        setUserNickname(new_nickname)
        setFontColor(font_color)

        alert('Modified Successfully!')

        navigate('/')
    }

    const reset = () => {
        const new_nickname_input = document.getElementById('new-nickname')
        new_nickname_input.value = ''

        const font_color_input = document.getElementById('font-color')
        font_color_input.value = fontColor
    }

    return(
        <>
        <section className="member-setting">
        <h1 className="title">會員資料設定</h1>
        <div className="container">
            <div className="blank2">
                <p className="blank-title">New Nickname</p>
                <input
                type="text"
                name="new-nickname"
                id="new-nickname"
                />
            </div>
            <div className="blank3">
                <p className="blank-title">Font Color</p>
                <input
                type="color"
                className="input-color"
                name="font-color"
                id="font-color"
                />
            </div>
        </div>
        <div className="buttons">
            <button type="submit" className="btn submit" id="submit" onClick={modify}>修改</button>
            <button type="reset" className="btn reset warning" id="reset" onClick={reset}>重置</button>
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

export default MemberSettingPage;