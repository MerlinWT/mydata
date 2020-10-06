import {error} from "../components/error.js";

export function init(outletEl) {
    outletEl.append(
        error(404)
    )
}
