import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext} from '../context/LoginContext';

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function RegisterPage(){
    const { userID, userAccount, setUserType } = useContext(LoginContext)
    const navigate = useNavigate();

    const insert_member_setting = async () => {
        let {data, error} = await supabase
        .from('member-setting')
        .insert([{
            'id': userID,
            'nickname': userAccount,
        }])
        .select('*')

        if (error) {
            console.error(error);
            return false; 
        }

        console.log(data)
    }

    const register = async () => {
        let checkbox = document.getElementById('check-membership-terms')

        if(checkbox.checked){
            let {data, error} = await supabase
            .from('member-list')
            .update({'type': 1})
            .eq('id', userID)
            .select('*')

            if (error) {
                console.error(error);
                return false; 
            }

            console.log(data)
            setUserType(1)

            alert('Register Successfully!')

            insert_member_setting()

            navigate('/');
        }
        else {
            alert('Please read the terms before you register for the membership!')
        }
    }

    return(
        <>
        <section className="register">
        <h1 className="title">註冊會員</h1>
        <div className="container">
            <div className="blank2" id="membership-terms">
                <input
                type="checkbox"
                className="checkbox"
                name="check-membership-terms"
                id="check-membership-terms"
                />
                <p className="center">請詳細閱讀完<span>會員條款</span>後再勾選</p>
            </div>
        </div>
        <div className="buttons-around">
            <button type="submit" className="btn submit" id="submit" onClick={register}>確認註冊</button>
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

export default RegisterPage;