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


// category nav dropdown
$('header nav a').not('ul.navPhoneLinks a').hover(function() {
	$(this).css({'color': '#f8df29', 'text-decoration': 'underline', 'background': '#005589', 'padding': '7px'});

	if(!$('.headerWrapper').children().is('#categoryBox')) {
		var categoryNav = $(`
			<div id="categoryBox">
					<ul>
						<li>
							<h4>Dumbbells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
						<li>
							<h4>Kettlebells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
						<li>
							<h4>Dumbbells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
						<li>
							<h4>Kettlebells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
						<li>
							<h4>Dumbbells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
						<li>
							<h4>Kettlebells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
						<li>
							<h4>Dumbbells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
						<li>
							<h4>Kettlebells</h4>
							<ul>
								<li>Round</li>
								<li>Hex</li>
								<li>Virgin</li>
								<li>Neoprene</li>
							</ul>
						</li>
					</ul>

					<figure class="imgContainer"></figure>
				</div>

			`);

		$('.headerWrapper').append(categoryNav);
	}

	$('.headerWrapper #categoryBox').mouseleave(function() {
		$('.headerWrapper #categoryBox').remove();

		$('header nav a').css({'color': '#eaeaea', 'text-decoration': 'none', 'background': 'unset', 'padding': '7px 7px 7px 0'});
	});
});





// transparent header
// check if the current page is lottie.html
if(document.URL.includes('lottie')) {

	$(window).scroll(function() {
		if($(document).scrollTop() >= 150 && $(window).width() >= 1050) {

			$('header, header:before').addClass('transparent')
			// $('.headerWrapper, header').css('background', 'none')
		} else {
			$('header, header:before').removeClass('transparent')
			// $('.headerWrapper, header').css('background', '#083776')
		}
	});
}	




// shopping cart function
// product quantity function 
$('.desktopCart .quantityChange i').click(function() {

	// product quantity function
	if($(this).hasClass('fa-plus')) {
		var oldValue = $(this).closest('.itemContainer').find('h5.quantity').html(); 
		var newValue = parseFloat(oldValue) + 1;
		var num = $(this).closest('.itemContainer').find('h5.quantity').text(newValue);

		// price total function
		var priceOfItem = $('.totalContainer h4.total').closest('.desktopCart').find('.itemInfo h4.price');
		var newPrice = [];
		// var prices = priceOfItem.map(function() {
		// 	var price = parseFloat($(this).html().replace('$', ''));

		// 	for(i=0; i<price.length; i++) {
		// 		var quantity = price[i]*parseFloat($('.itemInfo .quantity')[i].innerHTML)
		// 		//push new values in
		// 		newPrice.push(quantity)

		// 		// return prices.push(quantity)
		// 	}
		// 		// return quantity;
		// });
		var prices = priceOfItem.map(function() {
			return $(this).html().replace('$', '');
		});
		console.log(newPrice)
		var subTotal = 0;
		for(i=0; i<prices.length; i++) {
			subTotal += parseFloat(prices[i]);
		}
		$('.totalContainer h4.total').text(subTotal);

	} else if($(this).hasClass('fa-minus')) {
			var oldValue = $(this).closest('.itemContainer').find('h5.quantity').html(); 
		if(oldValue > 0) {
			var newValue = parseFloat(oldValue) - 1;
			var num = $(this).closest('.itemContainer').find('h5.quantity').text(newValue);

			// price total function

		} else {
			newValue = 0;
		}
	}
});

// remove from cart function
$('.desktopCart .quantityChange .remove').click(function() {
	$(this).closest('.itemContainer').addClass('shrink').slideUp();
	setTimeout(function() {
		$('.itemContainer.shrink').remove()
	},300)
});

// price total function
var priceOfItem = $('.totalContainer h4.total').closest('.desktopCart').find('.itemInfo h4.price');

var prices = priceOfItem.map(function() {
	return $(this).html().replace('$', '');
});
var subTotal = 0;
for(i=0; i<prices.length; i++) {
	subTotal += parseFloat(prices[i]);
}


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

// banner slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].className += " active";
}
