import {get as getVersion} from "./modules/version.js"
import {getState} from "./modules/state.js";

import {init as index} from "./modules/states/index.js";
import {init as _404} from "./modules/states/_404.js";

document.addEventListener("DOMContentLoaded", function () {
    (function (document) {
        getVersion(document.getElementById('version'));

        const outletEl = document.getElementById('outlet');

        const routing = {
            '': index,
            'test4': function () {

            }
        };

        const route = routing[getState()];
        if (route) {
            route(outletEl);
        } else {
            _404(outletEl)
        }

    })(document);
});
