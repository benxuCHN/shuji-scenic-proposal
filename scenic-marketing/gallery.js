const lightbox = document.querySelector('.lightbox');

if (lightbox && typeof lightbox.showModal === 'function') {
  const preview = lightbox.querySelector('img');
  const title = lightbox.querySelector('strong');
  const close = lightbox.querySelector('button');

  for (const link of document.querySelectorAll('.zoom')) {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      title.textContent = link.dataset.caption;
      preview.alt = link.querySelector('img').alt;
      preview.src = link.href;
      lightbox.showModal();
    });
  }

  close.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}
