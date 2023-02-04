const input = [7, 7, 7, 7, 9, 9, 9, 9, "hi", 12, "hi", 7, 53];
console.log(DeDup(input, []));
// console.log(DeDup2(input));
// console.log(DeDup3(input, []));

function DeDup (input, output) {
  if (input.length === 0) {
    return output;
  }
  if (!output.includes(input[0])) {
    output.push(input[0]);
  }
  input.shift();
  return DeDup(input, output);
}

function DeDup2(input) {
  let output = [];
  input.forEach(el => {
    if (!output.includes(el)) {
      output.push(el); 
    }
  });
  return output; 
};

function DeDup3(input, output) {  
  if (input.length === 0) {
    return output; 
  } else {
    output.push(input[0]);
    input = input.filter(el => el !== input[0]);
    return DeDup3(input, output);
  }
}

