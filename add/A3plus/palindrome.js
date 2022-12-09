
function checkPalindrome (str) {
    let str2 = '';
    let clean=str
        .toLowerCase()
        .replace(/[,.\s]/gm,'')
        .replace(/ё/g,'е')
        .replace(/ъ/g,'ь');
        for (let i = clean.length-1; i>=0; i--){
        str2+=clean[i];

    }
       return clean === str2;
}


