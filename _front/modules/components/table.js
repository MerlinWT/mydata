import {appends, div, span} from "../dom.js";
import {get as getModel} from "../api.js"

const order = [
    "id",
    "date",

    "shop",
    "sum",

    "duration",
    "distance",

    "push_ups",
    "squats",
    "abdominal",
    "pull_ups",
];

function row(data) {
    return appends(
        div(),
        order
            .filter(key => data[key])
            .map(
                key => {
                    if (data[key]) {
                        return span({
                                innerText: key === 'date'
                                    ? new Date(data[key] * 1000).toISOString().split('T')[0]
                                    : data[key],
                                className: key
                            }
                        )
                    }
                }
            )
    );
}

export function table(model) {
    const tableEl = div({className: "table"});

    getModel(model, {}, ({rows}) => {
        rows.forEach(
            rowData => tableEl.append(
                row(rowData)
            )
        );
    });

    return tableEl
}
