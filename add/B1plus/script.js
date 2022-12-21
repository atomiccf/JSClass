function getCentury(){
    let getYear = +prompt("Введите год");
    let centuryResult = Math.floor(getYear/100+1);

    return alert(`Это ${centuryResult} -й век`)

}

getCentury();