export const fragment = (page, node) => {
  const dir = './fragments/';
  const ext = '.html';
  const path = dir + page + ext;

  fetch(path).then((response) => {
    node.innerHTML = '';
    response.text().then((text) => {
      node.innerHTML = text;
    });
  }).catch((error) => {
    console.error('Error loading fragment:', error);
  });

  import(`./${page}.js`).catch(() => {});
}
