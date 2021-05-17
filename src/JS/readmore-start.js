window.addEventListener('load', function () {
  const switchableContent = document.querySelector('.switchable-content');
  const btnToggleContent = document.querySelector('.js-btn-toggle-content');

  function toggleContent() {
    switchableContent.classList.toggle('is-open');

    this.textContent = switchableContent.classList.contains('is-open') ? 'Less' : 'Read more';
  }

  btnToggleContent.addEventListener('click', toggleContent);
});
