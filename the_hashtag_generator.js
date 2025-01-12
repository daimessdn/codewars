function generateHashtag(str) {
  let result = "#";

  console.log(str);

  const strs = str.split(" ");
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length != 0) {
      result +=
        strs[i].length < 1
          ? strs[i].toUpperCase()
          : strs[i].charAt(0).toUpperCase() + strs[i].slice(1).toLowerCase();
    }
  }

  if (result.length > 140 || result == "#") return false;

  return result;
}
