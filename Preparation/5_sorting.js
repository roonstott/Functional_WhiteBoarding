let input = [9, 2, 7, 12, 1, 100, 38, 23, 14, 900, 33, 33, 45, 33, 0, 111, 55];
// Output: [0, 1, 2, 7, 9, 12, 14, 23,  33,  33, 33, 38, 45, 55, 100, 111, 900]; 

console.log(sort(input)); 

function sort (array) {
  let output = [array[0]]
  for (i=1; i<array.length; i++) {
    if (array[i] <= output[0]) {
      output.unshift(array[i]);
    } else if (array[i]>= output[output.length-1]) {
      output.push(array[i]);
    } else {    
      for (index=0; index<output.length; index++) {
        if (array[i]>= output[index] && array[i]<=output[index+1]) {
          let secondHalf = output.slice(index+1)
          output = output.slice(0, index+1);
          output.push(array[i]); 
          output.push(...secondHalf); 
          break; 
        }
      }
    }
  }
  return output; 
}


