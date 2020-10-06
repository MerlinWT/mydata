import {el, form, input, button} from './dom.js'

export function get(model, fields) {
    const formEl = form({}, {action: '/api/create.py'});

    formEl.append(
        input({}, {name: 'model', hidden: 'true', value: model})
    );
    formEl.append(
        input({}, {placeholder: 'дата', name: 'date'})
    );

    fields.forEach(
        field => formEl.append(el(...field))
    );

    formEl.append(
        button({innerText: 'Отправить'})
    );

    return formEl
}
