
document.querySelectorAll('.scroll-container').forEach(container => {
    const ul = container.querySelector('ul');
    container.querySelector('.scroll-arrow.left').onclick = () => {
        ul.scrollBy({ left: -200, behavior: 'smooth' });
    };
    container.querySelector('.scroll-arrow.right').onclick = () => {
        ul.scrollBy({ left: 200, behavior: 'smooth' });
    };
});