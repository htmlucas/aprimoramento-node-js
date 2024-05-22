import prompt from "prompt"
import promptQRCpde from '../../prompt-schemas/prompt-qrcode.js';
import handle from "./handle.js";

async function createQRCode(){

    prompt.get(promptQRCpde, handle)
}

export default createQRCode