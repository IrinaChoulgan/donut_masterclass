window.addEventListener('load', function () {
  const switchableContent = document.querySelector('.switchable');
  const btnToggleContent = document.querySelector('.js-btn');

  function toggleContent() {
    switchableContent.classList.toggle('is-open');

    this.textContent = switchableContent.classList.contains('is-open') ? 'Less' : 'Read more';
  }

  btnToggleContent.addEventListener('click', toggleContent);
});
