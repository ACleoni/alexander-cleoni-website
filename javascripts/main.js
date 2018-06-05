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


    $('#fullpage').fullpage({
        scrollbar: true,
        responsiveWidth: 400,
        navigation: true,
        navigationTooltips: [
            'home',
            'about',
            'project',
            'contact',
            'connect'
        ],
        menu: '#menu',
        fitToSection: false,

        afterLoad: function(anchorLink, Index){
            var loadedSection =$(this);

            if (index==1){
                $('.fa-chevron-down').each(function(){
                    $(this).css('opacity', '1')
                })
                $('/header-links a').each(function(){
                    $(this).css('color', 'white')
                })
                $('.header-links').css("back-ground-color", "transparent");
            }
        }
        
    })
    









})