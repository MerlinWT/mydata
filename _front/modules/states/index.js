import {categories} from "../categories.js";

export function init(outletEl) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/get.py?model=category');
    xhr.send();

    xhr.onload = () => outletEl.append(
        categories(JSON.parse(xhr.response))
    )
}
