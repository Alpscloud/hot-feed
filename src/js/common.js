document.addEventListener('DOMContentLoaded', function() {
	var words = document.querySelector('.title-words');

	if(words) {
		var index = 0;
		
		function changer() {
			var wordsArr = [words.getAttribute('data-first-words'), words.getAttribute('data-second-words'), words.getAttribute('data-third-words')];
			index++;
			
			if(index <= 2) {
				words.innerHTML = wordsArr[index];

				setTimeout(changer, 1000);
			} else {
				index = 0;
				words.innerHTML = wordsArr[index];

				setTimeout(changer, 1000);

			}


		}

		changer();


	}
});