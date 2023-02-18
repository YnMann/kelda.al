$(function(){

    // Навигационное меню

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 75) $('#nav').addClass('fix');
        else $('#nav').removeClass('fix');
    });

});