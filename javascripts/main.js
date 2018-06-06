$(document).ready(function() {

    // typing animation
    (function($) {
      $.fn.writeText = function(content) {
          var contentArray = content.split(""),
              current = 0,
              elem = this;
          setInterval(function() {
              if(current < contentArray.length) {
                  elem.text(elem.text() + contentArray[current++]);
              }
          }, 80);
      };
      
    })(jQuery);
  
    // Animated Text 
    $("#holder").writeText("FULL-STACK SOFTWARE DEVELOPER");


    // Initialize wow.js
    new WOW().init()

    // Push body and nav over by 285px
    var main = function() {
        $('.fa-bars').click(function() {
          $('.nav-screen').animate({
            right: "0px"
          }, 200);
    
          $('body').animate({
            right: "285px"
          }, 200);
        });
    
        // Then push them back */
        $('.fa-times').click(function() {
          $('.nav-screen').animate({
            right: "-285px"
          }, 200);
    
          $('body').animate({
            right: "0px"
          }, 200);
        });
    
        $('.nav-links a').click(function() {
          $('.nav-screen').animate({
            right: "-285px"
          }, 500);
    
          $('body').animate({
            right: "0px"
          }, 500);
        });
      };
    
      $(document).ready(main);

    

    

    // Set up full page scroll
    $('#fullpage').fullpage({
        scrollBar: true,
        responsiveWidth: 400,
        navigation: false,
        navigationTooltips: ['home', 'about'],
        anchors: ['home', 'about'],
        menu: '#menu',
        fitToSection: false,

        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            if (index == 1){
                $('.fa-chevron-down').each(function(){
                    $(this).css('opacity', '1')
                })
                $('.header-links a').each(function(){
                    $(this).css('color', 'white')
                })
                $('.header-links').css("background-color", "transparent");
            }
            
            else if (index != 1){
                $('.header-links a').each(function(){
                    $(this).css('color', 'black')
                })
                $('.header-links').css('background-color', 'transparent');
            }
        }  
    })

    // Move down one section
    $(document).on('click', '#moveDown', function(){
        $.fn.fullpage.moveSectionDown();
    })


    // fullpage.js link navigation
    $(document).on('click', '#skills', function(){
        $.fn.fullpage.moveTo(2);
    });

    $(document).on('click', '#projects', function(){
        $.fn.fullpage.moveTo(3);
    });

    $(document).on('click', '#contact', function(){
        $.fn.fullpage.moveTo(4);
    });


    //Smooth scrolling
    $(function() {
        $('a[href*=#]:not([href=#])').click(function(){
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            && location.hostname == this.hostname) { 
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
                if (target.lenght) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 700);
                    return false
                }
            }
        })
    })
   
    









})