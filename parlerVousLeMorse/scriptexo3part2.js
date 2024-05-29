const morseToLatinDictionary = {
  "-": "T",
  "--": "M",
  "---": "O",
  "--.": "G",
  "--.-": "Q",
  "--..": "Z",
  "-.": "N",
  "-.-": "K",
  "-.--": "Y",
  "-.-.": "C",
  "-..": "D",
  "-..-": "X",
  "-...": "B",
  ".": "E",
  ".-": "A",
  ".--": "W",
  ".---": "J",
  ".--.": "P",
  ".-.": "R",
  ".-..": "L",
  "..": "I",
  "..-": "U",
  "..-.": "F",
  "...": "S",
  "...-": "V",
  "....": "H",
};
//sépare le mots en 1 caractere par caractere
function getMorseCharacterList(a) {
  let tableauMots = a.split(" ");
  return tableauMots;
}

console.log(getMorseCharacterList("-.-. .. ..- -"));

// traduit 1 morse en 1 lettre
function translateMorseCharacter(caractere) {
  let lettreLatin = morseToLatinDictionary[caractere.toUpperCase()];
  return lettreLatin;
}
console.log(translateMorseCharacter("...."));

function decode(texte) {
  let result = [];
  let motTableau = getMorseCharacterList(texte);
  for (let i = 0; i < motTableau.length; i++) {
    result.push(translateMorseCharacter(motTableau[i]));
  }
  return result;
}
let mot = decode("... .- .-.. ..- - / - --- ..");
let newMot = mot.join(" ");
console.log(newMot);

// Add Button Logic

const messageM = document.querySelector("#message-morse");
const morseToLatin = document.querySelector("#morse-to-latin");
const latinOutput = document.querySelector("#latin-output");

morseToLatin.addEventListener("click", function () {
  const morseText = messageM.value;
  latinOutput.textContent = decode(morseText);
});
