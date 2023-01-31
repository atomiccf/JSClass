

 function buildWraper(tag){
    const tagName = document.createElement(tag);
    return function (text) {
        tagName.textContent = text;
       return tagName.outerHTML
    }

}

let wrapH1 = buildWraper('h1')
 let wrapP = buildWraper('P')



 console.log(wrapH1(' СТИХИ'))
console.log(wrapP(' Однажды в студёную зимнюю пору'))
console.log(wrapP(' Вкусные  m&m\'s' ));
