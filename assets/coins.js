import { fetchLists } from './fetch.js';
import { renderRows } from './renderRows.js';

const baseURL = 'https://api.coincap.io';
const assetEndPoint = '/v2/assets';
const assetsUrl = baseURL + assetEndPoint;

//step two loop over list
async function getAssetItem() {
  let list = await fetchLists(assetsUrl);
  for (let item of list) {
    renderRows(item);
  }
}
getAssetItem();
