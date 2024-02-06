let secretMsg = document.querySelector('#messageContent')
let secretMsgResult = document.querySelector('#messageResult')
let msgArray = [];
let returnString = "";
let tempString = "";

// Funcion que encripta los mensajes

function encryptMsg(){
    msgArray = secretMsg.value.split(""); // Convierte el mensaje a un arreglo separado por letras
    for (let i = 0; i < msgArray.length; i++){ //Revisa cada letra del arreglo, si es una vocal su valor se reemplaza
        console.log(msgArray[i]);
        if(msgArray[i] == 'e'){
                msgArray[i] = "enter";
        }else if(msgArray[i] == 'i'){
            msgArray[i] = "imes";
        }else if(msgArray[i] == 'a'){
            msgArray[i] = "ai";
        }else if(msgArray[i] == 'o'){
            msgArray[i] = "ober";
        }else if(msgArray[i] == "u"){
            msgArray[i] = "ufat";
        }
        console.log(msgArray[i]);
    }
    returnString = msgArray.toString();  // Retorna el arreglo a una cadena
    returnString = returnString.replaceAll(',',"") //Remueve las comas del arreglo
    secretMsgResult.value = returnString;
}

// Funcion que decripta los mensajes

function decryptMsg(){
    tempString = secretMsg.value
    while (tempString.includes("enter")||tempString.includes("imes")||tempString.includes("ai")||tempString.includes("ober")||tempString.includes("ufat")){
        tempString = tempString.replace("enter", "e")
        tempString = tempString.replace("imes", "i")
        tempString = tempString.replace("ai", "a")
        tempString = tempString.replace("ober", "o")
        tempString = tempString.replace("ufat", "u")
        console.log(tempString)
    }
    secretMsgResult.value = tempString;
}
// Funcion que copia el resultado al portapapeles

function copyMsg(){
    navigator.clipboard.writeText(secretMsgResult.value);
}
