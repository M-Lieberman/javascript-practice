function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => num < 1);

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => name.charAt(0) == char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // to something
  return words.filter(function (word) {
    return word.length > 3 && word.slice(0, 3) === 'to ';
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((n) => Number.isInteger(n));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((user) => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((num) => Math.round(Math.sqrt(num) * 100) / 100);
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((sentence) => sentence.toUpperCase().indexOf(str.toUpperCase()) !== -1);
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // using the spread operator to insert the array into Math function
  return triangles.map((triangle) => Math.max(...triangle));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
