

/* ********************** header scroll ******************************** */
 $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 90) {
                $(".header").addClass("header_top");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("header_top");
            }
        });
    });
/* ********************** header scroll end******************************** */


function myFunction(x) {
      x.classList.toggle("change");
    }

    $(".togglerBtn").click(function(e) {
            e.preventDefault();
            // $(".sidebare").toggleClass("active");
            $("body").toggleClass("addbody");
    });




$('.owl-carousel1').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:true,
    arrows:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$('.owl-carousel2').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:true,
    arrows:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$('.owl-carousel3').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:true,
    arrows:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$('.owl-carousel4').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:true,
    arrows:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$('.videoslider').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:true,
    arrows:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.imageslider').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    nav:true,
    arrows:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})