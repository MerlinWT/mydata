import {div, span} from "./dom.js";
import {groups} from "./groups.js";

function category(id, title) {
    const categoryEl = div({className: "category"});

    categoryEl.append(
        span({innerText: title})
    );

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `api/get.py?model=group&pk=category_id&pkv=${id}`);
    xhr.send();

    xhr.onload = () => categoryEl.append(
        groups(JSON.parse(xhr.response))
    );

    return categoryEl
}

export function categories(data) {
    const categoriesEl = div({className: "categories"});

    data.forEach(_category => categoriesEl.append(category(_category.id, _category.title)));

    return categoriesEl
}
