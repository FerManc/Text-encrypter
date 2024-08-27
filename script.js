
document.getElementById("encryptBtn").addEventListener("click", encryptText);
document.getElementById("decryptBtn").addEventListener("click", decryptText);

function encryptText() {
    const shift = 3; // Número de posiciones para desplazarse en el cifrado César
    const spaceReplacement = "x"; // Caracter para reemplazar los espacios
    let inputText = document.getElementById("inputText").value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        
        if (charCode === 32) { // Reemplazar espacios con una letra (ejemplo: "x")
            outputText += spaceReplacement;
        } else if (charCode >= 65 && charCode <= 90) { // Letras mayúsculas
            outputText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Letras minúsculas
            outputText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            outputText += inputText.charAt(i); // Otros caracteres no se encriptan
        }
    }

    document.getElementById("outputText").value = outputText;
}

function decryptText() {
    const shift = 3; // Debe coincidir con el valor usado para encriptar
    const spaceReplacement = "x"; // Caracter que fue usado para reemplazar los espacios
    let inputText = document.getElementById("inputText").value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (inputText.charAt(i) === spaceReplacement) { // Revertir el reemplazo de espacio
            outputText += " ";
        } else if (charCode >= 65 && charCode <= 90) { // Letras mayúsculas
            outputText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Letras minúsculas
            outputText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            outputText += inputText.charAt(i); // Otros caracteres no se desencriptan
        }
    }

    document.getElementById("outputText").value = outputText;
}
