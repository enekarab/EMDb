$(document).ready(function(){
    
    $('.left-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500, 
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    
    $('.right-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500, 
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});