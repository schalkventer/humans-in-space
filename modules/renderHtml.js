function renderHtml(space, number = '') {
  const markup = space.map((columns) => {
    return columns.map((cell) => {
      return `
        <div
          class="item ${cell === '&nbsp;' ? 'is-empty' : ''}"
          style="
            width: ${100 / (columns.length)}%;
            height: ${100 / (space.length)}%"
          >
            ${cell}
          </div>
      `;
    }).join('');
  }).join('');
  
  return `
    <h1>There are ${number} humans in space right now</h1>
    <div class="grid">
      ${markup}
    </div>
  `
}


export default renderHtml;