var openMenu=document.querySelector("#openMenu");
var navbar=document.querySelector("header ul");
openMenu.addEventListener(
    "click", function(){
        navbar.classList.toggle('open');
    }
)

 $(document).ready(
    function(){
        $('.row2-fiveth-container ').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
        dots:true
      }
    },
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	  ]
});
    }
)


	
