export function el(tag, properties = {}, attributes = {}) {
    const el = document.createElement(tag);
    Object.assign(el, properties);
    Object.keys(attributes).forEach(
        key => el.setAttribute(key, attributes[key])
    );

    return el
}

export function div(properties = {}, attributes = {}) {
    return el('div', properties, attributes)
}

export function span(properties = {}, attributes = {}) {
    return el('span', properties, attributes)
}

export function a(properties = {}, attributes = {}) {
    return el('a', properties, attributes)
}

export function input(properties = {}, attributes = {}) {
    return el('input', properties, attributes)
}

export function button(properties = {}, attributes = {}) {
    return el('button', properties, attributes)
}

export function form(properties = {}, attributes = {}) {
    return el('form', properties, attributes)
}
