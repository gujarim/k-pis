$(window).load(function() {
	var swiperOpt = {
		allowTouchMove: false,
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			721 : {
				slidesPerView: 1,
				allowTouchMove: true,
			}
		}
	}

//	var infoBoxSwiper = new Swiper('.infoBox', swiperOpt); // 국유재산 통계정보, 행정·공공기관 복덕방
//	var propertySwiper = new Swiper('.propertyList', swiperOpt); // 국유재산검색
//	var participationSwiper = new Swiper('.participationList', swiperOpt); // 민원마당
	new Swiper('.infoBox', swiperOpt); // 국유재산 통계정보, 행정·공공기관 복덕방
	new Swiper('.propertyList', swiperOpt); // 국유재산검색
	new Swiper('.participationList', swiperOpt); // 민원마당
});

$(document).ready(function() {
	// pc
	$('.mainMapSch .btnArea').on('click', function() {
		$('body').toggleClass('openMap');
		$(this).text($(this).text() == '지역선택 닫기' ? '지역선택 열기' : '지역선택 닫기')
	    $(this).attr('title', $(this).text())
	});

	// 국유부동산 지도조회 건너뛰기
	$('.mainMapSch .skip a').on('click', function() {
		$('body').addClass('openMap');
		var id = $(this).attr('href');
		$('.tabMenu:first a', id).attr('tabindex', '0').focus().removeAttr('tabindex');
		return false;
	});

	// mobile
	$('#header .btnMapSch a').off('click').on('click', function() {
		$('body').addClass('openMap');
		return false;
	});

	$('.mainMapSch .btnClose').on('click', function() {
		$('body').removeClass('openMap');
	});

	// 지도영역
	$('.mainMap a').on('click', function() {
		if($('.mainMap .on').children().length > 0)
		{
			$('.mainMap .on').children().attr("title", $('.mainMap .on').children().attr("title").replace(" 선택됨", ""));
		}
    	$(this).parent().addClass('on').siblings().removeClass('on');
        $(this).attr("title", $(this).attr("title") + " 선택됨");
		
		var value = $(this).data('value');
		$('#ctprvnCode, #ctprvnCodeR').val(value);
		$('body').addClass('openMap');
		return false;
	});

	// 시도 선택 셀렉트박스
	$('#ctprvnCode, #ctprvnCodeR').on('change', function() {
		var value = $(this).val();
		$('.mainMap a[data-value=' + value + ']').click();
	});
});