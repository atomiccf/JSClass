const formDef1= [
    {label:'Название сайта:',kind:'longtext',name:'sitename'},
    {label:'URL сайта:',kind:'longtext',name:'siteurl'},
    {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
    {label:'E-mail для связи:',kind:'shorttext',name:'email'},
    {label:'Рубрика каталога:',kind:'combo',name:'division',
        variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
    {label:'Размещение:',kind:'radio',name:'payment',
        variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
    {label:'Разрешить отзывы:',kind:'check',name:'votes'},
    {label:'Описание сайта:',kind:'memo',name:'description'},
    {caption:'Опубликовать',kind:'submit'},
];

const formDef2=[
    {label:'Фамилия:',kind:'longtext',name:'lastname'},
    {label:'Имя:',kind:'longtext',name:'firstname'},
    {label:'Отчество:',kind:'longtext',name:'secondname'},
    {label:'Возраст:',kind:'number',name:'age'},
    {caption:'Зарегистрироваться',kind:'submit'},
];
const body = document.querySelector('body');
function add (def) {
    const form = document.createElement('form');
    form.action = "https://fe.it-academy.by/TestForm.php";
    form.method = "post";
    body.prepend(form);
    def.forEach ( elem => {
        const label = document.createElement('label');
        label.textContent = elem.label;
        const input = document.createElement('input');

        if (elem.kind === "longtext" || elem.kind === "shorttext") {
            form.appendChild(label);
            input.type = "text";
            input.name = elem.name;
            label.appendChild(input);
        }
        if (elem.kind === "number") {
            form.appendChild(label);
            input.type = elem.kind;
            input.name = elem.name;
            label.appendChild(input);
        }
        if (elem.kind === "combo") {
            form.appendChild(label);
            const select = document.createElement('select');
            select.name = elem.name;
            label.appendChild(select);
            elem.variants.forEach(el => {
                let option = document.createElement('option');
                option.value =el.value;
                option.textContent = el.text;
                select.appendChild(option);
            })
        }
        if (elem.kind === "radio") {
            form.appendChild(label);
            elem.variants.forEach(elR => {
                const radio = document.createElement('input');
                const span = document.createElement('span');
                radio.type='radio';
                span.textContent = elR.text;
                radio.value = elR.value;
                span.appendChild(radio);
                label.appendChild(span);
            })
        }
        if (elem.kind === "check") {
            form.appendChild(label);
            const check = document.createElement('input');
            check.type='checkbox';
            check.name=elem.name;
            label.appendChild(check);
        }
        if (elem.kind === "memo") {
            form.appendChild(label);
            const area = document.createElement('textarea');
            area.name=elem.name;
            label.appendChild(area);
        }
        if (elem.kind === "submit") {
            input.value = elem.caption;
            input.type=elem.kind;
            form.appendChild(input);
        }
    });
}


add (formDef2);
add (formDef1);
