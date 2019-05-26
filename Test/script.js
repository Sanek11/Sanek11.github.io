(function ($) {

    jQuery(document).ready(function ($) {
	$("#form").submit(function () {
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
	par.find(".valid_string").each(function () {
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
	par.find(".valid_check").each(function () {
	    if (!$(this).prop('checked')) {
		isValidate = false;
		$(this).parent().addClass("novalidate-check");
	    } else {
		$(this).parent().removeClass("novalidate-check");
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
    
    par.find(".valid_select").each(function () {
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

	return isValidate;
    }
    
   $(document).ready(function(){
     $('.form-element.valid_email').on('input', function(){ 
     $(".email-change").addClass("email-change-shown");
     })
 });
    
     $(document).ready(function(){
     $('.form-element.valid_name').on('input', function(){ 
     $(".email-change1").addClass("email-change-shown1");
     })
 });
    
})(jQuery);


(jQuery);
