var COL_1_CLICKS = 1;
if ($(window).width() < 797) {
	$(".face").css("width", "150px");
	$(".face").css("height", "228px");
	};
$(document).ready(function() {
	$(".face").click( function() {
		//TODO make the "12" below a length value
		for(i = 1; i <= 12; i++) {
			if (COL_1_CLICKS == i) {
				$(".quotes .column1 h2:nth-child(" + i + ")").fadeIn(10);
			}
		}
//		else if (clicks == 1) {
//			$(".quotes .column1 h2:nth-child(" + 2 + ")").fadeIn(10);
//		}
//		else if (clicks == 2) {
//			$(".quotes .column1 h2:nth-child(" + 3 + ")").fadeIn(10);
//		}
		COL_1_CLICKS++;
		});
	//top text floats in and out
	$("h4").css("transform", "translate(1650px, 0px)");
	});

