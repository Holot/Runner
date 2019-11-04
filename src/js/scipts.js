//more/back catalog buttons
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

//buy modal
$('#buyModal').on('show.bs.modal', function (event) {
	const button = $(event.relatedTarget) // Button that triggered the modal
	const itemName = button.data('whatever') // Extract info from data-* attributes
	var modal = $(this)
	modal.find('.modal-title-span').text(itemName);
});

$("input[name=phone]").mask("+7(999) 999-99-99");

//mailer
$('form').submit(function(e) {
	e.preventDefault();
	$.ajax({
		type: "POST",
		url: "mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('#callModal').modal('hide');
		$('#thanksModal').modal('show');

		$('form').trigger('reset');
	});
	return false;
});

//pageup button
$(window).scroll(function(){
	if ($(this).scrollTop() > 1600){
		$(".pageup").fadeIn();
	}else{
		$(".pageup").fadeOut();
	};
});

//smooth scrolling
$(function(){
	$("a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
			return false;
	});
});