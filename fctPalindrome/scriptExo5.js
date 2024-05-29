function isValidate(date) {
  const array = date.split("/");
  const jour = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((array[2] % 4 === 0 && array[2] % 100 != 0) || array[2] % 400 === 0) {
    jour[1] = 29;
  }
  if (
    array.length != 3 ||
    array[1] > 12 ||
    array[0] > jour[array[1] - 1] ||
    array[2] < 999 ||
    array[2] > 9999 ||
    array[0] < 1 ||
    array[1] < 1
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(isValidate("29/02/2023"));

function isPalindrome(date) {
  const array2 = date.split("/").join("");
  const reverseDate = array2.split("").reverse().join("");
  return reverseDate == array2 ? true : false;
}
console.log(isPalindrome("11/02/2011"));

function getNextPalindromes(nombre) {
  const date = new Date();
  let nextDay = date.setDate(date.getDate() + 1);
  let nextDayToDate = new Date(nextDay);
  console.log(nextDayToDate);

  let nextDayToString = nextDayToDate.toLocaleDateString();
  const arr = [];

  while (arr.length < nombre) {
    if (isPalindrome(nextDayToString) == true) {
      arr.push(nextDayToString);
      day = new Date(nextDayToDate);
      nextDayToDate = day.setDate(day.getDate() + 1);
      nextDayToDate = new Date(nextDayToDate);
      nextDayToString = nextDayToDate.toLocaleDateString();
    } else {
      day = new Date(nextDayToDate);
      nextDayToDate = day.setDate(day.getDate() + 1);
      nextDayToDate = new Date(nextDayToDate);
      nextDayToString = nextDayToDate.toLocaleDateString();
    }
  }
  return arr;
}
console.log(getNextPalindromes(4));
