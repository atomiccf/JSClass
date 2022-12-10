

function runPalindrome(){
    let str =prompt('Введите строку');
    checkPalindromeRecursion (str);
    (checkPalindromeRecursion (str)) ? alert('Это палиндром !') : alert('Это не палиндром !')


}


function checkPalindromeRecursion (str) {

    let clean=str.toLowerCase()
        .replace(/[,.\s]/gm,'')
        .replace(/ё/g,'е')
        .replace(/ъ/g,'ь');
        let length = clean.length;
        if (length === 0 || length === 1) {

            return true;

        } else  if (clean[0] === clean[length - 1]) {

           return checkPalindromeRecursion (clean.slice(1,length-1));


        } else {


            return false;


        }




}





