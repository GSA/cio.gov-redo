// Grab the .courses container
var $container = $('.policies');

var $policies = $($container).isotope({
    // options
    itemSelector: '.policy',
    layoutMode: 'masonry'
});

// filter items on button click
$('.filter-list a').on('click', function() {
    if ( $(this).hasClass('checked')) {
        $(this).removeClass('checked');
        $container.isotope({ filter: '*'} );
    } else {
        $('.filter-list a').removeClass('checked');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        $(this).addClass('checked');
    }

});
