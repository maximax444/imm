(function ($) {
    $(function () {

        $('.home-steps__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.home-steps').find('.home-steps__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
(function ($) {
    $(function () {

        $('.country-section__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.country-section').find('.country-section__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
const swiper = new Swiper('.home-history .swiper', {

    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".home-reviews__nav",
    },
    // Navigation arrows
    navigation: {
        nextEl: '.home-history__next',
        prevEl: '.home-history__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});

const swiper2 = new Swiper('.country-docs .swiper', {

    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.country-docs__next',
        prevEl: '.country-docs__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});
$('.home-table__all').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.home-table').find('.home-table__wrap').addClass('active');
    $(this).hide();
});
$(".main__select-top, .main__select-drop a").each(function () {
    $(this)
        .mouseover(function () {
            $(".main__place[data-place='" + $(this).attr("data-place") + "']").show();
        })
        .mouseout(function () {
            $(".main__place[data-place='" + $(this).attr("data-place") + "']").hide();
        });
});
$(".home-links__block").each(function () {
    $(this)
        .mouseover(function () {
            $('.home-links__bg').removeClass('active');
            $(".home-links__bg[data-img='" + $(this).attr("data-img") + "']").addClass('active');
        })
        .mouseout(function () {

        });
});
$(".home-table__cell")
    .mouseenter(function () {
        let ind = $(this).index();
        $(".home-table__row").each(function () {
            $(this).find(".home-table__cell").eq(ind).addClass('active');
        });
        $(".home-table__titles").each(function () {
            $(this).find(".home-table__cell").eq(ind).addClass('active');
        });
    })
    .mouseleave(function () {
        let ind = $(this).index();
        $(".home-table__row").each(function () {
            $(this).find(".home-table__cell").eq(ind).removeClass('active');
        });
        $(".home-table__titles").each(function () {
            $(this).find(".home-table__cell").eq(ind).removeClass('active');
        });
    });
$('.header__burg-open').on('click', function (e) {
    e.preventDefault();
    $('.menu').addClass('active');
});
$('.header__burg-close').on('click', function (e) {
    e.preventDefault();
    $('.menu').removeClass('active');
});