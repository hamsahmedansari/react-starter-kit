import { config } from "../common";

export default function http(method, api_url, body, headers = false) {
  const url = config.BASE_URL + api_url;
  const data = new FormData();
  body &&
    Object.keys(body).map(key => {
      data.append(key, body[key]);
    });

  const options = {
    method,
    body: body ? data : null
  };
  if (headers) options.headers = headers;
  return fetch(url, options).then(response => {
    return response.json();
  });
}
