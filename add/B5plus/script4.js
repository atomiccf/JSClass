function buildWraper(tag){
    const tagName = document.createElement(tag);
    return function (text,atr ={}) {
        tagName.textContent = text;
        for ( let key in atr) {
            tagName.setAttribute(key,atr[key])
        }
        return tagName.outerHTML
    }

}

let wrapH1 = buildWraper('h1')
let wrapP = buildWraper('p')


console.log(wrapP("Однажды в студёную зимнюю пору"));
console.log(wrapP("Однажды в студёную зимнюю пору", {lang: "ru"}));
console.log(wrapP("Однажды в <студёную> зимнюю пору"));
console.log(wrapH1("СТИХИ", {align: "center", title: "M&M's"}));

