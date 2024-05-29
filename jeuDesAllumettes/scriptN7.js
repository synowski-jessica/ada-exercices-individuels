//Faire une fonction qui prend en paramètre le nombre d'allumettes
// à enlever du reste.

//Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.

let resteAllumette = 50;
function enleverAllumette(nbAllumette) {
  resteAllumette = resteAllumette - nbAllumette;
  return resteAllumette;
}
console.log(resteAllumette);
//Demander a l'utilisateur combien d'allumettes
// il souhaite retirer tant qu’il  a des allumettes dans le tas.
// Pour rappel, on a 50 allumettes au départ.
//Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.
//Ajouter a votre jeu la notion de victoire.
function nbAllumetteARetirer() {
  while (resteAllumette > 0) {
    let nbAllumette = prompt("Combien souhaitez vous retirer d'allumettes?");

    if (nbAllumette > 6) {
      alert("vous pouvez retirer jusqu'à 6 allumettes maximum");
    } else if (nbAllumette > resteAllumette) {
      alert(
        "Il ne reste plus que  " +
          resteAllumette +
          " allumettes. Taper donc " +
          resteAllumette +
          " pour gagner la partie"
      );
    } else {
      enleverAllumette(nbAllumette);
      console.log(resteAllumette);
    }
  }
  alert("Vous avez gagné");
}
nbAllumetteARetirer();
//Rajouter un 2eme joueur à votre jeu.

//function jouerA2(player1, player2) {}

/*Possibilite faire un tableau avec les 2 joueurs
Voir question de boucles
Fonction nbJoueur (joueur1,joueur2){
Joueur 1=execute la fonction etape 3
Si le nombre d allumette est different de 0 alors il passe au joueur 2
Fonction etape 3
Si le nombre d allumette est different de 0 alors il passe au joueur 1
Fonction etape 3*/
