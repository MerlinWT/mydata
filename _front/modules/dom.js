function el(tag, properties = {}, attributes = {}) {
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
