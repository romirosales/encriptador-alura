function validateInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showError(message) {
    document.getElementById("errorMessage").textContent = message;
}

function clearError() {
    document.getElementById("errorMessage").textContent = "";
}

function encryptText() {
    let input = document.getElementById("inputText").value;
    if (!validateInput(input)) {
        showError("El texto solo debe contener letras minúsculas y espacios. No se permiten números ni caracteres especiales.");
        return;
    }
    clearError();
    let encryptedText = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let input = document.getElementById("inputText").value;
    if (!validateInput(input)) {
        showError("El texto solo debe contener letras minúsculas y espacios. No se permiten números ni caracteres especiales.");
        return;
    }
    clearError();
    let decryptedText = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    let output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
}


