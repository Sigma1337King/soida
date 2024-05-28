var TrandingSlider = new Swiper('.tranding-slider', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	slidesPerView: 'auto',
	coverflowEffect: {
	  rotate: 0,
	  stretch: 0,
	  depth: 100,
	  modifier: 2.5,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	preventClicks: true,
	on: {
	  slideChange: function () {
		var currentSlide = this.slides[this.activeIndex];
		var imgSrc = currentSlide.querySelector('img').getAttribute('src'); // Используем getAttribute('src')
		var button = document.getElementById('service-button');
		switch (imgSrc) {
		  case 'img/manicure.jpg':
			button.href = 'dtp.html';
			break;
		  case 'img/haircut.jpg':
			button.href = 'uslugi/haircut.html';
			break;
		  case 'img/tattoo.jpg':
			button.href = 'uslugi/tattoo.html';
			break;
		  case 'img/brows.jpg':
			button.href = 'uslugi/brows.html';
			break;
		  case 'img/makeup.jpg':
			button.href = 'uslugi/makeup.html';
			break;
		  default:
			button.href = '#';
		}
	  },
	},
  });
  
  