var COL_1_CLICKS = 1;

if ($(window).width() < 797) {
	$(".quotes h2").css("margin-left", ("0%"));
	$(".face img").css("width", "150");
	$(".face img").css("height", "228");
	$(".face img").css("margin-left", "-75px");
	$(".face img").css("margin-top", "-114px");
	};

$(document).ready(function() {
	$(".face").click( function() {
		for(i = 1; i <= 12; i++) {
			if (COL_1_CLICKS == i) {
				$(".quotes h2:nth-child(" + i + ")").fadeIn(10);
			}
		}
		COL_1_CLICKS++;
		});
	//top text floats in and out
	$("h4").css("transform", "translate(1650px, 0px)");
	});

