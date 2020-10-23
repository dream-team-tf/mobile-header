$(window).scroll(function() {
  if (($(document).scrollTop() > 1) && ($(window).width() > 1399)) {
    $('header').addClass('fixed');
    $("#navHam").addClass("slower");
  }
  else {
    $('header').removeClass('fixed');
    $('header').removeClass('extend');
	  $("header").removeClass("closed");
    $("#navHam").removeClass("slower");
    $("header nav").removeClass("open");
  }
});

$("#navHam").click(function () {
	$("header").toggleClass("extend");
	$("header nav").toggleClass("open");
	$("header").toggleClass("closed");
});

$('header').mouseover(function() {
	if (($(window).width() > 1399) && (!$('header').hasClass( "closed" ))) {
		$("header.fixed").addClass("extend");
		$("header.fixed nav").addClass("open");
	}
});
$('header').mouseout(function() {
	if (($(window).width() > 1399)) {
		$("header.fixed").removeClass("extend");
		$("header.fixed nav").removeClass("open");
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



// transparent header
// track when the top of the header passes #bodyContent
// $(window).scroll(function() {
// 	if($('header').scrollTop() > )
// })




// shopping cart function
// product quantity function 
$('.desktopCart .quantityChange i').click(function() {

	if($(this).hasClass('fa-plus')) {
		var oldValue = $(this).closest('.itemContainer').find('h5.quantity').html(); 
		var newValue = parseFloat(oldValue) + 1;
		var num = $(this).closest('.itemContainer').find('h5.quantity').text(newValue);

	} else {
			var oldValue = $(this).closest('.itemContainer').find('h5.quantity').html(); 
		if(oldValue > 0) {
			var newValue = parseFloat(oldValue) - 1;
			var num = $(this).closest('.itemContainer').find('h5.quantity').text(newValue);
		} else {
			newValue = 0;
		}
	}
});
// price total function
// var priceOfItem = $('.totalContainer h4.total').closest('.desktopCart').find('.itemInfo h4.price');
// var price = priceOfItem.replace('$', '')
// var total = (parseFloat(priceOfItem[0].innerHTML) + parseFloat(priceOfItem[1].innerHTML) )*1.13



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