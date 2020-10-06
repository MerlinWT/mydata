import {div, span} from "../dom.js";
import {get as getModel} from "../api.js";
import {get as form} from "../form.js";

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

    outletEl.append(
        span({innerText: model, className: 'group-name'})
    );

    outletEl.append(
        form(model, fields[model])
    );

    const itemsEl = div({className: "items"});
    getModel(model, {}, response => {
        response.forEach(item => {
            const itemEl = div();

            Object.keys(item).forEach(key => {
                itemEl.append(
                    span({
                            innerText: key === 'date'
                                ? new Date(item[key] * 1000).toISOString().split('.')[0]
                                : item[key]
                        }
                    )
                );
            });

            itemsEl.append(itemEl)
        });
    });

    outletEl.append(itemsEl)
}
