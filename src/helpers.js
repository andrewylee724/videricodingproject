const Helpers = {};

Helpers.getFileName = (str) => {
  let fileNames = str.split('/');
  return fileNames[fileNames.length - 1];
}

Helpers.getCreatedAt = (str) => {
  let splits = str.split('/');
  return splits[5] + '/' + splits[6] + '/' + splits[4];
}

export default Helpers;