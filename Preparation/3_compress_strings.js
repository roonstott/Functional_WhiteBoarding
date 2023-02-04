// Input: "aaabccdddda"

// Output: "3ab2c4da"

let input = "aaabccdddda";
// console.log(compress2(input));
console.log(compress3(input, "", 1, 0));

function compress2 (string) {
  let output = "";
  let num = 1; 
  for (i=0; i<string.length; i++) {
    if (i === string.length - 1) {
      num === 1 ? output += string[i] : output += num + string[i];
    } else if (string[i] === string[i+1]) {
      num +=1;
    } else {
      num === 1 ? output += string[i] : output += num + string[i];
      num = 1;
    }
  }
  return output;
}

function compress3 (string, output, streak, index) {
  if (index === string.length -1) {
    streak === 1 ? output += string[index] : output += streak + string[index];
    return output;
  } else if (string[index] === string[index + 1]) {
    return compress3(string, output, streak + 1, index +1)
  } else {
    streak === 1 ? output += string[index] : output += streak + string[index];
    return compress3(string, output, 1, index +1);
  }
}