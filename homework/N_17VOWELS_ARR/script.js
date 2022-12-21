
const btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    runCountVowels();
})


function runCountVowels(){
    let message = prompt('Введите слово');
    countVowelsReduce(message);
    countVowelsFilter(message);
    countVowelsForEach(message);
    alert(`
    метод Reduce количество гласных ${countVowelsReduce(message)};
    метод Filter количество гласных ${countVowelsFilter(message)};
    метод ForEach количество гласных${countVowelsForEach(message)};`)
    }

function countVowelsReduce(message) {
    const vowels = ['а','у', 'о','ы','э','я','ю','ё','и','е'];
    let count = 0;
    let messageArr = message.split('');
    messageArr.reduce((prev,currentValue)=> {
        if(messageArr[prev] === vowels[currentValue])  ++count;
         },);

   return count
}

function countVowelsForEach(message) {
    const vowels = ['а','у', 'о','ы','э','я','ю','ё','и','е'];
    let count = 0;
    let messageArr = message.split('');
    messageArr.forEach((item) => {

        if (vowels.indexOf(item) !== -1) ++count


    })
    return count

}

function countVowelsFilter(message) {
    const vowels = ['а','у','о','ы','э','я','ю','ё','и','е'];
    let count = 0;
    let messageArr = message.split('');
    let result = messageArr.filter((item,) =>{
        if (vowels.indexOf(item) !== -1) {
            ++count;
            return true;
        }
    })

    return count;
}

