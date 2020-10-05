import {span} from "./dom.js";

export function get(versionEl) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `api/get.py?model=version`);
    xhr.send();

    xhr.onload = () => versionEl.append(
        span({innerText: JSON.parse(xhr.response)[0].value})
    );
}
