/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

const carouselText = ["deck", "fire pit", "patio", "outdoor kitchen", "screened porch", "pergola", "balcony"]
  
  $( document ).ready(async function() {
	carousel(carouselText, "#feature-text")
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
	const letters = sentence.split("");
	let i = 0;
	while(i < letters.length) {
	  await waitForMs(delay);
	  $(eleRef).append(letters[i]);
	  i++
	}
	return;
  }
  
  async function deleteSentence(eleRef) {
	const sentence = $(eleRef).html();
	const letters = sentence.split("");
	let i = 0;
	while(letters.length > 0) {
	  await waitForMs(100);
	  letters.pop();
	  $(eleRef).html(letters.join(""));
	}
  }
  
  async function carousel(carouselList, eleRef) {
	  var i = 0;
	  while(true) {
		await typeSentence(carouselList[i], eleRef);
		await waitForMs(1500);
		await deleteSentence(eleRef);
		await waitForMs(500);
		i++
		if(i >= carouselList.length) {i = 0;}
	  }
  }
  
  function waitForMs(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
  }
