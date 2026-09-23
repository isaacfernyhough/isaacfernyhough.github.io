document.addEventListener('DOMContentLoaded', function () {
  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('img');
  var lbCaption = lb.querySelector('.lb-caption');
  var closeBtn = lb.querySelector('.lb-close');

  function openLightbox(src, caption) {
    lbImg.src = src;
    lbCaption.textContent = caption || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('img[data-lightbox]').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.getAttribute('data-caption') || img.alt || '');
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lb.addEventListener('click', function (e) {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
