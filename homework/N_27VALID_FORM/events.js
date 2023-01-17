
form.addEventListener('submit', e => {

    try {

        if (validateDev() === false) {
            e.preventDefault();
            return;

        }
        if (validateTitle() === false) {
            e.preventDefault();
            return;

        }
        if (validURL() === false) {
            urlField.focus();
            e.preventDefault();
            return;

        }
        if (validCheck() === false) {
            checkBox.focus();
            e.preventDefault();

            return;
        }
        if (validRadio() === false) {
            checkBox.focus();
            console.log('radio')
            e.preventDefault();

            return;
        }

        if (validArea() === false) {
            areaField.focus();
            e.preventDefault();

            return;
        }

        if (validSelect() === false) {
            selectField.focus();
            e.preventDefault();
            return;
        }

        if (validMail() === false) {
            mailField.focus();
            e.preventDefault();
            return;
        }
        if (validDate() === false) {
            dateField.focus();
            e.preventDefault();
            return;
        }

        if (validCount() === false) {
            countField.focus();
            e.preventDefault();
        }


        // валидация успешная - форма будет отправлена на сервер
    } catch (ex) {
        alert('Извините, что-то пошло не так, неожиданный сбой! Пересмотрите заполнение формы, возможно, это всё из-за вас!');
        e.preventDefault(); // что-то пошло не так - считаем что валидация не прошла
    }


} )

devField.addEventListener('input', ()=> {
   validateDev()

} )

titleField.addEventListener('input',() => {
    validateTitle()

} )


urlField.addEventListener('input', () => {
    validURL ()

} )
dateField.addEventListener('input', () => {
    validDate()
} )

countField.addEventListener('input', () => {
    validCount()
} )

mailField.addEventListener('input', () => {
    validMail()
} )

selectField.addEventListener('input', () => {
    validSelect()
} )

areaField.addEventListener('input', () => {
    validArea()
} )

checkBox.addEventListener('click', () => {
    validCheck ()
} )
checkBox.addEventListener('click', () => {
    validRadio()
} )
