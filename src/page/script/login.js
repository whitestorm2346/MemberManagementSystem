import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://opmmtdruwghceprzcjds.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbW10ZHJ1d2doY2VwcnpjamRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODc2MDY3MSwiZXhwIjoyMDA0MzM2NjcxfQ.VfppuT4nWQrJIXSspzh4O8f-zviDC_H71o8-AGCY3Mc';

const supabase = createClient(supabaseUrl, supabaseKey);
  
export const login = async () => {
    let account = document.getElementById('account').value
    let password = document.getElementById('password').value
    // console.log(account, password)

    let {data, error} = await supabase
    .from('member-list')
    .select("*")
    .eq('account', account)

    if (error) {
        console.error(error);
        return;
    }

    console.log(data)

    if(data.length){
        if(password === data[0].password){
            alert('Login Successfully!')
        }
        else{
            alert('This account does not exist, or the password is wrong!')
        }
    }
    else{
        alert('This account does not exist, or the password is wrong!')
    }
}

export const reset = () => {
    // console.log('reset active')

    const input_account = document.getElementById('account')
    input_account.value = ''

    const input_password = document.getElementById('password')
    input_password.value = ''
}

