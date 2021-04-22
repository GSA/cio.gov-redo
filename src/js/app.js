// Add your custom javascript here
// Add Jquery onload to hide child items
//Will work on expanding the selected items


$( document ).ready(function() {
    
   var link = window.location.href;
  
// adding usa-current based on the url of the parent
    $( "ul[class^='usa-sidenav__sublist']" ).hide();
    if(link.indexOf("cio-responsibilities") != -1){
        $('#sub-nav-list-1').show();
        $('#href-list-1').removeClass('usa-sidenav__item').addClass('usa-current');
        $( "ul[id^='grandchild']" ).show();
    }
    if(link.indexOf("it-laws") != -1){
        $('#sub-nav-list-2').show();
        $('#href-list-2').removeClass('usa-sidenav__item').addClass('usa-current');
    }
    if(link.indexOf("other-it-authorities") != -1){
        $('#sub-nav-list-3').show();
        $('#href-list-3').removeClass('usa-sidenav__item').addClass('usa-current');
    }
    if(link.indexOf("key-stakeholders") != -1){
        $('#sub-nav-list-4').show();
        $('#href-list-4').removeClass('usa-sidenav__item').addClass('usa-current');
    }
    if(link.indexOf("key-organizations") != -1){
        $('#sub-nav-list-5').show();
        $('#href-list-5').removeClass('usa-sidenav__item').addClass('usa-current');
    }
    if(link.indexOf("policies-initiatives") != -1){
        $('#sub-nav-list-6').show();
        $('#href-list-6').removeClass('usa-sidenav__item').addClass('usa-current');
    }
    if(link.indexOf("/reporting/") != -1){
        $('#sub-nav-list-7').show();
        $('#href-list-7').removeClass('usa-sidenav__item').addClass('usa-current');
    }
    if(link.indexOf("rep-calendar") != -1){
        $('#sub-nav-list-8').show();
        $('#href-list-8').removeClass('usa-sidenav__item').addClass('usa-current');
    }
    if(link.indexOf("dditional-resources") != -1){
        $('#sub-nav-list-9').show();
        $('#href-list-9').removeClass('usa-sidenav__item').addClass('usa-current');
    }

});
//This  code makes the parent selected link usa-current
 $(document).ready(function (e) {
    $('.usa-sidenav > li > a').click(function(){
      if ($(this).attr('class') != 'usa-current'){
       // $('.usa-sidenav li ul').slideUp();
        $(this).next().slideToggle();
      // $('.usa-sidenav li ul').show();
        $('.usa-sidenav li a').removeClass('usa-current');
        $(this).addClass('usa-current');
        return false;
      }
    });

  });
