import {get as getVersion} from "./modules/version.js"
import {getState} from "./modules/state.js";

import {init as _404} from "./modules/states/_404.js";
import {init as index} from "./modules/states/index.js";
import {init as group} from "./modules/states/group.js";

document.addEventListener("DOMContentLoaded", function () {
    (function (document) {
        getVersion(document.getElementById('version'));

        const outletEl = document.getElementById('outlet');

        const routing = {
            '': index,
            group
        };

        const state = getState()[0];
        const data = getState().splice(1);
        const route = routing[state];
        if (route) {
            route(outletEl, data);
        } else {
            _404(outletEl)
        }

    })(document);
});
