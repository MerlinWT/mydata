export function getState() {
    const route = window.location.pathname;

    return route.split('/').pop()
}
