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

              $content.css({
                top: $this.offset().top,
                left: $this.offset().left,
                width: $this.css('width'),
                height: $this.css('height')
              });

              $button.click(function(){
                
                
                // $content.css('visibility', 'visible');
                // $content.css({
                //   top: '',
                //   left: '',
                //   width: $this.css('width'),
                //   height: $this.css('height'),
                //   visibility: 'hidden'
                // });
                // $content.css({
                //   top: $this.offset().top,
                //   left: $this.offset().left
                // //   width: $button.css('width'),
                // //   height: $button.css('height'),
                // //   display: 'block'
                // });

                $content.css('opacity', 1);

                $content.delay(300).queue(function(){
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

                $content.delay(500).queue(function(){
                  $content.css('opacity', 0);
                  $(this).dequeue();
                });

              });

              // 
              // 

              // //Init
              // var minW = $button.css('width');
              // var maxW = $content.css('width');
              // var minH = $button.css('height');
              // var maxH = $content.css('height');

              // var posY = $this.offset().top;
              // var posX = $this.offset().left;


              // // $this.data('width-start', $button.css('width'));
              // // $this.data('width-finish', $content.css(
              // // $this.data('height-start', $button.css('height'));
              // // $this.data('height-finish', $content.css('height'));

              // //Set min height/width
              // $this.width(minW);              
              // $this.height(minH);

              // console.log(minH);

              // $button.click(function(){
              //   $button.hide();
              //   // $this.width(maxW);
              //   // $this.height(maxH);

              //   console.log(maxH);

              //   $this.css({
              //     width: maxW,
              //     height: maxH,
              //     top: 100,
              //     left: ($(window).width() / 2) - (parseInt(maxH) / 2)
              //   });
              // });

              // $buttonClose.click(function(){
              //   $button.show();
                
              //   $this.css({
              //     width: minW,
              //     height: minH,
              //     top: posY,
              //     left: posX
              //   });
              // });

              // $buttonClose.click();






              //console.log($this.data());


              //$this.data('width-start', $this.width());
          });
      }
  });
  
  //Auto Init
  $(document).ready(function(){
    $(".morphbutton").morphButton();
  });
  
}(jQuery));

// (function($){
//   $.fn.extend({
//       morphButton: function(options) {
//           this.defaultOptions = {};
//           var settings = $.extend({}, this.defaultOptions, options);

//           return this.each(function() {
//               var $this = $(this);
//           });
//       }
//   });

//   //Auto Init
//   $(document).ready(function(){

//     $(".morphButton").morphButton();
//   });
// })(jQuery);