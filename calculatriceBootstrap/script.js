const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const buttonPlus = document.getElementById("buttonPlus");
const buttonMoins = document.getElementById("buttonMoins");
const buttonEgal = document.getElementById("buttonEgal");
const buttonDelete = document.getElementById("buttonDelete");

const numberUser = document.getElementById("numberUser");
let currentValue = "";
let array = [];

//fonction qui concatène les nombres de la calculatrice
function setNumberValue(value) {
  currentValue += value;
  numberUser.value = currentValue;
}

function egalOperation() {
  if (currentValue.includes("+")) {
    const values = currentValue.split("+");

    // Convertit chaque partie en nombre à virgule flottante et ajoute à array
    array = values.map((value) => parseFloat(value));

    // Additionne toutes les valeurs dans array
    const result = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    // Met à jour la valeur du champ numberUser avec le résultat
    numberUser.value = result;

    // Réinitialise currentValue pour une nouvelle opération
    currentValue = "";
  } else if (currentValue.includes("-")) {
    // Divise currentValue en fonction de l'opérateur "+"
    const values = currentValue.split("-");

    // Convertit chaque partie en nombre à virgule flottante et ajoute à array
    array = values.map((value) => parseFloat(value));

    // Additionne toutes les valeurs dans array
    const result = array.reduce(
      (accumulator, currentValue) => currentValue - accumulator,
      0
    );

    // Met à jour la valeur du champ numberUser avec le résultat
    if (array[0] < array[1]) {
      console.log(array[0]);
      console.log(array[1]);
      numberUser.value = "-" + result;
    } else {
      numberUser.value = Math.abs(result);
    }

    // Réinitialise currentValue pour une nouvelle opération
    currentValue = "";
  }
}

zero.addEventListener("click", () => setNumberValue(0));
one.addEventListener("click", () => setNumberValue(1));
two.addEventListener("click", () => setNumberValue(2));
three.addEventListener("click", () => setNumberValue(3));
four.addEventListener("click", () => setNumberValue(4));
five.addEventListener("click", () => setNumberValue(5));
six.addEventListener("click", () => setNumberValue(6));
seven.addEventListener("click", () => setNumberValue(7));
eight.addEventListener("click", () => setNumberValue(8));
nine.addEventListener("click", () => setNumberValue(9));
buttonPlus.addEventListener("click", () => setNumberValue("+"));
buttonMoins.addEventListener("click", () => setNumberValue("-"));
buttonEgal.addEventListener("click", () => egalOperation());
buttonDelete.addEventListener("click", () => {
  currentValue = "";
  numberUser.value = currentValue;
});
