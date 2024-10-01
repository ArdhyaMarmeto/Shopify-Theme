document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 4,  // Number of visible slides per page
        gap: '10px',
        pagination:true,
        breakpoints: {
            1024: {
                perPage: 3, // 3 cards per page for medium screens
            },
            768: {
                perPage: 2, // 2 cards per page for small screens
            },
            480: {
                perPage: 1, // 1 card per page for mobile
                focus: 'center'
            },
        },
        arrows: true,  // Show navigation arrows
        pagination: true,  // Disable pagination dots
    }).mount();
});

