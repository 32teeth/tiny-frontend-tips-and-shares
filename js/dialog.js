setTimeout(() => {
  const buttons= document.querySelectorAll('button[data-dialog]');
  buttons.forEach(button => {
    button.addEventListener('click', async function () {
      const dialog = document.querySelector('dialog');
      dialog.open ? dialog.close('bye') : dialog.showModal();
    });
  });
}, 100);