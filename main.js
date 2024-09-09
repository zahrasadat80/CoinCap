let assetsUrl = 'https://api.coincap.io/v2/assets';
async function getAssetsList() {
  let response = await fetch(assetsUrl);
  let body = await response.json();
  return body.data;
}

let data = getAssetsList();

const tBody = document.querySelector('tbody');

function makeTableRow() {
  const tableRow = document.createElement('tr');
  const tableCell = document.createElement('td');
  tableCell.textContent = 2;
  tableRow.appendChild(tableCell);
  tBody.appendChild(tableRow);
}

makeTableRow();
