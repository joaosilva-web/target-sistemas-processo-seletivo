// First question: Sum of numbers up to 13
function firstQuestion() {
  let INDICE = 13; // The number until which we want to sum
  let SOMA = 0;    // Variable to store the sum
  let K = 0;       // Variable for counting

  // Loop to calculate the sum of numbers from 1 to 13
  while (K < INDICE) {
    K = K + 1;  // Increment K
    SOMA = SOMA + K;  // Add K to the sum
  }

  return SOMA; // Return the final sum
}

// Display result on the HTML after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("resultado").innerText =
    "Portanto o resultado é:: " + firstQuestion(); // Show the sum result
});

// Second question: Check if a number is part of the Fibonacci sequence
document
  .getElementById("fibonacciForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission and page reload

    const inputElement = document.getElementById("inputNumberToCalcFibonacci");
    const valueToCalc = inputElement.value; // Get the value from the input field

    calcExistInFibonacci(valueToCalc); // Call the Fibonacci calculation function
  });

// Function to check if the number exists in the Fibonacci sequence
function calcExistInFibonacci(valueReceived) {
  let prevValue = 0; // First number of Fibonacci sequence
  let currentValue = 1; // Second number of Fibonacci sequence
  let fibonacci = 0;
  let formattedValueReceived = parseInt(valueReceived); // Convert input to integer

  // Loop to generate Fibonacci numbers until we find the received value or exceed it
  while (fibonacci <= formattedValueReceived) {
    fibonacci = prevValue + currentValue;  // Calculate next Fibonacci number
    prevValue = currentValue;
    currentValue = fibonacci;

    // Check if the received value is found in the sequence
    if (formattedValueReceived === fibonacci || formattedValueReceived === 0) {
      document.getElementById("secondQuestionResult").innerText =
        "O número pertence a sequência Fibonacci"; // Show result if number is in Fibonacci sequence
      return;
    }

    // If Fibonacci number exceeds the received value
    if (fibonacci > formattedValueReceived) {
      document.getElementById("secondQuestionResult").innerText =
        "O número não pertence a sequência Fibonacci"; // Show result if number is not in Fibonacci sequence
      return;
    }
  }
}

// Third question: Analyze distributor data (profit and days above average)
function filterData(dataReceived) {
  // Function to remove days with no profit (zero values)
  const dataWithoutUselessDays = dataReceived.filter(
    (data) => data.valor !== 0
  );
  return dataWithoutUselessDays; // Return the filtered data
}

// Function to calculate the highest and lowest profit
function getExtremesProfit(dataReceived) {
  let highestProfit = 0; // Start with zero as the highest profit
  let lowestProfit = 0;  // Start with zero as the lowest profit

  // Loop to find the highest profit
  dataReceived.map((data) => {
    if (data.valor > highestProfit) {
      highestProfit = data.valor;
    }
  });

  // Set lowest profit to the highest value initially
  lowestProfit = highestProfit;

  // Loop to find the lowest profit
  dataReceived.map((data) => {
    if (data.valor <= lowestProfit) {
      lowestProfit = data.valor;
    }
  });
  return { highestProfit, lowestProfit }; // Return the extremes
}

// Function to calculate the number of days with above-average profit
function getAboveAverageProfitDays(dataReceived) {
  const daysToCalcAverage = dataReceived.length; // Get total number of days
  let sumProfit = 0; // Variable to store total profit
  let averageProfit = 0; // Variable to store average profit

  // Calculate the sum of all profits
  for (let i = 0; i < daysToCalcAverage; i++) {
    sumProfit += dataReceived[i].valor;
  }

  averageProfit = sumProfit / daysToCalcAverage; // Calculate average profit

  // Filter out days with profit greater than or equal to average
  const aboveAverageProfitDays = dataReceived.filter(
    (data) => data.valor >= averageProfit
  );

  return aboveAverageProfitDays.length; // Return the count of such days
}

// Fetch data and display results for the third question
fetch("./dados.json")
  .then((response) => response.json()) // Fetch data from JSON file
  .then((data) => {
    const newData = filterData(data); // Filter data (remove useless days)

    const extremeProfits = getExtremesProfit(newData); // Get highest and lowest profits

    const aboveAverageProfitDays = getAboveAverageProfitDays(newData); // Get count of days above average

    // Display the results
    document.getElementById(
      "highestProfit"
    ).innerText = `O maior Faturamento foi de:  ${extremeProfits.highestProfit.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    )}`;

    document.getElementById(
      "lowestProfit"
    ).innerText = `O menor Faturamento foi de: ${extremeProfits.lowestProfit.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    )}`;

    document.getElementById(
      "aboveAverageProfitDays"
    ).innerText = `A quantidade de dias que tiveram um lucro maior do que a média mensal foram: ${aboveAverageProfitDays}`;
  })
  .catch((error) => {
    console.error("Error reading the JSON file:", error); // Handle errors
  });

// Fourth question: Calculate percentage of total sales for each state
function getMonthlySum(data) {
  let TotalSum = 0;

  // Loop to calculate total sales for the month
  for (let i = 0; i < data.length; i++) {
    TotalSum += data[i].faturamento;
  }

  return TotalSum; // Return the total sum
}

// Function to calculate the percentage of sales for each state
function getPercentageEachState(data, totalSum) {
  let arrPercentageEachState = [];

  data.forEach((state) => {
    // Calculate the percentage for each state
    let percentage = (state.faturamento / totalSum).toLocaleString("pt-BR", {
      style: "percent",
      minimumFractionDigits: 2,
    });
    arrPercentageEachState.push({
      estado: state.estado,
      porcentagem: percentage,
    });
  });

  return arrPercentageEachState; // Return the percentage data
}

// Fetch data and display results for the fourth question
fetch("./faturamentosDistribuidora.json")
  .then((response) => response.json()) // Fetch data from JSON file
  .then((data) => {
    const monthlySum = getMonthlySum(data); // Calculate total monthly sales
    const percentageEachState = getPercentageEachState(data, monthlySum); // Get percentage of each state

    // Display the result
    document.getElementById(
      "percentageOfStates"
    ).innerHTML = `
    <ul>
        ${percentageEachState.map(data =>
      `<li>${data.estado}: ${data.porcentagem}</li>`
    ).join('')}
    </ul>`;
  })
  .catch((error) => {
    console.error("Error reading the JSON file:", error); // Handle errors
  });

// Fifth question: Reverse a string input by the user
function reverseString(str) {
  let reversed = "";

  // Loop to reverse the string
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }

  return reversed; // Return the reversed string
}

// Listen for form submission to reverse the string
document.getElementById("stringToInvertForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload on form submission

  const inputElement = document.getElementById("userInput");

  const originalString = inputElement.value; // Get input value
  const reversedString = reverseString(originalString); // Reverse the string

  // Display the result
  document.getElementById("showStringInverted").innerHTML = `<p><strong>Reversed string:</strong> ${reversedString}</p>`;
});
