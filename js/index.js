import { fragment } from './fragment.js';

document.addEventListener('DOMContentLoaded', async function () {
  const node = document.querySelector('section');
  if(location.search.substring(1)) {
    node.setAttribute('data-fragment', location.search.substring(1));
  }
  const page = `${node.getAttribute('data-fragment')}`;
  fragment(page, node);
});