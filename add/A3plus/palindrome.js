
function checkPalindrome (str) {
    let str2 = '';
    let clean=str.toLowerCase()
        .replaceAll('ё','е')
        .replaceAll('ъ','ь')
        .replaceAll(' ','')
        .replaceAll(/\W+/g,'')
    for (let i = clean.length-1; i>=0; i--){
        str2+=clean[i];

    }
       return clean === str2;
}


