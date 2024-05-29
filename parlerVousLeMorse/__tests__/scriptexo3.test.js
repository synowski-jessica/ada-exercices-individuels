const app = require("../scriptexo3.js");

describe("getLatinCharacterList", () => {
  it("convertir en tableau une chaine de caractère majuscule en 1 lettre par index", () => {
    expect(app.getLatinCharacterList("BONJOUR")).toEqual([
      "B",
      "O",
      "N",
      "J",
      "O",
      "U",
      "R",
    ]);
  });
});

describe("getLatinCharacterList", () => {
  it("convertir en tableau une chaine de caractère minuscule en 1 lettre par index", () => {
    expect(app.getLatinCharacterList("bon")).toEqual(["b", "o", "n"]);
  });
});

describe("getLatinCharacterList", () => {
  it("convertir en tableau une chaine de caractère mélangé avec des chiffres en 1 lettre par index", () => {
    expect(app.getLatinCharacterList("bo3")).toEqual(["b", "o", "3"]);
  });
});

describe("getLatinCharacterList", () => {
  it("convertir la fonction getLatinCharacterList avec une chaine vide", () => {
    expect(app.getLatinCharacterList("")).toEqual([]);
  });
});

describe("translateLatinCharacter", () => {
  it("convertit une lettre par les caractères morses", () => {
    expect(app.translateLatinCharacter("A")).toEqual(".-");
  });
});

describe("translateLatinCharacter", () => {
  it("convertit une chaine de caractère en morse", () => {
    expect(app.encode("AIMER")).toEqual([".-", "..", "--", ".", ".-."]);
  });
});
