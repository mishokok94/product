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

      //modal

      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    
    $('.button_mini').each(function(i) {
      $(this).on('click',function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })

      });



    function valideForms(form){
      $(form).validate({
        rules: {
  
              name : {
                  required: true,
                  minlength: 2
                    },
              phone : "required",
              email : {
                required: true,
                email: true
                      }
                    },

        messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("ВВедите {0} символа!")
                },              
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адресс почты"
                      }
               }
  
      });

    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-9999");
   
    });