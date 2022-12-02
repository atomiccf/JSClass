
function countVowels(message) {
	const vowels = ['а','у', 'о','ы','э','я','ю','ё','и','е'];
	let messageArr = message
		.toLowerCase()
		.split('');
		let count = 0;
	for (let letter of messageArr){
		if (vowels.includes(letter)){
			++count;


		}

	}




	 return `${count}`
	 

}



