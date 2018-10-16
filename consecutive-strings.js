function longestConsec(strarr, k) {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) {
    return "";
  }
  var longest = "";
  for (var i = 0; i < strarr.length; i++) {
    var currentStr = strarr.slice(i, i + k).join("");
    if (currentStr.length > longest.length) {
      longest = currentStr;
    }
  }
  return longest;
}
