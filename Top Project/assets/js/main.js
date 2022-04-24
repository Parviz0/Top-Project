// Создаем переменную для хранения экземпляра конструктора Swiper













const cards = new ScrollReveal({
    reset: true, 
    distance: '100px',
    duration: 1000,
})

cards.reveal('.item-shop', {
    origin: 'bottom',
    interval: 200,
})

