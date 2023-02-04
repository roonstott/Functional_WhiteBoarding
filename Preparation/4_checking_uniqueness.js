let inputTrue = "copyright";
let inputFalse = "hello"
console.log("should be true : ", IsUnique(inputTrue));
console.log("should be false : ", IsUnique(inputFalse));

function IsUnique (string) {
  let unique = true;
  for (i=0; i<string.length; i++) {
    for (index = i+1; index<string.length; index ++) {
      if (string[i] === string[index]) {
        unique = false;
      }
    }
  }
  return unique;
}