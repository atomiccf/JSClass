const form = document.getElementById('siteForm');
const devField = document.getElementById('dev');
const titleField = document.getElementById('title');
const urlField = document.getElementById('url');
const dateField = document.getElementById('date');
const countField = document.getElementById('count');
const mailField = document.getElementById('mail');
const selectField = document.getElementById('list');
const areaField = document.getElementById('area');
const input = document.querySelector('input')
const checkBox = document.getElementById('check');




/*
1.валидация на пустое значение
2.валидация на количество символов
*/
function validateDev(){
    const devValue = devField.value.trim();

        if(devValue === '') {
        setError(devField, 'Введите название разработчика');
            devField.focus();
            return false
    } else if (devValue.length >30 ) {
            setError(devField, 'Максимальное количество символов 30');
            devField.focus();
            return false
                    } else {

            setSuccess(devField);

        }



}

function validateTitle () {
    const titleValue = titleField.value.trim();
    if(titleValue === '') {
        setError(titleField, 'Введите название сайта');
    } else if (titleValue.length >30 ) {
        setError(titleField, 'Максимальное количество символов 30');
        titleField.focus();
        return false
    }else {
        setSuccess(titleField);

    }


}


/*Валидация поля URL
1. Валидация на пустое значение
2. Валидация на соответствие формату url адреса
*/

function validURL () {
    const urlValue = urlField.value.trim();
    if(urlValue === '') {
        setError(urlField, 'Введите url');
        return false
    } else {
        setSuccess(urlField);
    }
    const reg = /(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))\S){2,}/gim
    if(reg.test(urlValue) === false) {
        setError(urlField, 'Введите корректный url адрес');
        return false
    } else {
        setSuccess(urlField);
    }
}


/*Валидация текста
1. Валидация на пустое значение
2. Валидация на количество символов
*/
function validArea () {
    const areaValue = areaField.value.trim();
    if(areaValue === '') {
        setError(areaField, 'Введите текст');

        return false
    } else if(areaValue.length > 500) {
        setError(areaField, 'Количество допустимых символов 500');
    } else {
        setSuccess(areaField);
   }

}
/*Валидация радио кнопок
1. Валидация на пустое чекбокса*/

function validCheck () {
    const checkBox = document.getElementById('check');

    if(checkBox.checked) {
        document.getElementById("error_divCheck").innerHTML = '';

           }
    else {
        document.getElementById("error_divCheck").innerHTML = 'Отзыв запрещен';
    }
}


/*Валидация радио кнопок
1. Валидация на пустое значение*/

function validRadio () {
    const checkRadio = document.siteForm.adv;
    let valid = false;
    for (let i = 0; i <checkRadio.length; i++) {
        if (checkRadio[i].checked){
            valid = true;
            break;
        }
    }
    if(valid) {
        document.getElementById("error_divRadio").innerHTML = '';
            }
    else {
        document.getElementById("error_divRadio").innerHTML = 'Выберите вариант размещения';
        return false

    }
}


/*Валидация списка
1. Валидация на пустое значение
*/
function validSelect () {
    const selectValue = selectField.value;
    if(selectValue === '') {
        setError(selectField, 'Выберите рубрику');
        return false;
    } else {
        setSuccess(selectField);
    }

}


/*Валидация даты
1. Валидация на пустое значение
*/

function validDate (){
    const dateValue = dateField.value;
    if(dateValue === '') {
        setError(dateField, 'Выберите дату');
        return false;
    } else {
        setSuccess(dateField);
    }


}
/*Валидация почты
1. Валидация на пустое значение
2. Валидация соответствия формату электронной почты
*/
function validMail () {
    const mailValue = mailField.value.trim();
    if(mailValue === '') {
        setError(mailField, 'Введите почту');
        return false;
    } else {
        setSuccess(mailField);
    }
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(mailValue) === false) {
        setError(mailField, 'Введите корректную почту');
        return false;
    } else {

        setSuccess(mailField);

    }

}
/*Валидация счетчика
1. Валидация на пустое значение
2. Валидация на отрицательное число
*/
function validCount () {
    const countValue = countField.value;

    if (countValue <= 0) {
        setError(countField, 'Число должно быть положительным');
        return false;
    } else {
        setSuccess(countField);
    }
}

/*вспомогательные функции*/


function setError (element,message) {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error_div');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');

}

function setSuccess (element) {
    const input= element.parentElement;
    const errorDisplay = input.querySelector('.error_div');

    errorDisplay.innerText = '';
    input.classList.remove('error');
    input.classList.add('success');


}




