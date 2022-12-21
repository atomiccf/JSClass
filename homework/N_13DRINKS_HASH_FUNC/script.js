const drinkStorage = new HashStorageFunc();
const addValue = document.querySelector('#addValue');
const getInfo = document.querySelector('#getInfo');
const deleteInfo = document.querySelector('#deleteInfo');
const showList = document.querySelector('#showList');

addValue.addEventListener('click',() =>{
    runAddDrinks();
});
getInfo.addEventListener('click',() =>{
    showDrinkInfo ();
});
deleteInfo.addEventListener('click',() =>{
    deleteDrinkInfo();
});
showList.addEventListener('click',() =>{
    showDrinksList();
});

/*add information about drinks */
function runAddDrinks(){

    const getDrinkName = prompt('Введите название напитка');
    const getDrinkProperty = prompt('Напиток алкогольный (да/нет)');
    drinkStorage.addValue(getDrinkName,getDrinkProperty);


}

/*show drink information*/
function showDrinkInfo () {
    const drinkInfo = drinkStorage.getKeys();
    const getDrinkName = prompt('Введите название напитка');
    if (drinkInfo[0] !== getDrinkName || drinkInfo[0] === undefined) {

        return  alert ('Напиток не найден')
    } else {
        alert(`
    Напиток ${drinkInfo[0]}  
    алкогольный: ${drinkStorage.getValue(getDrinkName)}
    рецепт приготовления:${drinkStorage.getValue('рецепт')}`);}
    }
/*delete  information*/
function deleteDrinkInfo(){
    const getName = prompt('Введите название');
    if (drinkStorage.deleteValue(getName)) {
        alert('информация удалена');
    }
    else {
        alert('нет информации');
    }
}

/*show drinks list*/
function showDrinksList(){
    const drinkInfo = drinkStorage.getKeys();
    return alert(`Список напитков:
    ${drinkInfo}`);

}

