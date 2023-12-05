
window.addEventListener("load", function() {
    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("resize", scrollFunction);

    scrollFunction();

    function scrollFunction () {
        if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
            $('.main .fa-bars').css('font-size', '25px');
            if (window.innerWidth > 884) { 
                document.getElementById("logo").style.width = "150px";
                document.getElementById("topInfo").style.height = "105px";
                $('.nav-links ul li a').css('font-size', '16px');
                hideMenu();
            } else {
                document.getElementById("logo").style.width = "150px";
                document.getElementById("topInfo").style.height = "70px";
                $('.nav-links ul li a').css('font-size', '18px');
            }
        } else {
            $('.main .fa-bars').css('font-size', '35px');
            if (window.innerWidth > 884) { 
                document.getElementById("logo").style.width = "230px";
                document.getElementById("topInfo").style.height = "145px";
                $('.nav-links ul li a').css('font-size', '20px');
                hideMenu();
            } else {
                document.getElementById("logo").style.width = "230px";
                document.getElementById("topInfo").style.height = "105px";
                $('.nav-links ul li a').css('font-size', '18px');
            }
        }
    }

});


function hideMenu() {
    navLinks.style.left = "-200px";
    navScreen.style.backgroundColor = "rgba(0,0,0,0)";
    navScreen.style.pointerEvents = "none";
    $('body').css('overflow','visible');
    $('body').css('touch-action','');
    $('body').css('-ms-touch-action', '');
    miniLogo.style.left = '-120px';
}

function showMenu() {
    navLinks.style.left = "0px";
    navScreen.style.backgroundColor = "rgba(0,0,0,0.5)";
    navScreen.style.pointerEvents = "all";
    $('body').css('overflow','hidden');
    $('body').css('touch-action','none');
    $('body').css('-ms-touch-action', 'none');
    miniLogo.style.left = '70px';
}