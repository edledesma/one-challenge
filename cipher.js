let secretMsg = document.querySelector('#messageContent')
let secretMsgResult = document.querySelector('#messageResult')
let msgArray = [];
let returnString = "";



function encryptMsg(){
    msgArray = secretMsg.value.split("");
    for (let i = 0; i < msgArray.length; i++){
        console.log(msgArray[i]);
        switch (msgArray[i]){
            case 'e':
                msgArray[i] = "enter";
                break;
            case 'i':
                msgArray[i] = "imes";
                break;
            case 'a':
                msgArray[i] = "ai";
                break;
            case 'o':
                msgArray[i] = "ober";
                break;
            case 'u':
                msgArray[i] = "ufat";
                break;
        }
        console.log(msgArray[i]);
    }
    returnString = msgArray.toString(); 
    returnString = returnString.replaceAll(',',"")
    secretMsgResult.value = returnString;
}

function decryptMsg(){
    msgArray = secretMsg.value.split("");
    msgArray = msgArray.replace('enter','e')
    msgArray = msgArray.replace('imes','i')
    msgArray = msgArray.replace('ai','a')
    msgArray = msgArray.replace('ober','o')
    msgArray = msgArray.replace('ufat','u')
    secretMsgResult.value = msgArray
}

function copyMsg(){
    navigator.clipboard.writeText(secretMsgResult.value);
}

/* La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
enter ai ober ufat imes 

HOLA

Hoberlai

*/