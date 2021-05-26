// Add your custom javascript here
<script src="https://unpkg.com/isotope-layout@2/dist/isotope.pkgd.min.js"></script>

// Add your custom javascript here
$( document ).ready(function() {
    $('.cloud-smart .title-resources-link').sort(function(a, b) {
        if (a.textContent < b.textContent) {
          return -1;
        } else {
          return 1;
        }
    }).appendTo('body');
});

  
