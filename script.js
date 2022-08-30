var typed = new Typed(".auto-type", {
    strings: ["Designer", "Coder", "Developer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
})

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 500
})

AOS.init({
    duration: 1500
})

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

history.scrollRestoration = "manual";

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});