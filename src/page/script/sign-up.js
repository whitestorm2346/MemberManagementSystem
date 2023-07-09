import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://opmmtdruwghceprzcjds.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbW10ZHJ1d2doY2VwcnpjamRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODc2MDY3MSwiZXhwIjoyMDA0MzM2NjcxfQ.VfppuT4nWQrJIXSspzh4O8f-zviDC_H71o8-AGCY3Mc';

const supabase = createClient(supabaseUrl, supabaseKey);

export const sign_up = async () => {
    let account = document.getElementById('account').value
    let new_password = document.getElementById('new-password').value
    let check_password = document.getElementById('check-password').value

    if (new_password !== check_password) {
        alert('The passwords do not fit!')
        return;
    }

    let {data, error} = await supabase
    .from('member-list')
    .select("*")
    .eq('account', account)

    if (error) {
        console.error(error);
    }
    else if (data.length) {
        alert('This account already exist!')
    }
    else {
        let { data, error } = await supabase
            .from('member-list')
            .insert([{ 
                account: account, 
                password: new_password 
            }]).select()

        if (error) {
            console.error(error);
            return;
        }

        console.log(data)
    }
}

export const reset = () => {
    console.log('reset active')

    const input_account = document.getElementById('account')
    input_account.value = ''

    const input_new_password = document.getElementById('new-password')
    input_new_password.value = ''

    const input_check_password = document.getElementById('check-password')
    input_check_password.value = ''
}