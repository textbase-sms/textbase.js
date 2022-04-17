// Putting everything in here because I'm physically too lazy to just seperate it into modules for now.
import axios from 'axios'
import { BasicType } from "../lib/typings/base";

const sms = async(key:BasicType, opts:any, operation?:BasicType) => {
    const op = operation || undefined // Unused parameter for now
    let url; // Unused parameter as its a descendent from op ^

    if(!key || !opts) {
        throw new Error('[PARAMETERS_ERROR] Need to fill all parameters')
    };
    if(!opts.to || !opts.message && op != 'retrieve') {
        throw new Error('[PARAMETERS_ERROR] Need to fill all options')
    };

    axios({
        method: 'post',
        url: 'https://ts.textbase.us/v1/sms',
        params: {
            token: key,
            to: opts.to,
            message: opts.message
        }
    }).then((d) => {
        return d
    }).catch((e) => {
        throw new Error('[REQUEST] An error occured during request \n'+e)
    })
}

module.exports = {
    sms
}