import {error} from "../error.js";

export function init(outletEl) {
    outletEl.append(
        error(404)
    )
}
