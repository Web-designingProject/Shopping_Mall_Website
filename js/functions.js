/*-------------Go To Top-----------------*/
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()>=60){
              $("#g_t_t").fadeIn();  
            }
            else{
                $("#g_t_t").fadeOut();
            }
        });
        
        $("#g_t_t").click(function(e){
            $("body,html").animate({
               "scrollTop":"0"
            });
            e.preventDefault();
        })
    })
/*-----Initialize Swiper--- */
new WOW().init();
/*-----Initialize Swiper--- */
var swiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
             autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
       
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  autoplay: true,
    prevArrow: null,
    nextArrow: null,
  slidesToShow: 5,
  responsive: [
    
      {
      breakpoint: 1217,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
      
      {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

var myGallery = new FgGallery('.fg-gallery', {
    cols: 4,
    style: {
      border: '10px solid #fff',
      height: '180px',
      boxShadow: '0 2px 10px -5px #000'
    }
});

/*----------------Accordion---------------*/

