function ocultar(ID){
    document.getElementById(ID).style.display = 'none';
}

function mostrar(ID){
    document.getElementById(ID).style.display = 'flex';
}

const encryptFunc = ()=>{
    const vowels= ["a","e","i","o","u"];
    const encryptedValues=["ai","enter","imes","ober","ufat"];
    const input = document.querySelector("#entrada-texto");
    let sentence = ""

    for(let i = 0; i < input.value.length; i++){
        let notFound = true;
        for(let j = 0; j < vowels.length; j++){
            if(input.value[i]==vowels[j]){
                sentence = sentence + encryptedValues[j];
                notFound = false;
            }
        }
        if(notFound){
            sentence = sentence + input.value[i];
        } 
    }
    
    if(sentence!=""){
        mostrar("sec-salida-copiar");
        ocultar("sec-no-encontrado");
    }else{
        ocultar("sec-salida-copiar")
        mostrar("sec-no-encontrado");
    }
    
    document.getElementById("msj-resultado").innerHTML = sentence;
    
}

const decryptFunc = ()=>{
    const vowels= ["a","e","i","o","u"];
    const encryptedValues=["ai","enter","imes","ober","ufat"];
    const input = document.querySelector("#entrada-texto");
    let textInput = input.value;
    let sentence = "";

    for(let i = 0; i < encryptedValues.length; i++){
        while(textInput.includes(encryptedValues[i])){
            let arr = textInput.split(encryptedValues[i]);
            for(let j = 0; j < arr.length; j++){
                sentence = sentence + arr[j];
                if(j != arr.length-1){
                    sentence = sentence + vowels[i];
                }
            }
            textInput = sentence;
            sentence = "";
        }
    }
    
    if(textInput!=""){
        mostrar("sec-salida-copiar");
        ocultar("sec-no-encontrado");
    }else{
        ocultar("sec-salida-copiar")
        mostrar("sec-no-encontrado");
    }

    document.getElementById("msj-resultado").innerHTML = textInput;
}

const copyFunction = ()=> {
    // Get the text field
    var copyText = document.getElementById("msj-resultado");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

var encrypterButton = document.querySelector("#boton-encriptar");
encrypterButton.onclick = encryptFunc; 

var decryptorButton = document.querySelector("#boton-desencriptar");
decryptorButton.onclick = decryptFunc; 
    
var copyButton = document.querySelector("#boton-copiar");
copyButton.onclick = copyFunction; 


    