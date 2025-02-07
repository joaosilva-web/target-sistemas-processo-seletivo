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

// Segunda questão
document.getElementById("fibonacciForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

    const inputElement = document.getElementById("inputNumberToCalcFibonacci");
    const valueToCalc = inputElement.value;

    calcExistInFibonacci(valueToCalc)
});

function calcExistInFibonacci(valueReceived) {
        let prevValue = 0;
        let currentValue = 1;
        let fibonacci = 0;
        let formattedValueReceived = parseInt(valueReceived)
      
        while (fibonacci <= formattedValueReceived) {
          fibonacci = prevValue + currentValue;
          prevValue = currentValue;
          currentValue = fibonacci;
      
          if (formattedValueReceived === fibonacci || formattedValueReceived === 0) {
            document.getElementById("secondQuestionResult").innerText = "O número informado pertence à sequência de Fibonacci";
            return;
          }
      
          if (fibonacci > formattedValueReceived) {
            document.getElementById("secondQuestionResult").innerText = "O número informado não pertence à sequência de Fibonacci";
            return;
          }
        }
}

function helloFunction() {
console.log("hello world!")
}