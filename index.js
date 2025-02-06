function firstQuestion() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }


    return SOMA;
}

// Exibir o resultado no HTML
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resultado").innerText = "Portanto o resultado é: " + firstQuestion();
});

function helloFunction() {
console.log("hello world!")
}