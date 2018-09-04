const Helpers = {};

Helpers.hasUpperCase = (str) => {
  let test = str.toLowerCase()
  return str === test ? false : true;
}

Helpers.hasLowerCase = (str) => {
  let test = str.toUpperCase()
  return str === test ? false : true;
}

Helpers.hasSpecialCharacters = (str) => {
  let specialChars = "*|,\":<>[]{}`\';()@&$#%";
  let hasSpecialChar = false;

  for (let i = 0; i < str.length; i++) {
    if (specialChars.indexOf(str.charAt(i)) != -1) {
      hasSpecialChar = true;
      break;
    }
  }

  return hasSpecialChar;
}

Helpers.getFileName = (str) => {
  let fileNames = str.split('/');
  return fileNames[fileNames.length - 1];
}

Helpers.getCreatedAt = (str) => {
  let splits = str.split('/');
  return splits[5] + '/' + splits[6] + '/' + splits[4];
}

export default Helpers;