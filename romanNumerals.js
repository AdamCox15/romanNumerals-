// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

// Decimal

// Roman

// 1

// I

// 5

// V

// 10

// X

// 50

// L

// 100

// C

// 500

// D

// 1,000

// M

// For example:

// toRoman(5)
// 'V'

// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

// For example:

// toRoman(99)
// 'LXXXXVIIII'

const integer_to_roman =(num) =>{
	const obj = {0:['M',1000], 1:['D', 500], 2:['C', 100], 3:['L', 50], 4:['X', 10], 5:['V', 5], 6:['I', 1]};
	let arr = [];
	for (let i in obj){
		let count = 0;
		if (num >= obj[i][1]){
			count = Math.floor(num / obj[i][1]);
			num -= count*obj[i][1];
			if (count===4 && (obj[i][0]==='C'||obj[i][0]==='X'||obj[i][0]==='I')){
				if(arr[arr.length-1]===obj[i-1][0]){
					arr.pop();
					arr.push(obj[i][0], obj[i-2][0]);
					continue;	
				}
				arr.push(obj[i][0], obj[i-1][0]);
				continue;
			}
			for (let j=1; j<=count; j++){
				arr.push(obj[i][0])
			}
		} 
	}
	return arr.join('');
}

console.log(integer_to_roman(4));

//-----------------------------------------------------------------------------
const romanConverts = (num) => {
    let num2 = num
    let push = Math.floor(num / 1000)
    let numStr = ""
    for (i = 0; i < push; ++i) {
      numStr = numStr + 'M'
    }
    num = num % 1000
  
    let push2 = Math.floor(num / 500)
    for (i = 0; i < push2; ++i) {
      numStr = numStr + 'D'
    }
    num = num % 500
  
    num
    let push3 = Math.floor(num / 100)
    for (i = 0; i < push3; ++i) {
      numStr = numStr + 'C'
    }
    num = num % 100
  
    let push4 = Math.floor(num / 50)
    for (i = 0; i < push4; ++i) {
      numStr = numStr + 'L'
    }
    num = num % 50
  
    let push5 = Math.floor(num / 10)
    for (i = 0; i < push5; ++i) {
      numStr = numStr + 'X'
    }
    num = num % 10
  
    let push6 = Math.floor(num / 5)
    for (i = 0; i < push6; ++i) {
      numStr = numStr + 'V'
    }
    num = num % 5
  
    let push7 = Math.floor(num / 1)
    for (i = 0; i < push7; ++i) {
      numStr = numStr + 'I'
    }
    num = num % 1
  
    return numStr
  }
  
  console.log(romanConverts(600))

  //----------------------------------------
  const toRoman = (num) => {
    // set an empty variable string that holds roman numeral
    let roman = ""
    
    //create a list with key of the roman numerals and their number counterparts
    let romanList = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    
      //loop through each key in the roman numeral list
      for(let key in romanList){
    
      //divide the number by the number at the roman list key
      //then use Math.floor to remove extra digits and continue looping until out of digits
      let numeral = Math.floor(num / romanList[key]);
    
        //check if numeral is greater than 0
        if(numeral >= 0) {
    
          // loop and push the numeral key(symbol) into "roman" variable
          for(let i=0; i < numeral; i++){
            roman += key
          }
        }
        // breaking down the number to get the remainder to keep breaking that down
        num = num % romanList[key]
        console.log(num)
    
      }
        //return variable string with symbols
      return roman;
    }
    
    console.log(toRoman(2564))