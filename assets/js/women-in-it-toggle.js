jQuery(document).ready(function ($) {
    if ($('.ty-compact').length > 2) {
  $('.ty-compact:gt(1)').hide();
  $('.show-more').show();
}

$('.show-more').bind("keypress click", function() {
  $('.ty-compact:gt(1)').toggle();
  $(this).text() === 'Show all' ? $(this).text('Show less') : $(this).text('Show all');
});



});