

function deleteSpace() {
    let str= prompt("Введите строку", "");
   /* убираем пробелы с начала строки*/
     while (str.startsWith(" ")){
     str=str.substring(1);

    }
    /* убираем пробелы в конце строки*/
    while (str.endsWith(" ")){
        str=str.substring(0,str.length -1);

    }
    alert(`"*"${str}"*"`);
}

