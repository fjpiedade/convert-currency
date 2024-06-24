// variables
let age = 35;
let name = "fjpiedade";

console.log(name);
console.log(age);

// array and object
let item1 = "water";
let item2 = "paste";
let item3 = "courante";

let items = ["water", "paste", "courante"];

console.log(items);
console.log(items[1]);

// Objects

let person = {
  name: "Phi John",
  age: 30,
  level: 8,
  strong: 800,
};

console.log(person);
console.log(person.name);
console.log(person.strong);

// functions

function summer(a, b) {
  let result = a + b;
  return result;
}

let x = summer(20, 15);
console.log(x);

//Arrow Function
let sumArrowFunction = (a, b) => {
  let result = a + b;
  return result;
};

// conditions

if (person.age >= 18) {
  console.log("Congratulations! you can go to prison now!");
} else {
  console.log("Congratulations! you cannot go to prison now!");
}

//Loop

let listOfNumbers = [10, 20, 30, 40, 50, 70, 89, 99];

for (let item of listOfNumbers) {
  console.log(item);
}

// built in function
//alert("Phi John ...");

function warning() {
  alert("Phi John ...");
}

//document.addEventListener("click", warning);

// let button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   warning();
// });

let dolar = 5.1;
let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
  //console.log("Pressed Input USD");
  //console.log(usdInput.value);
  //usdInput.value = formatCurrency(usdInput.value);
  convertCurrency("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
  //console.log("Pressed Input BRL");
  //brlInput.value = formatCurrency(brlInput.value);
  convertCurrency("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
  usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
  brlInput.value = formatCurrency(brlInput.value);
});

usdInput.value = "1000,00";
//brlInput.value = "1000,00";
convertCurrency("usd-to-brl");

function formatCurrency(value) {
  let fixedValue = fixValue(value);
  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };

  let formatter = new Intl.NumberFormat("pt-BR", options);

  return formatter.format(fixedValue);
}

function fixValue(value) {
  let fixedValue = value.replace(",", ".");
  let floatValue = parseFloat(fixedValue);
  if (floatValue == NaN) {
    floatValue = 0;
  }
  return floatValue;
}

function convertCurrency(type) {
  if (type == "usd-to-brl") {
    //arrangement the value
    //convert the value
    //show the result

    let fixedValue = fixValue(usdInput.value);
    let result = fixedValue * dolar;
    result = result.toFixed(2);
    brlInput.value = formatCurrency(result);
  }

  if (type == "brl-to-usd") {
    //arrangement the value
    //convert the value
    //show the result
    let fixedValue = fixValue(brlInput.value);
    let result = fixedValue / dolar;
    result = result.toFixed(2);
    usdInput.value = formatCurrency(result);
  }
}
