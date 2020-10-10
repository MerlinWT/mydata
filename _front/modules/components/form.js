import {appends, button, el, form, input} from '../dom.js'

export function get(model, fields) {
    return appends(
        form({}, {action: '/api/create'}),
        [
            input({type: 'text'}, {name: 'model', hidden: 'true', value: model}),
            input({type: 'date'}, {placeholder: 'дата', name: 'date'}),
            ...fields.map(field => el(...field)),

            button({innerText: 'Отправить'})
        ]
    );
}
