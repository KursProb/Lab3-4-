 $(document).ready(function(){
    $("#footer-navigation, #headerId").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

 $('.review-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  fade: true,
  speed: 300,
  asNavFor: '.review-photo'
});
$('.review-photo').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  asNavFor: '.review-text',
  arrows: true,
  speed: 300,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false
      }
    }
  ]
});

$(document).ready(function(){
    $("body").scrollspy({
    target: "#myNavbar"
  }) 
});

function isVisible(elem) {

      var coords = elem.getBoundingClientRect();

      var windowHeight = document.documentElement.clientHeight;

      // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      return topVisible || bottomVisible;
}

var fixedHeader = document.getElementById('myNavbar');
var header = document.getElementById('headerId');
var headerBottom = header.getBoundingClientRect().bottom + window.pageYOffset - 1;
var bounce = document.getElementById('bounce');

window.onscroll = function() {

  if (fixedHeader.classList.contains('navbar-fixed-top') && window.pageYOffset < headerBottom) {
    fixedHeader.classList.remove('navbar-fixed-top');
  } else if (window.pageYOffset > headerBottom) {
    fixedHeader.classList.add('navbar-fixed-top');
  }
  
  if (isVisible(bounce)) {
    bounce.classList.add('animate');
  }
};


