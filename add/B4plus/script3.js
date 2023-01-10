
const outup = document.querySelector('body')




let t = tag => text => `<${tag}> ${text} <${tag}/>`



let wrapH1 = function buildWraper(text){
    let h1 = document.createElement('h1');
    return function () {

        outup.appendChild(h1);
        h1.textContent = text;
        return document.querySelector('h1') ;

    }






}
let wrapP = function buildWraper(text){

let p = document.createElement('p');
outup.appendChild(p);
p.textContent = text;
const tag = document.querySelector('p');
return tag.outerHTML ;
}




outup.innerHTML = wrapH1(' Вкусные  m&m\'s')
console.log(wrapP(' Вкусные  m&m\'s' ));
