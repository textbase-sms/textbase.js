// Putting everything in here because I'm physically too lazy to just seperate it into modules for now.
import axios from 'axios'
import { BasicType } from "../lib/typings/base";

const sms = async(key:BasicType, opts:any, operation?:BasicType) => {
    const op = operation || undefined // Unused parameter for now
    let url; // Unused parameter as its a descendent from op ^

    let res;

    if(!key || !opts) {
        throw '[PARAMETERS_ERROR] Need to fill all parameters'
    };
    if(!opts.to || !opts.message && op != 'retrieve') {
        throw '[PARAMETERS_ERROR] Need to fill all options'
    };

    await axios({
        method: 'get',
        url: 'https://ts.textbase.us/v1/sms/',
        data: {
            'token': key,
            'to': opts.to,
            'message': opts.message
        }
    }).then((d) => {
        res = d;
    }).catch((e) => {
        if(e.response.status == 401) {
            if(e.data.message == "Your token has been blocked. Contact support.") {
                throw '[TOKEN_BLOCKED] Your token has been blocked. Contact support.'
            } else if(e.data.message == "Invalid API Token") {
                throw '[TOKEN_INVALID] Your token is invalid.'
            }
        }
    });

    return res;
}

module.exports = {
    sms
}