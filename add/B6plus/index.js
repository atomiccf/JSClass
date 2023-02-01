function formatNumber (number,format) {
    let stringArr = format.split ('').reverse()
    let counter = 0;

    for (let i = 0; i < stringArr.length; i++ ){
        if (stringArr[i] !== '#') {
            break
        } else {
            counter = ++counter

        }
    }
    let temp = number.toFixed(counter)
    temp = temp.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');

    return temp

}



console.log(formatNumber (2.3,'### ###.##'))
console.log(formatNumber (12345.368,'### ###.##'))