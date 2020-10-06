import {appends, div, span} from "../dom.js";
import {get as getModel} from "../api.js"

function row(data) {
    return appends(
        div(),
        Object.keys(data).map(
            key => span({
                    innerText: key === 'date'
                        ? new Date(data[key] * 1000).toISOString().split('.')[0]
                        : data[key]
                }
            )
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
