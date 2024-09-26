export function formatNumber(price) {
  let number = +price;

  // Handle large numbers first (thousands, millions, billions, trillions)
  if (number >= 1e12) {
    return `$${(number / 1e12).toFixed(2)}t`; // Trillions
  } else if (number >= 1e9) {
    return `$${(number / 1e9).toFixed(2)}b`; // Billions
  } else if (number >= 1e6) {
    return `$${(number / 1e6).toFixed(2)}m`; // Millions
  }

  // If the number is less than 1,000, format it as a regular currency
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function toPercentage(number) {
  return number.toFixed(2) + '%';
}
