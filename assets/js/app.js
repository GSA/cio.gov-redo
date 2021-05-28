// Add your custom javascript here
{/* <script src="https://unpkg.com/isotope-layout@2/dist/isotope.pkgd.min.js"></script> */}

$( document ).ready(function() {
    
    // sort the cards under cloud smart alphabetically
    var cloudSmartList = $('.cloud-smart .policies-container');
    var listitems = cloudSmartList.children('.policy-card');

    listitems.sort(function(a, b) {
    if (a.textContent < b.textContent) {
        return -1;
    } else {
        return 1;
    }
    });
    listitems.appendTo(cloudSmartList);


    // add the count of the cards
    var cardsCount = listitems.length;
    $('.cloud-smart .filter-count').html(cardsCount + " ITEMS");
});

  