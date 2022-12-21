const drinkStorage = new HashStorage;

const classAddValue = document.querySelector('#addValue');
const classGetInfo = document.querySelector('#getInfo');
const classDeleteInfo = document.querySelector('#deleteInfo');
const classShowList = document.querySelector('#showList');

classAddValue.addEventListener('click',() =>{
    classRunAddDrinks();
});
classGetInfo.addEventListener('click',() =>{
    classShowDrinkInfo ();
});
classDeleteInfo.addEventListener('click',() =>{
    classDeleteDrinkInfo();
});
classShowList.addEventListener('click',() =>{
    classShowDrinksList();
});
/*add information about drinks */
function classRunAddDrinks(){
    const getDrinkName = prompt('Введите название напитка');
    const getDrinkProperty = prompt('Напиток алкогольный (да/нет)');
    drinkStorage.addValue(getDrinkName,getDrinkProperty);
}
/*show drink information*/
function classShowDrinkInfo () {
    const drinkInfo = drinkStorage.getKeys();
    const getDrinkName = prompt('Введите название напитка');
    if (drinkInfo[0] !== getDrinkName || drinkInfo[0] === undefined) {

        return  alert ('Напиток не найден')
    } else {
        alert(`
    Напиток ${drinkInfo[0]}  
    алкогольный: ${drinkStorage.getValue(getDrinkName)}`);}
}
/*delete  information*/
function classDeleteDrinkInfo(){
    const getName = prompt('Введите название');
    if (drinkStorage.deleteValue(getName)) {
        alert('информация удалена');
    }
    else {
        alert('нет информации');
    }
}
/*show drinks list*/
function classShowDrinksList(){
    const drinkInfo = drinkStorage.getKeys();
    return alert(`Список напитков:
    ${drinkInfo}`);

}