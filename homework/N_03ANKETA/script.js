let name = getName();

let lastName = getLastName();

let patronymic = getPatronymic();

let age= getAge();

let gender = getGender();

let currentGender = setGender();

let retire = checkRetire();

function getName() {

    let name = prompt("Введите имя");
    return  (name === "" || name === " " || isNaN(name)===false)  ?  getName(): name ;



}

function getLastName(){
    let lastName = prompt("Введите фамилию");
    return(lastName === "" || lastName === " " || isNaN(lastName) === false) ? getLastName(): lastName;

}

function getPatronymic(){
   let patronymic = prompt("Введите отчество");
    return (patronymic === "" || patronymic === " " || isNaN(patronymic) === false) ? getPatronymic() : patronymic;
   }

function getAge(){
    let age = parseInt(prompt("Введите возраст"));
    return (isNaN(age) === false || age <=120 || age >=0) ? age : getAge();
}

function getGender(){
     let getGender =  confirm("Вы мужчина?");
    return getGender


}

function setGender(){

    let currentGender;
    if (gender) {
         return currentGender = "мужской";

    } else {
        return currentGender = "женский";

    }



}

function checkRetire(){
    let retire;
    if (gender && age >= 65 || gender === false && age >= 58) {
        return retire = "да";

    } else {
        return retire = "нет";
    }




}


alert(` Ваше ФИО: ${lastName}  ${name}  ${patronymic}  
  Ваш возраст в годах:  ${age}  
  Ваш возраст в днях:  ${age * 365}  
  через 5 лет вам будет:  ${age + 5}  
  Ваш пол: ${currentGender}   
  Вы на пенсии:  ${retire}`);