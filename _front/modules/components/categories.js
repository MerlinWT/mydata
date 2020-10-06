import {appends, div, span} from "../dom.js";
import {groups} from "./groups.js";
import {get as getModel} from "../api.js";

function category(id, title) {
    const categoryEl = appends(
        div({className: "category"}),
        [
            span({innerText: title}),
        ]
    );

    getModel(
        'group',
        {
            pk: "category_id",
            pkv: id
        },
        response => categoryEl.append(
            groups(response.rows)
        )
    );

    return categoryEl
}

export function categories(data) {
    return appends(
        div({className: "categories"}),
        [
            ...data.map(
                ({id, title}) => category(id, title)
            )
        ]
    );
}
