import {get as getModel} from "../api.js";
import {categories} from "../categories.js";

export function init(outletEl) {
    getModel(
        'category',
        {},
        response => outletEl.append(
            categories(response)
        )
    );
}
