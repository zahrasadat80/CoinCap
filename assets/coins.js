import { formatNumber, toPercentage } from './format-prices.js';
//======================================all things for making table===========================

let assetsUrl = 'https://api.coincap.io/v2/assets';
const tBody = document.querySelector('tbody');

//step one fetch data
async function getAssetsList() {
  let response = await fetch(assetsUrl);
  let body = await response.json();
  return body.data;
}
getAssetItem();

//step two loop over list
async function getAssetItem() {
  let list = await getAssetsList();
  for (let item of list) {
    renderRows(item);
  }
}
//function for make cells of table
function makeTableCell(data) {
  const tableCell = document.createElement('td');
  tableCell.textContent = data;
  return tableCell;
}

//step three assign each property to a var
function renderRows(asset) {
  const tableRow = document.createElement('tr');

  let rank = asset.rank;
  let rankCell = makeTableCell(rank);
  tableRow.appendChild(rankCell);

  let symbol = asset.symbol;
  let name = asset.name;
  const nameCell = document.createElement('td');
  const nameWrapper = document.createElement('div');
  const nameText = document.createTextNode(name); //I learned new thing
  renderCryptoImg(nameWrapper, symbol);
  nameWrapper.style.display = 'flex';
  nameWrapper.style.alignItems = 'center';
  nameWrapper.style.gap = '10px';
  nameWrapper.appendChild(nameText);
  nameCell.appendChild(nameWrapper);
  tableRow.appendChild(nameCell);

  let price = asset.priceUsd;
  let formattedPrice = formatNumber(price);
  let priceCell = makeTableCell(formattedPrice);
  tableRow.appendChild(priceCell);
  console.log(typeof formattedPrice);

  let MarketCap = asset.marketCapUsd;
  let formattedMarketCap = formatNumber(MarketCap);
  let MarketCapCell = makeTableCell(formattedMarketCap);
  tableRow.appendChild(MarketCapCell);

  let vWAP = asset.vwap24Hr;
  let formattedVWAP = formatNumber(vWAP);
  let vWAPCell = makeTableCell(formattedVWAP);
  tableRow.appendChild(vWAPCell);

  let supply = asset.supply;
  let formattedSupply = formatNumber(supply).slice(1); //for removing dollar sign
  let supplyCell = makeTableCell(formattedSupply);
  tableRow.appendChild(supplyCell);

  let volume = asset.volumeUsd24Hr;
  let formattedVolume = formatNumber(volume);
  let volumeCell = makeTableCell(formattedVolume);
  tableRow.appendChild(volumeCell);

  let change = Number(asset.changePercent24Hr);
  let formattedChange = toPercentage(change);
  let changeCell = makeTableCell(formattedChange);
  changeCell.style.textAlign = 'right';
  tableRow.appendChild(changeCell);

  tBody.appendChild(tableRow);
}
//===============adding picture beside the name of cryptocurrency============

function renderCryptoImg(parent, coinName) {
  const img = document.createElement('img');
  let imgUrl = `https://assets.coincap.io/assets/icons/${coinName.toLowerCase()}@2x.png`;
  img.src = imgUrl;
  img.width = 30;
  parent.appendChild(img);
}
//=============================
