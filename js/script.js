$(function () {

    //    testimonial slider

    $('.popular_categories_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 800,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
           },

  ]
    });


    $('.best_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 800,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
           },

  ]

    });

    $('.box_1_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 800,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [

            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
           },

  ]
    });
    
    
    $('.box_2_slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 800,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
           },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
           },

  ]
    });
    
    
    
    
});
