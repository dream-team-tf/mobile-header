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
		$("#navHam").removeClass("disable");
  }
});

$("#navHam").click(function () {
	$("header").addClass("extend");
	$("header nav").addClass("open");
	$("#navHam").addClass("disable");
});

$('header').mouseover(function() {
	$("header").addClass("extend");
	$("header nav").addClass("open");
	$("#navHam").addClass("disable");
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