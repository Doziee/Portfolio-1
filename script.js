window.addEventListener('scroll', function() {
    var header = document.querySelector('.port-header');
    if (window.scrollY > 0) {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }
});

