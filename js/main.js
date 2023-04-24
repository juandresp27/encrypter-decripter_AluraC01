function ocultar(ID){
    document.getElementById(ID).style.display = 'none';
}

function mostrar(ID){
    document.getElementById(ID).style.display = 'block';
}



const encryptFunc = ()=>{
    const vowels= ["a","e","i","o","u"];
    const encryptedValues=["ai","enter","imes","ober","ufat"];
    const input = document.querySelector("#textInput");
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
    document.getElementById("output").innerHTML = sentence;
    mostrar("out-copy")
}

const decryptFunc = ()=>{
    const vowels= ["a","e","i","o","u"];
    const encryptedValues=["ai","enter","imes","ober","ufat"];
    const input = document.querySelector("#textInput");
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
    document.getElementById("output").innerHTML = textInput;
    mostrar("out-copy")
}

const copyFunction = ()=> {
    // Get the text field
    var copyText = document.getElementById("output");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}




var encrypterButton = document.querySelector("#encrypter");
encrypterButton.onclick = encryptFunc; 

var decryptorButton = document.querySelector("#decryptor");
decryptorButton.onclick = decryptFunc; 
    
var copyButton = document.querySelector("#copy");
copyButton.onclick = copyFunction; 


    