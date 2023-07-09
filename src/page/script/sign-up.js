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

const sign_up = async () => {
    
}