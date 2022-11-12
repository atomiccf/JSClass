let x = null;

let y = null;

let sign;

function getNumber (num) {

    if (x === null){
        x = num;

    }else{

        y=num;

    }




}

function getSing (str) {

sign = str;


}


function getResult(){
switch(sign){
case '+':
    document.getElementById("calc_output").innerHTML = x+y;
    break;

case '-':
    document.getElementById("calc_output").innerHTML = x-y;
    break;


    case '*':
        document.getElementById("calc_output").innerHTML = x*y

        break;

        case '/':
            document.getElementById("calc_output").innerHTML = x/y
        break;


}



}