export function getState() {
    return window.location.pathname.split('/').splice(1);
}
