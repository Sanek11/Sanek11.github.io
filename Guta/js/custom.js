(function ($) {

    jQuery(document).ready(function ($) {
        $('.menu-item' || '.hide-menu').hover(
            function () {
                $('.hr').addClass('menu-hover-hr-visible')
            },
            function () {
                $('.hr').removeClass('menu-hover-hr-visible')
            }
        );

        $(".hamburger").click(function () {
            if (!$('.mobile-menu').hasClass('clicked')) {
                $('.mobile-menu').addClass('clicked');
            } else {
                $('.mobile-menu').removeClass('clicked');
            }
        });

        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
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

        $(".news-see-more").click(function () {
            if (!$('.news-img-hidden').hasClass('news-img-visible')) {
                $('.news-img-hidden').addClass('news-img-visible');
            } else {
                $('.news-img-hidden').removeClass('news-img-visible');
            }
        });


        $('.news-see-more').click(function () {
            $(this).text($(this).text() == "СКРЫТЬ" ? "ПОКАЗАТЬ ЕЩЕ" : "СКРЫТЬ");
        });



        jQuery(document).ready(function ($) {
            $("#form").submit(function () {
                var par = $(this);
                if (!validateForm(par)) {
                    return false;
                }
                var form_data = $(this).serialize();
                $(".subscribe-success").addTemporaryClass("subscribe-visible", 3000);
                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: form_data,
                    success: function () {

                    }
                });
                return false;
            });

        });

        jQuery(document).ready(function ($) {
            $("#footer-form").submit(function () {
                var par = $(this);
                if (!validateForm(par)) {
                    return false;
                }
                var form_data = $(this).serialize();

                $.ajax({
                    type: "POST",
                    url: "send.php",
                    data: form_data,
                    success: function () {

                    }
                });
                return false;
            });

        });


        function validateForm(par) {
            var isValidate = true;
            par.find(".valid_string , .valid_textarea").each(function () {
                if (!$(this).val()) {
                    isValidate = false;
                    $(this).addClass("novalidate");
                    if ($(this).hasClass("validate")) {
                        $(this).removeClass("validate");
                    }
                } else {
                    $(this).addClass("validate");
                    if ($(this).hasClass("novalidate")) {
                        $(this).removeClass("novalidate");
                    }
                }
            });

            par.find(".valid_string.valid_email").each(function () {
                if ($(this).val().length > 0) {
                    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                    if (pattern.test($(this).val())) {
                        $(this).addClass("validate");
                        if ($(this).hasClass("novalidate")) {
                            $(this).removeClass("novalidate");
                        }
                    } else {
                        $(this).addClass("novalidate");
                        if ($(this).hasClass("validate")) {
                            $(this).removeClass("validate");
                        }
                        isValidate = false;
                    }
                } else {
                    $(this).addClass("novalidate");
                    if ($(this).hasClass("validate")) {
                        $(this).removeClass("validate");
                    }
                }
            });


            return isValidate;
        }


        $.fn.extend({

            addTemporaryClass: function (className, duration) {
                var elements = this;
                setTimeout(function () {
                    elements.removeClass(className);
                }, duration);

                return this.each(function () {
                    $(this).addClass(className);
                });
            }
        });



    });


})(jQuery);
