 $(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        autoplay: false,
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
     
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        // let btn = $(this);
        // btn.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active');
        // let target = btn.attr('data-target');
        // $('div.catalog__content').removeClass('catalog__content_active');
        // $('#' + target).addClass('catalog__content_active');
      });

/*       $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          
        })
      })

      
      
      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          
        })
      }) */

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            
          })
        });

      };
      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');

  });

  
