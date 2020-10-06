import {appends, span} from "../dom.js";
import {get as form} from "../components/form.js";
import {table} from "../components/table.js";

const spending = [
    ['input', {}, {placeholder: 'магазин', name: 'shop'}],
    ['input', {}, {placeholder: 'сумма', name: 'sum'}],
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
        ['input', {}, {placeholder: 'время', name: 'duration'}],
        ['input', {}, {placeholder: 'дистанция', name: 'distance'}],
    ],
    sport_exercises: [
        ['input', {}, {placeholder: 'отжимания', name: 'push_ups'}],
        ['input', {}, {placeholder: 'приседания', name: 'squats'}],
        ['input', {}, {placeholder: 'пресс', name: 'abdominal'}],
        ['input', {}, {placeholder: 'подтягивания', name: 'pull_ups'}],
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
