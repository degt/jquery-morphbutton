(function($){    
  
  $.fn.extend({
      morphButton: function(options) {

          this.defaultOptions = {};
          var settings = $.extend({}, this.defaultOptions, options);

          return this.each(function() {
              var $this = $(this);
              var $button = $this.find('button.morphbutton-open');
              var $buttonClose = $this.find('button.morphbutton-close');
              var $content = $this.find('.morphbutton-content');

              //Setup position
              $content.css({
                top: $this.offset().top,
                left: $this.offset().left,
                width: $button.css('width'),
                height: $button.css('height')
              });

              $content.addClass('no-transition');

              $button.click(function(){
          
                //Avoid weird moves
                $content.addClass('no-transition');

                //Reset position
                $content.css({
                  top: $this.offset().top,
                  left: $this.offset().left,
                  width: $button.css('width'),
                  height: $button.css('height'),
                  opacity: 1
                });

                //Start animating
                $content.delay(300).queue(function(){
                  $content.removeClass('no-transition');
                  $this.addClass('active');
                  $(this).dequeue();
                }).delay(500).queue(function(){
                  $this.addClass('open');
                  $(this).dequeue();
                });

                
              });

              $buttonClose.click(function(){
                $this.removeClass('active');
                $this.removeClass('open');

                //Reset position
                $content.css({
                  top: $this.offset().top,
                  left: $this.offset().left,
                  width: $button.css('width'),
                  height: $button.css('height')
                });
                
                $content.delay(500).queue(function(){
                  $content.css('opacity', 0);
                  $(this).dequeue();
                });

              });

          });
      }
  });
  
  //Auto Init
  $(document).ready(function(){
    $(".morphbutton").morphButton();
  });
  
}(jQuery));

