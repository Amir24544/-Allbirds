$('ul.favorites__list').on('click', 'li:not(.favorites__list-item_active)', function() {
    $(this)
        .addClass('favorites__list-item_active').siblings().removeClass('favorites__list-item_active')
        .closest('div.favorites__tabs').find('div.favorites__row').removeClass('favorites__row_active').eq($(this).index()).addClass('favorites__row_active');
});

let owl = $('.owl-carousel');

owl.owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 3000,
    items: 3,
    dots: false,
    responsive: {
        0: {
            items:1,
        },
        600: {
            items: 2
        },
        1024: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
$('.arrow_next').click(function () {
    owl.trigger('next.owl.carousel');
});
$('.arrow_prev').click(function () {
    owl.trigger('prev.owl.carousel');
});