
const outup = document.querySelector('body')

let wrapH1 = function buildWraper(text){

let h1 = document.createElement('h1');
outup.appendChild(h1);
h1.textContent = text;
const tag = document.querySelector('h1');
return tag.outerHTML = '<h1>' + h1.textContent + '</h1>';
}
let wrapP = function buildWraper(text){

let p = document.createElement('p');
outup.appendChild(p);
p.textContent = text;
const tag = document.querySelector('p');
return tag.outerHTML ;
}



console.log(wrapH1('СТИХИ'));

console.log(wrapP('< Вкусные > m&m\'s' ));
