$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        /* autoplay: true,
        autoplaySpeed: 4000, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/layers/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/layers/right.png"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
            arrows: false, 
            dots: true
            }
        
             }
            ]
      });
  });
                  