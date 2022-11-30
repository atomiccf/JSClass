
function countVowels(message) {
	const vowels = ['а','у', 'о','ы','э','я','ю','ё','и','е'];
	let messageArr = message.split('');
	let count = 0;
	for (let i = 0; i < messageArr.length; i++) {
	 	for(let j = 0; j < vowels.length; j++){
		if (messageArr[i].includes(vowels[j])) {
	 	++count;
	 }
	 }
	 }

	 return `${count}`
	 

}


function countVowelsSecond(message) {
	 const vowels = ['а','у', 'о','ы','э','я','ю','ё','и','е'];
	 let messageArr = message.split('');
	 let count = 0;
	 messageArr.forEach( item  => {
		 vowels.forEach( letter => {
			 if (item === letter) ++count;
		 })
	 })

	 return `${count}`


 }

function highAndLow(numbers){
	let numbersArr =numbers.split(' ');
	let minResult = null;
	let maxResult = null;
	minResult = Math.min(...numbersArr);
	maxResult = Math.max(...numbersArr);

	return  `${maxResult} ${minResult} `
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");