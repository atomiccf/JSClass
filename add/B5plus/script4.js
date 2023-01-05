const atr = {
    atribOne:null,
    atribTwo:null
};
function clearText (text) {
text = text.replace('<','&#60;')
           .replace('>','&#62;')
           .replace('\'','&apos;')
           .replace('\"','&#34;')
           .replace('&','&amp;');
return text

}


const outup = document.querySelector('body')
let wrapH1 = function buildWraper(text,atr){
    let attribute = Object.entries(atr);
let h1 = document.createElement('h1');
outup.appendChild(h1);
h1.textContent = text;
const tag = document.querySelector('h1');
  tag.setAttribute(attribute[0][0], attribute[0][1])
    console.log(tag)
}


let wrapP = function buildWraper(text,atr){
let attribute = Object.entries(atr);
let p = document.createElement('p');
outup.appendChild(p);
p.textContent = clearText (text);
let tag = document.querySelector('p');
tag.setAttribute(attribute[0][0], attribute[0][1])
    tag.setAttribute(attribute[1][0], attribute[1][1])
 console.log(tag)

}


console.log(wrapP('Вкусные m&m\'s',{lang:"ru" ,title:"Вкусные m&m\\'s'" }))

