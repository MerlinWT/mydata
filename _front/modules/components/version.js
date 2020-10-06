import {span} from "../dom.js";
import {get as getModel} from "../api.js";

export function get(versionEl) {

    getModel(
        'version',
        {},
        response => versionEl.append(
            span({innerText: response.rows[0].value})
        )
    );

}
