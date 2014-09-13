'use strict';

(function($) {
  $(document).ready(function() {
    $('.col').click(function() {
      if ($(this).hasClass('col1')) {
        $('#container').css('left', '0px')
      }
      else if ($(this).hasClass('col2')) {
        $('#container').css('left', '-25%')
      }
      else if ($(this).hasClass('col3')) {
        $('#container').css('left', '-50%')
      }
      else if ($(this).hasClass('col4')) {
        $('#container').css('left', '-75%')
      };

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('#container').css('left', '0px');
      }
      else {
        $('.active').removeClass('active');
        $(this).addClass('active');
      };
    });
  });
})(jQuery);
