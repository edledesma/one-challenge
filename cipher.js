const secretMsg = document.querySelector('#messageContent')
const secretMsgResult = document.querySelector('#messageResult')
const secretMsgBtn = document.querySelector('#divBtnr')
const imgRest = document.querySelector('#imageHolder')
const regex = /[^a-z0-9\s]/i; //Expresion regular que contiene los caracteres aceptados
let msgArray = [];
let returnString = "";

// Funcion que encripta los mensajes

function encryptMsg(){
    hideImg()
    if (checkChar(secretMsg.value) == true){
        secretMsgResult.value = "Caracter invalido detectado"
    }else{
        msgArray = secretMsg.value.toLowerCase().split(""); // Convierte el mensaje a un arreglo separado por letras
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
}

// Funcion que decripta los mensajes

function decryptMsg(){
    hideImg()
    if (checkChar(secretMsg.value) == true){
        secretMsgResult.value = "Caracter invalido detectado"
    }else{
        returnString = secretMsg.value.toLowerCase()
        while (returnString.includes("enter")||returnString.includes("imes")||returnString.includes("ai")||returnString.includes("ober")||returnString.includes("ufat")){
            returnString = returnString.replace("enter", "e")
            returnString = returnString.replace("imes", "i")
            returnString = returnString.replace("ai", "a")
            returnString = returnString.replace("ober", "o")
            returnString = returnString.replace("ufat", "u")
        }
        secretMsgResult.value = returnString;
    }
}
// Funcion que copia el resultado al portapapeles

function copyMsg(){
    navigator.clipboard.writeText(secretMsgResult.value);
}

// Funcion que limpia el contenido de los campos

function clearMsg(){
    imgRest.style.display = 'flex';
    secretMsg.value = ""
    secretMsgResult.value = "";
    secretMsgResult.style.display="none";
    secretMsgBtn.style.display="none";
}

// Funcion que oculta la imagen mientras no exista un mensaje

function hideImg(){
    imgRest.style.display = 'none';
    secretMsgResult.style.display="block";
    secretMsgBtn.style.display="block";
}

// Funcion que controla si existen caracteres especiales o tildes

function checkChar(message){
    return regex.test(message)
}