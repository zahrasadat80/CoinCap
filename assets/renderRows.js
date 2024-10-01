import { createNameCell } from './renderNameCell.js';
import { formatNumber, toPercentage } from './format-prices.js';

export const tBody = document.querySelector('tbody');

//create table cell
export function makeTableCell(data, textAlign = 'right') {
  const tableCell = document.createElement('td');

  tableCell.textContent = data;
  tableCell.style.textAlign = textAlign;

  return tableCell;
}

// Create a table row and append multiple cells

export function appendCellsRow(row, cells) {
  cells.forEach((cell) => {
    row.appendChild(cell);
  });
}

// Render each row
export function renderRows(item) {
  const tableRow = document.createElement('tr');

  const rankCell = makeTableCell(item.rank);
  const nameCell = createNameCell(item.name, item.symbol);
  const priceCell = makeTableCell(formatNumber(item.priceUsd));
  const marketCapCell = makeTableCell(formatNumber(item.marketCapUsd));
  const vwapCell = makeTableCell(formatNumber(item.vwap24Hr));
  const supplyCell = makeTableCell(formatNumber(item.supply).slice(1)); // remove $
  const volumeCell = makeTableCell(formatNumber(item.volumeUsd24Hr));
  const changeCell = makeTableCell(toPercentage(Number(item.changePercent24Hr)), 'right');

  appendCellsRow(tableRow, [rankCell, nameCell, priceCell, marketCapCell, vwapCell, supplyCell, volumeCell, changeCell]);

  tBody.appendChild(tableRow);
}
