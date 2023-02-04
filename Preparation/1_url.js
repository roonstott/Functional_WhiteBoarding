let input = "Jasmine Anne Jones";
  
function makeUrl (string, output) {
  if (string === "") {
    return output;
  }
  else if (string[0] === " ") {
    output += "%20"
  } else {
    output += string[0];      
  }
  return makeUrl(string.substring(1), output)
}



function makeUrl2 (string) {
 let output = "";
 for (i=0; i<string.length; i++) {
  string[i] === " " ? output += "%20" : output += string[i];
 }
 return output; 
}


console.log(makeUrl(input, ""));

