function translateRomanNumeral (romanNumeral) {
  let result = 0;
  let n = romanNumeral.split("");
  let look = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };
  for (let k in look){
    if(romanNumeral === k){
      return look[k]; 
    } 
    for (let i = 0; i < n.length; i++){
      if(!look[n[i]]){
        return "null";
      }
      else if(look[n[i+1]] > look[n[i]]){
        result -= look[n[i]];
      } else {
        result += look[n[i]];
      }
    }
    return result;
  }  
}