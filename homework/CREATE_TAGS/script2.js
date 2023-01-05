const outup = document.querySelector('.out');
const field=document.getElementById('field');
field.addEventListener('click',addH)

function getTextValue(){
    return document.getElementById('text').value;
}
function addH (eo){
    const button=eo.target
    const atr = button.getAttribute('data-tag');
    const tag = document.createElement(atr);

    if (atr === "li"){
        let ul = document.querySelector('ul');
        ul.appendChild(tag);
        tag.innerHTML = getTextValue();


    } else {
        outup.append(tag);
        tag.innerHTML = getTextValue();
    }

}


