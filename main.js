let assetsUrl = 'https://api.coincap.io/v2/assets';
//step one fetch data
async function getAssetsList() {
  let response = await fetch(assetsUrl);
  let body = await response.json();
  return body.data;
}
//step two loop over list
async function getAssetItem() {
  let list = await getAssetsList();
  for (let item of list) {
    renderRows(item);
  }
}

function makeTableCell(data) {
  const tableCell = document.createElement('td');
  tableCell.textContent = data;
  return tableCell;
}

const tBody = document.querySelector('tbody');

getAssetItem();
//step three assign each property to a var
function renderRows(asset) {
  const tableRow = document.createElement('tr');

  let rank = asset.rank;
  let rankCell = makeTableCell(rank);
  tableRow.appendChild(rankCell);

  let name = asset.name;
  let nameCell = makeTableCell(name);
  tableRow.appendChild(nameCell);

  let price = asset.priceUsd;
  let priceCell = makeTableCell(price);
  tableRow.appendChild(priceCell);

  let MarketCap = asset.marketCapUsd;
  let MarketCapCell = makeTableCell(MarketCap);
  tableRow.appendChild(MarketCapCell);

  let vWAP = asset.vwap24Hr;
  let vWAPCell = makeTableCell(vWAP);
  tableRow.appendChild(vWAPCell);

  let supply = asset.supply;
  let supplyCell = makeTableCell(supply);
  tableRow.appendChild(supplyCell);

  let volume = asset.volumeUsd24Hr;
  let volumeCell = makeTableCell(volume);
  tableRow.appendChild(volumeCell);

  let change = asset.changePercent24Hr;
  let changeCell = makeTableCell(change);
  tableRow.appendChild(changeCell);

  tBody.appendChild(tableRow);
}

// function makeTableRow() {
//   const tableRow = document.createElement('tr');
//   const tableCell = document.createElement('td');
//   tableCell.textContent = 2;
//   tableRow.appendChild(tableCell);
//   tBody.appendChild(tableRow);
// }

makeTableRow();
