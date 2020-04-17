// Взаимодействие с меню-бургером
jQuery(document).ready(function($) {
	$('.header__icon-burger').click(function(event) {
		// открываем/закрываем меню
		$('.header__icon-burger,.header__adaptive-menu').toggleClass('active'); 
		// не даем странице прокручиваться при открытом меню
		$('body').toggleClass('lock');
	});
});

// Построение адаптивного вертикального меню
jQuery(document).ready(function($) {
	$(window).resize(function(event) {
		adaptive_function();
	});
	function adaptive_header(width,height) {
		var headerMenu=$('.header__adaptive-menu');
		var headerLang=$('.languages');
		// Добавляем/убираем секцию 'languages' в адаптивное вертикальное меню
		if(width<=768){
			if(!headerLang.hasClass('done')){
				headerLang.addClass('done').appendTo(headerMenu);
			}
		}else{
			if(headerLang.hasClass('done')){
				headerLang.removeClass('done').prependTo($('.header-top'));
			}
		}
		// Добавляем/убираем элементы горизонтального меню в адаптивное вертикальное меню
		if(width<=768){
			if(!$('.header-bottom-menu').hasClass('done')){
				$('.header-bottom-menu').addClass('done').appendTo(headerMenu);
			}
		}else{
			$.each($('.header-bottom-menu'), function(index, val) {
				if($(this).hasClass('header-bottom-menu_right-part')){
					// Возвращаем элементы меню в правую колонку 
					if($(this).hasClass('done')){
						$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
					}
				}else{
					// Возвращаем элементы меню в левую колонку
					if($(this).hasClass('done')){
						$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
					}
				}
			});
		}
	}
	function adaptive_function() {
		var width=$(window).outerWidth();
		var height=$(window).outerHeight();
		adaptive_header(width,height);
	}
	adaptive_function();
});

// Добавление Google Maps
jQuery(document).ready(function($) {
	function map(n){
		var markers = new Array();
		var locations = [
			[new google.maps.LatLng(40.742944,-73.926083)]
		]
		var options = {
			zoom: 15,
			panControl:false,
			mapTypeControl:false,
			center: locations[0][0],
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}; 
		var map = new google.maps.Map(document.getElementById('map'), options);
		for (var i = 0; i < locations.length; i++) {
			var marker = new google.maps.Marker({
				position: locations[i][0],
				map: map,
			});
			markers.push(marker);
		}
	}
	if($("#map").length>0){
		map();
	}
});

