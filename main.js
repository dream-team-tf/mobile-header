$(window).scroll(function() {
  if (($(document).scrollTop() > 1) && ($(window).width() > 1399)) {
    $('header').addClass('fixed');
    $("#navHam").addClass("slower");
  }
  else {
    $('header').removeClass('fixed');
    $('header').removeClass('extend');
    $("#navHam").removeClass("slower");
        $("header nav").removeClass("open");
  }
});

 

$("#navHam").click(function () {
    $("header").toggleClass("extend");
    $("header nav").toggleClass("open");
});

 

$('header').mouseover(function() {
    if (($(window).width() > 1399)) {
        $("header.fixed").addClass("extend");
        $("header.fixed nav").addClass("open");
    }
});
$('header').mouseout(function() {
    if (($(window).width() > 1399)) {
        $("header").removeClass("extend");
        $("header nav").removeClass("open");
    }
});
$(document).mouseup(function(e) 
{
	var containerS = $("header nav");

	// if the target of the click isn't the container nor a descendant of the container
	if (!containerS.is(e.target) && containerS.has(e.target).length === 0) 
	{
		$("header").removeClass("extend");
		$("header nav").removeClass("open");
		$("#navHam").removeClass("disable");
	}
});

$("#navSearch").click(function () {
	$(".searchContainer").addClass("open");
	$("#navSearch").addClass("disable");
});
$(document).mouseup(function(e) 
{
	var containerS = $(".searchContainer");

	if (!containerS.is(e.target) && containerS.has(e.target).length === 0) 
	{
		$(".searchContainer").removeClass("open");
		$("#navSearch").removeClass("disable");
	}
});

$("#navCart").click(function () {
	$(".cartContainer").addClass("open");
	$("#navCart").addClass("disable");
});
$(document).mouseup(function(e) 
{
	var containerC = $(".cartContainer");

	if (!containerC.is(e.target) && containerC.has(e.target).length === 0) 
	{
		$(".cartContainer").removeClass("open");
		$("#navCart").removeClass("disable");
	}
});

// math cart function
$('.desktopCart .quantityChange i').on('click', function() {
	var clicked = $(this).attr('class')

	if(clicked.has('fa-plus')) {
		console.log('plus') 
	} else {
		console.log('minus')
	}
})



// category filter
$('.upperBox figure').on('click', function() {
	var category = $(this).attr('class');
	var products = $('.productContainer');

	// for(i=0; i<products.length; i++) {
	// 	var product = products[i];
	// 	// console.log(products[i])
	// 	// products[i].addClass('chosen').filter(':not(category)').removeClass('chosen')

	// }
	var filter = products.filter(products.classList.contains('treadmill'))
	console.log(filter)
})