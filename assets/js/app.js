// Add your custom javascript here
$( document ).ready(function() {
    
    var cloudSmartList = $('.cloud-smart .policies');
    var listitems = cloudSmartList.children('.policy');

    listitems.sort(function(a, b) {
    if (a.textContent < b.textContent) {
        return -1;
    } else {
        return 1;
    }
    });
    listitems.appendTo(cloudSmartList);

});

  