function serialise(obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function api(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `/api/${url}`);
    xhr.send();

    xhr.onload = () => callback(JSON.parse(xhr.response))
}

export function get(model, params, callback) {
    params['model'] = model;

    api('GET', `get.py?${serialise(params)}`, callback)
}
