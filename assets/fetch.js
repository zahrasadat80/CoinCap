export async function fetchLists(url) {
  let response = await fetch(url);
  let body = await response.json();
  return body.data;
}
