$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItens = $('.nav_item');

    $(window).on('scroll', function() {
        const header =$('header');

        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        console.log(scrollPosition);
        });
});