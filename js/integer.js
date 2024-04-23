
setTimeout(() => {
  const counter = document.querySelector('counter');
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', async function () {
      let integer = counter.getAttribute('style')
      integer = parseInt(integer.split(':')[1]);
      integer += parseInt(button.getAttribute('data-increment')) * Math.floor(Math.random() * 100);
      counter.setAttribute('style', '--integer: ' + integer);
    });
  })
}, 100);