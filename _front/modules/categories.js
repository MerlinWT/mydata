import {div, span} from "./dom.js";
import {groups} from "./groups.js";
import {get as getModel} from "./api.js";

function category(id, title) {
    const categoryEl = div({className: "category"});

    categoryEl.append(
        span({innerText: title})
    );

    getModel(
        'group',
        {
            pk: "category_id",
            pkv: id
        },
        response => categoryEl.append(
            groups(response)
        )
    );

    return categoryEl
}

export function categories(data) {
    const categoriesEl = div({className: "categories"});

    data.forEach(_category => categoriesEl.append(category(_category.id, _category.title)));

    return categoriesEl
}
