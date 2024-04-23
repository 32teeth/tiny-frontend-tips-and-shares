export const fragment = (page, node) => {
  const dir = './fragments/';
  const ext = '.html';
  const path = dir + page + ext;
  fetch(path).then((response) => {
    node.innerHTML = '';
    response.text().then((text) => {
      node.innerHTML = text;
    });
  });

  if(page === 'integer') {
    import('./integer.js')
  }

  if(page === 'dialog') {
    import('./dialog.js')
  }
}