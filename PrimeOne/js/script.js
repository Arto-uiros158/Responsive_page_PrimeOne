jQuery(document).ready(function($) {
	$('.header__icon-burger').click(function(event) {
		$('.header__icon-burger,.header__adaptive-menu').toggleClass('active'); // открываем/закрываем меню
		$('body').toggleClass('lock');
		// не даем странице прокручиваться при открытом меню
	});


});

//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header__adaptive-menu');
		var headerLang=$('.languages');
	if(w<=768){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
	if(w<=768){
		if(!$('.header-bottom-menu').hasClass('done')){
			$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
		}
	}else{
		$.each($('.header-bottom-menu'), function(index, val) {
			if($(this).hasClass('header-bottom-menu_right-part')){
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			}else{
				if($(this).hasClass('done')){
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
adaptive_function();