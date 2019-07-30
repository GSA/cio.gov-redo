jQuery(document).ready( function($) {


// Grab the .policies container
var $container = $('.policies');

var $policies = $($container).isotope({
    // options
    itemSelector: '.policy',
    layoutMode: 'masonry',

    getSortData: {
      name: 'h2',
      date: 'p'
    }
});


// Sort based on various factors
$('.sort').on('click', function() {
    if ( $(this).hasClass('checked')) {
        $(this).removeClass('checked');
        $container.isotope({ sortBy: 'original-order' } );
    } else {
        $('.sort').removeClass('checked');
        var sortValue = $(this).attr('data-sort-value');
        $container.isotope({ sortBy: sortValue });
        $(this).addClass('checked');
    }
});

// Array to store filter from each group.
  var filters = {};

  $('.filter-list a').on('click', function() {
      // Get navigation group (subject or author) as object.
      var $navGroup = $(this).parents('.filter-list');
      // Get data-filter-group attribute for current nav group.
      var filterGroup = $navGroup.attr('data-filter-group');

      // If button is already active (checked):
      if ( $(this).hasClass('checked')) {
          $(this).removeClass('checked');
          // Reset array entry with filterGroup as key.
          filters[ filterGroup ] = '*';
      } else {
          // Find any checked buttons in the current filter group
          // and remove .checked class.
          $navGroup.find('a').removeClass('checked');
          // Set array entry with filterGroup as key to current data-filter value.
          filters[ filterGroup ] = $(this).attr('data-filter');
          $(this).addClass('checked');
      }
      // Grab concatenated filter values via concatenateValues function.
      var filterValue = concatenateValues( filters );
      // Run the filter.
      $container.isotope({ filter: filterValue });
  });



  // Concatenate values from array to a single string.
  function concatenateValues( object ) {
      var values = "";
      for ( var value in object ) {
          values += object[value];
      }
      return values;
  }

});
