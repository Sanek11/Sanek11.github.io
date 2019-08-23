(function ($) {
    jQuery(document).ready(function ($) {
       
        $(".hamburger-icon").click(function () {
            if (!$('.mobile-menu').hasClass('active')) {
                $('.mobile-menu').addClass('active');
            } else {
                $('.mobile-menu').removeClass('active');
            }
        });
        
        
        $(".side-bar").click(function() {
            if(!$(this).children(".hidden-bar, .triangle").hasClass("active")){
    $(this).children(".hidden-bar, .triangle").addClass("active"); 
            }else{
               $(this).children(".hidden-bar, .triangle").removeClass("active");  
            }
 })
        
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        
        
    });
})(jQuery);
