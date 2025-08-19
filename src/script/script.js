$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

        $('.nav_item a').on('click', function(e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        const headerHeight = $('header').outerHeight();
        const targetOffset = $(targetId).offset().top - headerHeight;
    
        $('html, body').animate({ scrollTop: targetOffset }, 500, function() {
            // Atualiza o destaque do menu após o scroll
            $('.nav_item').removeClass('active');
            $(e.target).parent().addClass('active');
        });
    });

    const sections = $('section');
    const navItens = $('.nav_item');

    $(window).on('scroll', function() {
        const header =$('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItens.removeClass('active');
        $(navItens[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });
});