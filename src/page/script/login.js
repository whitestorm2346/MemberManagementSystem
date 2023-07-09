import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://opmmtdruwghceprzcjds.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbW10ZHJ1d2doY2VwcnpjamRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODc2MDY3MSwiZXhwIjoyMDA0MzM2NjcxfQ.VfppuT4nWQrJIXSspzh4O8f-zviDC_H71o8-AGCY3Mc';

const supabase = createClient(supabaseUrl, supabaseKey);

const fetchUsers = async () => {
    let {data, error} = await supabase.from('member-list').select('*')

    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
};

fetchUsers();
  
const login = async (account, password) => {
    let {member, error} = await supabase
        .from('member-list')
        .select('*')
        .eq('account', account)

    if (error) {
        console.error(error);
        return;
    }

    if(member === []){

    }
    else{
        if(password === member.password){
            alert('Login Successfully!')
        }
        else{
            alert('This account does not exist, or the password is wrong!')
        }
    }
}

const submit_btn = document.getElementById('submit')
submit_btn.addEventListener('click', login)

const reset_btn = document.getElementById('reset')
reset_btn.addEventListener('click', () => {
    console.log('reset active')

    const input_account = document.getElementById('account')
    input_account.innerText('')

    const input_password = document.getElementById('password')
    input_password.innerText('')
})