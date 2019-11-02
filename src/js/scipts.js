$(".hrm__shoplink").each(function(i){
	$(this).on('click', function(e){
		toggleSlide(i, e);
	});
});

$(".hrm__back").each(function(i){
	$(this).on('click', function(e){
		toggleSlide(i, e);
	});
});

function toggleSlide(i, e){
	e.preventDefault();
	$(".hrm__additionalinfo").eq(i).toggleClass("hrm__hide", 500);
	$(".hrm__info").eq(i).toggleClass("hrm__hide", 500);
};