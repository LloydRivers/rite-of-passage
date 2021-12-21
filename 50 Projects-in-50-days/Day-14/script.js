let global = [];

const tBody = document.getElementById("t-body");

async function getData() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  let string = "";
  const response = await data.json();
  global = [...response];

  response.forEach((element) => {
    string += `<tr>
      <td>${element.name.official} </td>
      <td>${element.capital} </td>
      <td>${element.continents[0]} </td>
      <td>${element.flag} </td>
      <td>${element.population} </td>
      <td>${element.timezones[0]} </td>
      </tr>`;
  });

  tBody.innerHTML = string;
}
getData();
//Node
let userInput = document.getElementById("userInput");
userInput.addEventListener("keypress", filterd);
userInput.addEventListener("keydown", filterd);
userInput.addEventListener("keyup", filterd);

function filterd() {
  let string = "";
  let userInputVal = document.getElementById("userInput").value;
  let userChoice = global.filter((input) => {
    if (input.name.official.includes(userInputVal)) return input;
  });

  console.log(userChoice);
  userChoice.forEach((element) => {
    string += `<tr>
      <td>${element.name.official} </td>
      <td>${element.capital} </td>
      <td>${element.continents[0]} </td>
      <td>${element.flag} </td>
      <td>${element.population} </td>
      <td>${element.timezones[0]} </td>
      </tr>`;
  });

  tBody.innerHTML = string;
}
