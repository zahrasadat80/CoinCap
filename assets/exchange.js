import { fetchLists } from './fetch.js';
import { makeTableCell, appendCellsRow, tBody } from './renderRows.js';
import { formatNumber, toPercentage } from './format-prices.js';
const baseURL = 'https://api.coincap.io';
const exchangeEndPoint = '/v2/exchanges';

const exchangeUrl = baseURL + exchangeEndPoint;
const marketsEndpoint = `${baseURL}/v2/markets`;

async function getAssetItem() {
  let list = await fetchLists(exchangeUrl);
  for (let item of list) {
    renderRows(item);
  }
}
getAssetItem();

export function renderRows(item) {
  const tableRow = document.createElement('tr');

  const rankCell = makeTableCell(item.rank);
  const nameCell = makeTableCell(item.name, 'left');
  const TradingPairsCell = makeTableCell(item.tradingPairs);
  const volume = makeTableCell(formatNumber(item.volumeUsd));
  const percentTotal = makeTableCell(toPercentage(Number(item.percentTotalVolume)));
  const socket = document.createElement('div');
  const circle = document.createElement('div');
  circle.classList.add('circle');
  socket.classList.add('socket');
  socket.appendChild(circle);
  appendCellsRow(tableRow, [rankCell, nameCell, TradingPairsCell, volume, percentTotal, socket]);

  tBody.appendChild(tableRow);
}
