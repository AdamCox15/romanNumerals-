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