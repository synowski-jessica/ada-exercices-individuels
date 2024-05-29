module.exports = {
  getLatinCharacterList,
  translateLatinCharacter,
  encode,
};

function getLatinCharacterList(a) {
  let tableauMots = a.split("");
  console.log(tableauMots);
  return tableauMots;
}

// getLatinCharacterList("Hello world");

const latinToMorseDictionary = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function translateLatinCharacter(caractere) {
  let lettreMorse = latinToMorseDictionary[caractere.toUpperCase()];
  return lettreMorse;
}

translateLatinCharacter("A");
function encode(texte) {
  let result = [];
  let motTableau = getLatinCharacterList(texte);
  for (let i = 0; i < motTableau.length; i++) {
    result.push(translateLatinCharacter(motTableau[i]));
  }
  return result;
}
console.log(encode("AImER"));

// Add Button Logic

const message = document.querySelector("#message");
const latinToMorse = document.querySelector("#latin-to-morse");
const morseOutput = document.querySelector("#morse-output");

latinToMorse.addEventListener("click", function () {
  const latinText = message.value;
  morseOutput.textContent = encode(latinText);
});
