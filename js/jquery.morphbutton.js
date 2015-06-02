(function($){    
  
  $.fn.extend({
      morphButton: function(options) {

          this.defaultOptions = {};
          var settings = $.extend({}, this.defaultOptions, options);
          
          return this.each(function() {
              new MorphButton(this, options);
          });
      }

  });

  var MorphButton = function(element, options){
    this.$el = $(element);
    
    //Options and Default
    var defaults = {}
    this.options = $.extend(defaults, options);

    //init
    this.init();
  }

  MorphButton.prototype = {
    //Initialization
    init:function(){

      var morphbutton = this;
          morphbutton.target = $($(this.$el).data('target'));
          morphbutton.button = $(this.$el);
          morphbutton.buttonClose = morphbutton.target.find('.morphbutton-close');

      morphbutton.button.click(function(evt){
        morphbutton.open();
        return false;
      });

      morphbutton.buttonClose.click(function(evt){
        morphbutton.close();
        return false;
      });
    },
    action:function(){
      
      var $button = this.button;
      var $target = this.target;

      this.target.toggleClass('active');
      
      this.target.css({
        top:          $button.offset().top - $(window).scrollTop(),
        left:         $button.offset().left - $(window).scrollLeft(),
        width:        $button.css('width'),
        maxHeight:    $button.css('height')
      });

      if($target.hasClass('active')){
        $target.addClass('open');
        $button.css('opacity', 0);
      }


      $('body').delay(500).queue(function(){
        $('body').toggleClass('morphbutton-modal-active');

        if(!$target.hasClass('active')){
          $target.removeClass('open');
          $button.css('opacity', 1);
        }

        $(this).dequeue();
      });

    },
    open:function(){
      var $button = this.button;
      var $target = this.target;

      $target.css({
        top:          $button.offset().top - $(window).scrollTop(),
        left:         $button.offset().left - $(window).scrollLeft(),
        width:        $button.css('width'),
        maxHeight:    $button.css('height'),
        opacity:      1,
        transition:   'none'
      });

      $('body').css('overflow', 'hidden');

      $('body').delay(10).queue(function(){
        $target.css('transition', '');
        $(this).dequeue();
      });

      $('body').delay(100).queue(function(){
        $button.css('opacity', 0);
        $('body').addClass('morphbutton-modal-active');
        $target.addClass('active');
        $(this).dequeue();
      }); 

      $('body').delay(1000).queue(function(){
        $('body').css('overflow', '');
        $(this).dequeue();
      }); 

    },
    close:function(){
      var $button = this.button;
      var $target = this.target;

      $target.css({
        top:          $button.offset().top - $(window).scrollTop(),
        left:         $button.offset().left - $(window).scrollLeft(),
        width:        $button.css('width'),
        maxHeight:    $button.css('height')
      });

      $('body').css('overflow', 'hidden');
      $('body').removeClass('morphbutton-modal-active');
      $target.removeClass('active');


      $('body').delay(500).queue(function(){
        $target.css('opacity', 0);
        $button.css('opacity', 1);
        $(this).dequeue();
      }); 

      $('body').delay(700).queue(function(){
        $('body').css('overflow', '');
        $(this).dequeue();
      }); 
    }

  }
  
  //Auto Init
  $(document).ready(function(){
    $(".morphbutton").morphButton();
  });
  
}(jQuery));

