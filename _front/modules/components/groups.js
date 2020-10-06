import {a, appends, div} from "../dom.js";

function group(title, state) {
    return appends(
        div({className: "group"}),
        [
            a({innerText: title}, {href: state})
        ]
    );
}

export function groups(data) {
    return appends(
        div({className: "groups"}),
        [
            ...data.map(
                ({title, model}) => group(
                    title,
                    `group/${model}`
                )
            )
        ]
    );
}
