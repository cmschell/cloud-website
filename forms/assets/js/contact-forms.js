
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.c-form-1').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.c-form-1-container').backstretch("assets/img/backgrounds/2.jpg");
    $('.c-form-3-container').backstretch("assets/img/backgrounds/3.jpg");
    $('.c-form-5-container').backstretch("assets/img/backgrounds/5.jpg");
    $('.c-form-8-container').backstretch("assets/img/backgrounds/4.jpg");
    
    /*
        Wow
    */
    new WOW().init();
    
    /*
	    Contact forms
	*/
    // FORM 1
	$('.c-form-1-box form input[type="text"], .c-form-1-box form textarea').on('focus', function() {
		$('.c-form-1-box form input[type="text"], .c-form-1-box form textarea').removeClass('contact-error');
	});
	$('.c-form-1-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-1-box form input[type="text"], .c-form-1-box form textarea').removeClass('contact-error');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.c-form-1-box form .c-form-1-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.c-form-1-box form .c-form-1-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.c-form-1-box form .c-form-1-message').addClass('contact-error');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	                $('.c-form-1-box form').fadeOut('fast', function() {
	                    $('.c-form-1-box .c-form-1-bottom').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                    // reload background
	    				$('.c-form-1-container').backstretch("resize");
	                });
	            }
	        }
	    });
	});
	
	// FORM 2
	$('.c-form-2-box form input[type="text"], .c-form-2-box form textarea').on('focus', function() {
		$('.c-form-2-box form input[type="text"], .c-form-2-box form textarea').removeClass('contact-error');
	});
	$('.c-form-2-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-2-box form input[type="text"], .c-form-2-box form textarea').removeClass('contact-error');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.c-form-2-box form .c-form-2-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.c-form-2-box form .c-form-2-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.c-form-2-box form .c-form-2-message').addClass('contact-error');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	                $('.c-form-2-box form').fadeOut('fast', function() {
	                    $('.c-form-2-box .c-form-2-bottom').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                });
	            }
	        }
	    });
	});
	
	// FORM 3
	$('.c-form-3-box form input[type="text"], .c-form-3-box form textarea').on('focus', function() {
		$('.c-form-3-box form input[type="text"], .c-form-3-box form textarea').removeClass('contact-error');
	});
	$('.c-form-3-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-3-box form input[type="text"], .c-form-3-box form textarea').removeClass('contact-error');
	    var this_form_parent = $(this).parents('.c-form-3-box');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.c-form-3-box form .c-form-3-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.c-form-3-box form .c-form-3-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.c-form-3-box form .c-form-3-message').addClass('contact-error');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	            	this_form_parent.find('.c-form-3-top').fadeOut('fast');
	            	this_form_parent.find('.c-form-3-bottom').fadeOut('fast', function() {
	            		this_form_parent.append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                    // reload background
	    				$('.c-form-3-container').backstretch("resize");
	                });
	            }
	        }
	    });
	});
	
	// FORM 4
	$('.c-form-4-box form input[type="text"], .c-form-4-box form textarea').on('focus', function() {
		$('.c-form-4-box form input[type="text"], .c-form-4-box form textarea').removeClass('contact-error');
	});
	$('.c-form-4-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-4-box form input[type="text"], .c-form-4-box form textarea').removeClass('contact-error');
	    var this_form_parent = $(this).parents('.c-form-4-box');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.c-form-4-box form .c-form-4-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.c-form-4-box form .c-form-4-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.c-form-4-box form .c-form-4-message').addClass('contact-error');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	            	this_form_parent.find('.c-form-4-top').fadeOut('fast');
	            	this_form_parent.find('.c-form-4-bottom').fadeOut('fast', function() {
	            		this_form_parent.append('<p class="message-sent">Thanks for contacting us! We will get back to you very soon.</p>');
	                });
	            }
	        }
	    });
	});
	
	// FORM 5
	$('.c-form-5-box form input[type="text"], .c-form-5-box form textarea').on('focus', function() {
		$('.c-form-5-box form input[type="text"], .c-form-5-box form textarea').removeClass('contact-error');
	});
	$('.c-form-5-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-5-box form input[type="text"], .c-form-5-box form textarea').removeClass('contact-error');
	    var this_form_parent = $(this).parents('.c-form-5-box');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact-2.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	        	if(json.nameMessage != '') {
	                $('.c-form-5-box form .c-form-5-name').addClass('contact-error');
	            }
	            if(json.emailMessage != '') {
	                $('.c-form-5-box form .c-form-5-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.c-form-5-box form .c-form-5-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.c-form-5-box form .c-form-5-message').addClass('contact-error');
	            }
	            if(json.nameMessage == '' && json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	            	this_form_parent.find('.c-form-5-top').fadeOut('fast');
	            	this_form_parent.find('.c-form-5-bottom').fadeOut('fast', function() {
	            		this_form_parent.append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                    // reload background
	    				$('.c-form-5-container').backstretch("resize");
	                });
	            }
	        }
	    });
	});
	
	// FORM 6
	$('.c-form-6-box form input[type="text"], .c-form-6-box form textarea').on('focus', function() {
		$('.c-form-6-box form input[type="text"], .c-form-6-box form textarea').removeClass('contact-error');
	});
	$('.c-form-6-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-6-box form input[type="text"], .c-form-6-box form textarea').removeClass('contact-error');
	    var this_form_parent = $(this).parents('.c-form-6-box');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	        	$('.c-form-6-box form label[for="c-form-6-email"] .contact-error').fadeOut('fast', function(){
	        		if(json.emailMessage != '') {
		                $(this).html('(' + json.emailMessage + ')').fadeIn('fast');
		            }
	        	});
	        	$('.c-form-6-box form label[for="c-form-6-subject"] .contact-error').fadeOut('fast', function(){
	        		if(json.subjectMessage != '') {
		                $(this).html('(' + json.subjectMessage + ')').fadeIn('fast');
		            }
	        	});
	        	$('.c-form-6-box form label[for="c-form-6-message"] .contact-error').fadeOut('fast', function(){
	        		if(json.messageMessage != '') {
		                $(this).html('(' + json.messageMessage + ')').fadeIn('fast');
		            }
	        	});
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	            	this_form_parent.find('.c-form-6-top').fadeOut('fast');
	            	this_form_parent.find('.c-form-6-bottom').fadeOut('fast', function() {
	            		this_form_parent.append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                });
	            }
	        }
	    });
	});
	
	// FORM 7
	$('.c-form-7-box form input[type="text"], .c-form-7-box form textarea').on('focus', function() {
		$('.c-form-7-box form input[type="text"], .c-form-7-box form textarea').removeClass('contact-error');
	});
	$('.c-form-7-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-7-box form input[type="text"], .c-form-7-box form textarea').removeClass('contact-error');
	    var this_form_parent = $(this).parents('.c-form-7-box');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact-with-antispam.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.c-form-7-box form .c-form-7-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.c-form-7-box form .c-form-7-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.c-form-7-box form .c-form-7-message').addClass('contact-error');
	            }
	            if(json.antispamMessage != '') {
	                $('.c-form-7-box form .c-form-7-antispam').addClass('contact-error');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
	            	this_form_parent.find('.c-form-7-top').fadeOut('fast');
	            	this_form_parent.find('.c-form-7-bottom').fadeOut('fast', function() {
	            		this_form_parent.append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	                });
	            }
	        }
	    });
	});
	
	// FORM 8
	$('.c-form-8-box form input[type="text"], .c-form-8-box form textarea').on('focus', function() {
		$('.c-form-8-box form input[type="text"], .c-form-8-box form textarea').removeClass('contact-error');
	});
	$('.c-form-8-box form').submit(function(e) {
		e.preventDefault();
	    $('.c-form-8-box form input[type="text"], .c-form-8-box form textarea').removeClass('contact-error');
	    var this_form_parent = $(this).parents('.c-form-8-box');
	    var postdata = $(this).serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'assets/contact-with-antispam.php',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	        	$('.c-form-8-box form label[for="c-form-8-email"] .contact-error').fadeOut('fast', function(){
	        		if(json.emailMessage != '') {
		                $(this).html('(' + json.emailMessage + ')').fadeIn('fast');
		            }
	        	});
	        	$('.c-form-8-box form label[for="c-form-8-subject"] .contact-error').fadeOut('fast', function(){
	        		if(json.subjectMessage != '') {
		                $(this).html('(' + json.subjectMessage + ')').fadeIn('fast');
		            }
	        	});
	        	$('.c-form-8-box form label[for="c-form-8-message"] .contact-error').fadeOut('fast', function(){
	        		if(json.messageMessage != '') {
		                $(this).html('(' + json.messageMessage + ')').fadeIn('fast');
		            }
	        	});
	        	$('.c-form-8-box form label[for="c-form-8-antispam"] .contact-error').fadeOut('fast', function(){
	        		if(json.antispamMessage != '') {
		                $(this).html('(' + json.antispamMessage + ')').fadeIn('fast');
		            }
	        	});
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
	            	this_form_parent.find('.c-form-8-top').fadeOut('fast');
	            	this_form_parent.find('.c-form-8-bottom').fadeOut('fast', function() {
	            		this_form_parent.append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
	            		// reload background
	    				$('.c-form-8-container').backstretch("resize");
	                });
	            }
	        }
	    });
	});
	
	
});
