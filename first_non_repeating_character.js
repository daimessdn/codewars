function firstNonRepeatingLetter(s) {
  const lettersCount = [];

  for (let i = 0; i < s.length; i++) {
    const letterFound = lettersCount.find(
      (lf) => lf[0].toLowerCase() == s[i].toLowerCase()
    );

    if (!letterFound) {
      lettersCount.push([s[i], [i]]);
    } else {
      letterFound[1].push(i);
    }
  }

  const singleLettersCount = lettersCount.filter((sl) => sl[1].length == 1);

  return singleLettersCount.length == 0
    ? ""
    : s.charAt(singleLettersCount[0][1][0]);
}
