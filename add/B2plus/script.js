document.querySelector("button").onclick = ()=>{
    runScript();
}

function runScript(){
    let str = prompt('Введите строку');
    return alert(`Перевернутая строка: ${reverseString(str)}`)
}

function reverseString(str) {
   return str.split('').reverse().join('');
}

