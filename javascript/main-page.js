"use strict";

window.addEventListener("load", function() {
    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("resize", scrollFunction);
    document.addEventListener('dblclick', function(event) {
        event.preventDefault();
    }, { passive: false });
    
    $(".main").css('background-position', 'center, bottom 0vw left 0vw, bottom 0vw right 0vw, center');

    var index = 0;
    var col1Images = ["Patio", "Patio2"];
    var col1 = document.getElementById("imgColumn1");

    var col3Images = ["Pies", "LargeTray"];
    var col3 = document.getElementById("imgColumn3");
    changeImages();
    function changeImages() {
        col1.src = "images/spaces/" + col1Images[index] + ".jpeg";
        col3.src = "images/menu/" + col3Images[index] + ".jpeg";
        index < 1 ? index++ : index = 0; 
        setTimeout(changeImages, 4000);
    }

    scrollFunction();
    
    function scrollFunction () {
        var windowCenter = (window.innerHeight / 2);
        var img1Top = document.getElementById("imgColumn1").getBoundingClientRect().top;
        var img1Bottom = document.getElementById("imgColumn1").getBoundingClientRect().bottom;
        var img2Top = document.getElementById("imgColumn2").getBoundingClientRect().top;
        var img2Bottom = document.getElementById("imgColumn2").getBoundingClientRect().bottom;
        var img3Top = document.getElementById("imgColumn3").getBoundingClientRect().top;
        var img3Bottom = document.getElementById("imgColumn3").getBoundingClientRect().bottom;
        
        if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
            if (img1Top <= windowCenter && img1Bottom >= windowCenter) {
                ($('.img-column').eq(0).addClass('hovered'));
                ($('.images').eq(0).addClass('hovered'));
                ($('.img-txt').eq(0).addClass('hovered'));
            } else {
                ($('.img-column').eq(0).removeClass('hovered'));
                ($('.images').eq(0).removeClass('hovered'));
                ($('.img-txt').eq(0).removeClass('hovered'));
            }
            if (img2Top <= windowCenter && img2Bottom >= windowCenter) {
                ($('.img-column').eq(1).addClass('hovered'));
                ($('.images').eq(1).addClass('hovered'));
                ($('.img-txt').eq(1).addClass('hovered'));
            } else {
                ($('.img-column').eq(1).removeClass('hovered'));
                ($('.images').eq(1).removeClass('hovered'));
                ($('.img-txt').eq(1).removeClass('hovered'));
            }
            if (img3Top <= windowCenter && img3Bottom >= windowCenter) {
                ($('.img-column').eq(2).addClass('hovered'));
                ($('.images').eq(2).addClass('hovered'));
                ($('.img-txt').eq(2).addClass('hovered'));
            } else {
                ($('.img-column').eq(2).removeClass('hovered'));
                ($('.images').eq(2).removeClass('hovered'));
                ($('.img-txt').eq(2).removeClass('hovered'));
            }
        } else {
            ($('.img-column').eq(0).removeClass('hovered'));
            ($('.images').eq(0).removeClass('hovered'));
            ($('.img-txt').eq(0).removeClass('hovered'));
            ($('.img-column').eq(1).removeClass('hovered'));
            ($('.images').eq(1).removeClass('hovered'));
            ($('.img-txt').eq(1).removeClass('hovered'));
            ($('.img-column').eq(2).removeClass('hovered'));
            ($('.images').eq(2).removeClass('hovered'));
            ($('.img-txt').eq(2).removeClass('hovered'));
        }
    }

});