function pigIt(str) {
  const strs = str.split(" ");

  const regex = /[!@#$% ^&*()\-+={}[\]:;"'<>,.?\/ |\\]/;

  for (let i = 0; i < strs.length; i++) {
    if (!regex.test(strs[i])) {
      strs[i] = strs[i].slice(1) + strs[i].charAt(0) + "ay";
    }
  }

  result = strs.join(" ");
  return result;
}
