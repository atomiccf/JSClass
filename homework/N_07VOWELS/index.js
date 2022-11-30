
function runCountVowels(){
    let message = prompt('Введите строку');
    countVowels(message);
    alert(`Количество гласных ${countVowels(message)}`)


}

function runCountVowelsEach(){
    let message = prompt('Введите строку');
    countVowelsSecond(message);
    alert(`Количество гласных ${countVowelsSecond(message)}`)


}
