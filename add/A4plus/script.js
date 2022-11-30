let str =prompt('Введите строку')
function checkPalindromeRecursion () {

    let clean=str.toLowerCase()
        .replaceAll('ё','е')
        .replaceAll('ъ','ь')
        .replaceAll(' ','')
        .replaceAll(/\W+/g,'')

        if (clean.length === 0 || clean.length === 1) {

            return alert('Это  палиндром!');

        }else if (clean[0] === clean[length - 1]) {

            return checkPalindromeRecursion (clean.slice(1,length-1));


        } else {
            return alert('Это не палиндром!');


        }




}




checkPalindromeRecursion ();
