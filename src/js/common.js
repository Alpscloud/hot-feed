$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	var words = $('.title-words');

	if(words.length > 0) {
		var index = 0;
		
		function changer() {
			var wordsArr = [words.attr('data-first-words'), words.attr('data-second-words'), words.attr('data-third-words')];
			index++;
			
			if(index <= 2) {
				words.text(wordsArr[index]);

				setTimeout(changer, 1000);
			} else {
				index = 0;
				words.text(wordsArr[index]);

				setTimeout(changer, 1000);

			}


		}

		changer();
	}
	

	


});
