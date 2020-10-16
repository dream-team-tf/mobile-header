$(window).scroll(function() {
  if (($(document).scrollTop() > 60) && ($(window).width() < 1399)) {
    $('header').addClass('fixed');
  }
  else {
    $('header').removeClass('fixed');
  }
});

$("#navSearch").click(function () {
	$(".searchContainer").addClass("open");
});
$(document).mouseup(function(e) 
{
	var containerS = $(".searchContainer");

	// if the target of the click isn't the container nor a descendant of the container
	if (!containerS.is(e.target) && containerS.has(e.target).length === 0) 
	{
	$(".searchContainer").removeClass("open");
	}
});

$("#navCart").click(function () {
	$(".cartContainer").addClass("open");
});
$(document).mouseup(function(e) 
{
	var containerC = $(".cartContainer");

	// if the target of the click isn't the container nor a descendant of the container
	if (!containerC.is(e.target) && containerC.has(e.target).length === 0) 
	{
	$(".cartContainer").removeClass("open");
	}
});

$("#navHam").click(function () {
$("header nav").toggleClass("open");
$("header .phoneContainer").toggleClass("open");
});


// category filter
$('.selectionGallery figure').on('click', function() {
	if($(this).hasClass('treadmill')) {
		console.log('treadmill')
		// write a map/forEach function
		// $('.categoryGallery .productContainer').addClass('hide')
		// if($('.categoryGallery .productContainer').hasClass('treadmill')) {
		// 	$('.categoryGallery .productContainer').addClass('chosen')
		// }
	}
})







