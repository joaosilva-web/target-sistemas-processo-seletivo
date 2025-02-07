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

    //third question

    function filterData(dataReceived){//Function to remove All useless days
       const dataWithoutUselessDays = dataReceived.filter(data => data.valor !== 0);
       return dataWithoutUselessDays;
    }

    function getExtremesProfit(dataReceived){
        let highestProfit = 0;
        let lowestProfit = 0
        dataReceived.map(data => {
            if(data.valor > highestProfit) {
                highestProfit = data.valor;
            }
        })

        lowestProfit = highestProfit; //set the lowest profit as the highest profit to start with the highest possible value parameter
        dataReceived.map(data => {
            if(data.valor <= lowestProfit){
                lowestProfit = data.valor;
            }
        })
        return {highestProfit, lowestProfit}
    }

    function getAboveAverageProfitDays(dataReceived) {
        const daysToCalcAverage = dataReceived.length;
        let sumProfit = 0
        let averageProfit = 0;
        console.log(dataReceived)
        for(let i = 0; i < daysToCalcAverage; i++) {
            sumProfit += dataReceived[i].valor;
        }

        averageProfit = sumProfit / daysToCalcAverage;

        const aboveAverageProfitDays = dataReceived.filter(data => data.valor >= averageProfit);

        return aboveAverageProfitDays.length;
    }

    fetch("./dados.json")
    .then(response => response.json())
    .then(data => {
       const newData = filterData(data);

       const extremeProfits = getExtremesProfit(newData);
    

       const aboveAverageProfitDays = getAboveAverageProfitDays(newData)
       document.getElementById("highestProfit").innerText = `O maior Faturamento foi de ${extremeProfits.highestProfit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
       document.getElementById("lowestProfit").innerText = `O menor Faturamento foi de ${extremeProfits.lowestProfit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
       document.getElementById("aboveAverageProfitDays").innerText = `A quantidade de dias que tiveram um lucro maior do que a média mensal foram: ${aboveAverageProfitDays}`;


    })
    .catch(error => {
        console.error('Erro ao ler o arquivo JSON:', error);
    })

function helloFunction() {
console.log("hello world!")
}