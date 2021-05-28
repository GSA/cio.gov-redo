// Add your custom javascript here
$( document ).ready(function() {
    
    // sort the cards under cloud smart alphabetically
    var cloudSmartList = $('.cloud-smart .policies-container');
    var listitems = cloudSmartList.children('.policy');

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

  