import {div, a, span} from "./dom.js";

function code(error) {
    return span({innerText: error})
}

export function error(error) {
    const errorEl = div({id: "error"});

    errorEl.append(code(error));

    return errorEl
}
