function renderCryptoImg(parent, coinName) {
  const img = document.createElement('img');
  let imgUrl = `https://assets.coincap.io/assets/icons/${coinName.toLowerCase()}@2x.png`;
  img.src = imgUrl;
  img.width = 30;
  parent.appendChild(img);
}

// Format and render the name with an icon

export function createNameCell(name, symbol) {
  const nameCell = document.createElement('td');
  const nameWrapper = document.createElement('div');

  //style the wrapper
  nameWrapper.style.display = 'flex';
  nameWrapper.style.alignItems = 'center';
  nameWrapper.style.gap = '10px';

  // Add icon and name
  renderCryptoImg(nameWrapper, symbol);
  const nameText = document.createTextNode(name);
  nameWrapper.appendChild(nameText);

  // Append wrapper to nameCell
  nameCell.appendChild(nameWrapper);

  return nameCell;
}
