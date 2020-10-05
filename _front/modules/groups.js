import {div, a} from "./dom.js";

function group(title, state) {
    const categoryEl = div({className: "group"});

    categoryEl.append(
        a({innerText: title}, {href: state})
    );
    return categoryEl
}

export function groups(data) {
    const categoriesEl = div({className: "groups"});

    data.forEach(_group => categoriesEl.append(group(_group.title, `group/${_group.id}`)));

    return categoriesEl
}
