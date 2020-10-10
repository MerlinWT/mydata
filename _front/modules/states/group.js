import {appends, span} from "../dom.js";
import {get as form} from "../components/form.js";
import {table} from "../components/table.js";

const spending = [
    ['input', {type: 'text'}, {placeholder: 'магазин', name: 'shop'}],
    ['input', {type: 'number'}, {placeholder: 'сумма', name: 'sum'}],
];
// todo Get from server (models meta)
const fields = {
    spending_products: spending,
    spending_chemistry: spending,
    spending_appliances: spending,
    spending_communal: spending,
    spending_communication: spending,
    spending_clothes: spending,
    spending_bicycle: spending,

    sport_bicycle: [
        ['input', {type: 'number'}, {placeholder: 'время', name: 'duration'}],
        ['input', {type: 'number'}, {placeholder: 'дистанция', name: 'distance'}],
    ],
    sport_exercises: [
        ['input', {type: 'number'}, {placeholder: 'отжимания', name: 'push_ups'}],
        ['input', {type: 'number'}, {placeholder: 'приседания', name: 'squats'}],
        ['input', {type: 'number'}, {placeholder: 'пресс', name: 'abdominal'}],
        ['input', {type: 'number'}, {placeholder: 'подтягивания', name: 'pull_ups'}],
    ],
    sport_volleyball: [],
    sport_ping_pong: []
};

export function init(outletEl, data) {
    const model = data[0];

    appends(outletEl, [
        span({innerText: model, className: 'group-name'}),
        form(model, fields[model]),
        table(model)
    ]);

}
