"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Putting everything in here because I'm physically too lazy to just seperate it into modules for now.
const axios_1 = __importDefault(require("axios"));
const sms = (key, opts, operation) => __awaiter(void 0, void 0, void 0, function* () {
    const op = operation || undefined; // Unused parameter for now
    let url; // Unused parameter as its a descendent from op ^
    if (!key || !opts) {
        throw new Error('[PARAMETERS_ERROR] Need to fill all parameters');
    }
    ;
    if (!opts.to || !opts.message && op != 'retrieve') {
        throw new Error('[PARAMETERS_ERROR] Need to fill all options');
    }
    ;
    (0, axios_1.default)({
        method: 'post',
        url: 'https://ts.textbase.us/v1/sms',
        data: {
            'token': key,
            'to': opts.to,
            'message': opts.message
        }
    }).then((d) => {
        console.log(d);
        return d;
    }).catch((e) => {
        throw new Error('[REQUEST] An error occured during request \n' + e);
    });
});
module.exports = {
    sms
};
