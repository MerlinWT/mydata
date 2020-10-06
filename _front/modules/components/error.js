import {appends, div, span} from "../dom.js";

function code(error) {
    return span({innerText: error})
}

export function error(error) {
    return appends(
        div({id: "error"}),
        [
            code(error)
        ]
    );
}
