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
                width: $button.css('width')
                // height: $button.css('height')
              });

              $content.addClass('no-transition');

              $button.click(function(){

                //Avoid weird moves
                $content.addClass('no-transition');
                $this.addClass('animating');

                //Reset position
                $content.css({
                  top: $button.offset().top - $(window).scrollTop(),
                  left: $button.offset().left,
                  width: $button.css('width'),
                  maxHeight: $button.css('height'),
                  opacity: 1
                });

                //Start animating
                $content.delay(100).queue(function(){
                  $content.removeClass('no-transition');
                  $this.addClass('active');
                  $content.height('');
                  $(this).dequeue();
                }).delay(500).queue(function(){
                  $this.addClass('open');
                  $this.removeClass('animating');
                  $(this).dequeue();
                });

                
              });

              $buttonClose.click(function(){
                $this.removeClass('active');
                $this.removeClass('open');
                $this.addClass('animating');

                //Reset position
                $content.css({
                  top: $button.offset().top - $(window).scrollTop(),
                  left: $button.offset().left,
                  width: $button.css('width'),
                  maxHeight: $button.css('height')
                });

                $content.delay(500).queue(function(){
                  $content.css('opacity', 0);
                  $this.removeClass('animating');
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

