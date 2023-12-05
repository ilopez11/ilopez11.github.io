window.addEventListener("load", function() {
    $('.title').click(function() {
        if (window.innerWidth > 884) {
            $('html, body').animate({scrollTop: $('#'+this.className.split(" ")[1]).offset().top-105}, "slow");
        } else {
            $('html, body').animate({scrollTop: $('#'+this.className.split(" ")[1]).offset().top-70}, "slow");
        }
    });

    $('.menu-title, .title').click(function() {
        $('.category-nav').toggleClass('displayed-nav');
        $('.fa-angle-down').toggleClass('fa-angle-up');
    });

    $('.menu-info').click(function() {
        if ($('.category-nav').hasClass('displayed-nav')) {
            $('.category-nav').toggleClass('displayed-nav');
            $('.fa-angle-down').toggleClass('fa-angle-up');
        }
    });
  
    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("resize", scrollFunction);

    scrollFunction();

    function scrollFunction () {
        if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
            if (window.innerWidth > 884) {
                ($('.menu-category-list').removeClass('menu-category-list-fixed-80'));
                ($('.menu-category-list').addClass('menu-category-list-fixed-120'));
            } else {
                ($('.menu-category-list').removeClass('menu-category-list-fixed-120'));
                ($('.menu-category-list').addClass('menu-category-list-fixed-80'));
            }
        } else {
            ($('.menu-category-list').removeClass('menu-category-list-fixed-120'));
            ($('.menu-category-list').removeClass('menu-category-list-fixed-80'));
        }
    
        var windowTop = $(window).scrollTop();
        var topOfSection;
        $('.section').each(function() {
            if (window.innerWidth < 884) {
                topOfSection = windowTop + 70;
                if($(this).offset().top + $(this).height() > topOfSection && windowTop > 107){
                    $('.menu-title h1').html($(this).children().eq(0).text());
                    $(".title").removeClass('selected');
                    $(".title."+$(this).attr('id')).addClass('selected');
                    return false;
                } else {
                    $('.menu-title h1').html("Menu");
                }
            } else {
                topOfSection = windowTop + 105;
                $('.menu-title h1').html("Menu");
                if($(this).offset().top + $(this).height() > topOfSection){
                    $(".title").removeClass('selected');
                    $(".title."+$(this).attr('id')).addClass('selected');
                    return false;
                }
            }
        });
    }
});