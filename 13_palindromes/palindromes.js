const palindromes = function (string) {
  // Je supprime tout ce qui n'est pas une lettre et la passe en minuscule
  clearedString = string.replace(/\W/gi, "").toLowerCase();
  // Je sépare - reverse - et join à nouveau
  reversedClearedString = clearedString.split("").reverse().join("");
  // Je compare les deux strings

  return clearedString === reversedClearedString;
};

// Do not edit below this line
module.exports = palindromes;
