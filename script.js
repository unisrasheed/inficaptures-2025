
// <!-- Carousel Script -->

  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('hidden', idx !== i);
    });
  }

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000); // change every 3 seconds





(function () {
  const items = document.querySelectorAll('#image-gallery .gallery-item');
  let index = 0;

  function updateActiveImage() {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  updateActiveImage();

  setInterval(() => {
    index = (index + 1) % items.length;
    updateActiveImage();
  }, 2000);
})();
