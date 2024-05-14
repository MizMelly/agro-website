function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
      toTopBtn.classList.add('show');
    } else {
      navbar.classList.remove('navbar-sticky');
      toTopBtn.classList.remove('show');
    }
  });
}


// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
document.querySelector('#to-top').addEventListener('click', scrollToTop);


var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;
$(".carousel-control-next").on("click", function () {
  if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
    scrollPosition += cardWidth;  //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
  }
});
$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});
var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  //rest of the code
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
  interval: false,
  wrap: false,
});
scrollPosition += cardWidth * 3;