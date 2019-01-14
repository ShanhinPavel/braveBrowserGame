import createElement from './createElement';

export default function createTableOfScore(userName, containerName, data, tableTitle) {
  // Crete nodes and set context
  const table = createElement('table', { class: `${containerName}__table` });
  const caption = createElement('caption', { class: `${containerName}__table-caption` });
  caption.textContent = tableTitle;
  const th = createElement('tr');
  const firstHeader = createElement('th');
  firstHeader.textContent = 'User name';
  const secondHeader = createElement('th');
  secondHeader.textContent = 'Wins';
  // Add children nodes to parent
  th.append(firstHeader, secondHeader);
  table.append(caption, th);
  // Render data at the table
  const keys = Object.keys(data);
  keys.forEach((element) => {
    const tr = createElement('tr');
    const tdName = createElement('td');
    tdName.textContent = element;
    const tdWins = createElement('td');
    tdWins.textContent = data[element];
    tr.append(tdName, tdWins);
    // Mark row with current user
    if (element === userName) {
      tr.style.color = 'red';
    }
    table.appendChild(tr);
  });
  return table;
}
