$(document).ready(function() {
    $(".slider").slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 500,
        easing: "ease",
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        touchThreshold: 10,
        centerMode: true,
        waitForAnimate: true,
        rows: 1,
        vertical: false,
    });

    /* $(".sliderbig").slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider",
    }); */
});