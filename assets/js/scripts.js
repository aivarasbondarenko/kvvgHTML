$(document).ready(function(){
    $('.partners-logo').slick({
        autoplay: true,
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.workwith-logo').slick({
        autoplay: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});

if ($(window).width() < 992){
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
}else{
    $(document).on('mouseOver', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });
}

// make it as accordion for smaller screens

if ($(window).width() < 992) {
    $('.dropdown-menu a').click(function(e){
        e.preventDefault();

        if($(this).next('.submenu').length){
            $(this).next('.submenu').toggle();
        }

        if($(this).parent().parent().attr("data-level") ){
            $(this).parent().parent().toggle()
        }

        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.submenu').hide();
        })
    });
}

let burgerMenu = document.querySelector('.navbar-toggler');
    burgerMenu.addEventListener('click', function() {

        let bars = document.querySelector('.navbar-toggler-icon i');

        if(bars.getAttribute('class') == 'fas fa-bars'){
            bars.setAttribute('class', 'fas fa-times');
        }else{
            bars.setAttribute('class', 'fas fa-bars');
        }
})
