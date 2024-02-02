window.addEventListener("load", function() {
    $('.title').click(function() {
        if (window.innerWidth > 884) {
            $('html, body').animate({scrollTop: $('#'+this.className.split(" ")[1]).offset().top-104}, "slow");
        } else {
            $('html, body').animate({scrollTop: $('#'+this.className.split(" ")[1]).offset().top-69}, "slow");
        }
    });

    $('.menu-title, .title').click(function() {
        toggleNavDisplay();
    });

    $('.menu-info').click(function() {
        if ($('.category-nav').hasClass('displayed-nav')) {
            toggleNavDisplay();
        }
    }); 

    function toggleNavDisplay() {
        $('.category-nav').toggleClass('displayed-nav');
        $('.fa-angle-down').toggleClass('fa-angle-up');
        $('body').toggleClass('unscrollable');
    }

    window.addEventListener("orientationchange", function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      }, false);
    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("resize", scrollFunction);

    scrollFunction();

    function scrollFunction () {
        if ($('.category-nav').hasClass('displayed-nav') && window.innerWidth > 884) {
            toggleNavDisplay();
        }

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
        var topMargin = (window.innerWidth <= 350) ? 86 : (window.innerWidth <= 390) ? 89 : 91;
        $('.section').each(function() {
            if (window.innerWidth < 884) {
                topOfSection = windowTop + 70;
                if($(this).offset().top + $(this).height() > topOfSection && windowTop > topMargin){
                    $('.menu-title h1').html($(this).children().eq(0).text());
                    $(".title").removeClass('selected');
                    $(".title."+$(this).attr('id')).addClass('selected');
                    return false;
                } else {
                    $('.menu-title h1').html("Menu");
                }
            } else {
                topOfSection = windowTop + 105.2;
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