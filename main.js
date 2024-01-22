    let currentIndex = 0;
    const container = document.getElementById('carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newPosition = -currentIndex * 100 + '%';
        container.style.transform = 'translateX(' + newPosition + ')';
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }