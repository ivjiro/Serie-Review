
document.querySelectorAll('.scroll-container').forEach(container => {
    const ul = container.querySelector('ul');
    container.querySelector('.scroll-arrow.left').onclick = () => {
        ul.scrollBy({ left: -200, behavior: 'smooth' });
    };
    container.querySelector('.scroll-arrow.right').onclick = () => {
        ul.scrollBy({ left: 200, behavior: 'smooth' });
    };
});


const modal = document.getElementById('modal');
let hoverTimeout = null;

document.querySelectorAll('.preview-img').forEach(img => {
  img.addEventListener('mouseenter', function() {
    clearTimeout(hoverTimeout); 
    const li = img.closest('li');
    li.insertBefore(modal, li.firstChild); // Move modal to the end of the list item
    modal.style.display = 'block';
    document.getElementById('modal-img').src = img.getAttribute('data-preview-img') || img.src;
    document.getElementById('modal-title').textContent = img.getAttribute('data-title') || '';
    document.getElementById('modal-rating').textContent = img.getAttribute('data-rating') || '';
    document.getElementById('modal-tag1').textContent = img.getAttribute('data-tag1') || '';
    document.getElementById('modal-tag2').textContent = img.getAttribute('data-tag2') || '';
    document.getElementById('modal-meta').textContent = img.getAttribute('data-meta') || '';
    document.getElementById('modal-desc').textContent = img.getAttribute('data-desc') || '';
    const a = img.closest('a');
    modal.onclick = function() {
    if (a && a.href) {
     window.open(a.href, '_blank'); // Opens in a new tab
     // Or use: window.location.href = a.href; // For same tab
    }
  };
});

img.addEventListener('mouseleave', function() {
    hoverTimeout = setTimeout(() => {
      modal.style.display = 'none';
    }, 100); // Hide modal after 1 second
  });
});

modal.addEventListener('mouseenter', function() {
  clearTimeout(hoverTimeout);
  modal.style.display = 'block';
});

modal.addEventListener('mouseleave', function() {
  modal.style.display = 'none';
});
