(function ($) {
    "use strict"

    // init Isotope
    var $grid = $('.portfolio-item').isotope({
        // options
    });
    // filter items on button click
    $('.portfolio-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });


        // filter items on button click active
        $('.portfolio-menu').on('click', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });




    jQuery(window).load(function () {
        jQuery(".site-preloader").fadeOut(5000);
    });

}(jQuery));