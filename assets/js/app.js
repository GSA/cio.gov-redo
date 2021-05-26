// Add your custom javascript here
$( document ).ready(function() {

    $('.cloud-smart .title-resources-link').sort(function(a, b) {
        if (a.textContent < b.textContent) {
          return -1;
        } else {
          return 1;
        }
    }).appendTo('.cloud-smart .policies');
    
});

  