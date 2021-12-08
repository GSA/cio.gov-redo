// Add your custom javascript here
// Add Jquery onload to hide child items
//Will work on expanding the selected items


$( document ).ready(function() {
    var link = window.location.href;
   
 // adding usa-current based on the url of the parent
     $( "ul[class^='usa-sidenav__sublist']" ).hide();
     $( "ul[id^='grandchild-sub-nav-list']" ).hide();
     
     if(link.indexOf("cio-responsibilities") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-3').show();
        $('#href-list-3').removeClass('usa-sidenav__item').addClass('usa-current');
     }
     if(link.indexOf("it-laws") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-4').show();
     }
     if(link.indexOf("other-it-authorities") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-5').show();
     }
     if(link.indexOf("key-stakeholders") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-6').show();
     }
     if(link.indexOf("key-organizations") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-7').show();
     }
     if(link.indexOf("policies-initiatives") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-8').show();
     }
     if(link.indexOf("/reporting/") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-9').show();
     }

     if(link.indexOf("additional-resources") != -1 && link.indexOf("?clickEvt") != -1){
         $('#sub-nav-list-11').show();
     }
 
     if(link.indexOf("/cio-responsibilities/it-leadership-and-accountability/") != -1){
         $('#grandchild-sub-nav-list-1').show();
     }
     if(link.indexOf("/cio-responsibilities/it-strategic-planning/") != -1){
         $('#grandchild-sub-nav-list-2').show();
     }
     if(link.indexOf("/cio-responsibilities/it-workforce/") != -1){
         $('#grandchild-sub-nav-list-3').show();
     }
     if(link.indexOf("/cio-responsibilities/it-budgeting/") != -1){
         $('#grandchild-sub-nav-list-4').show();
     }
     if(link.indexOf("/cio-responsibilities/it-investment-management/") != -1){
         $('#grandchild-sub-nav-list-5').show();
     }
     if(link.indexOf("/cio-responsibilities/information-security-and-privacy/") != -1){
         $('#grandchild-sub-nav-list-6').show();
     }
     if(link.indexOf("/cio-responsibilities/architecture/") != -1){
         $('#grandchild-sub-nav-list-7').show();
     }
     if(link.indexOf("/cio-responsibilities/information-resources-and-data/") != -1){
         $('#grandchild-sub-nav-list-8').show();
     }
     
 });
 
 
    //This  code makes the parent selected link usa-current on Cloud Infrastructure
    $(document).ready(function (e) {
        
        $('.infrastructure-nav > li > a').click(function(){
        
        if ($(this).attr('class') != 'usa-current'){
            $('.infrastructure-nav li ul').slideUp();
            $(this).next().slideToggle();
            $('.infrastructure-nav li ul').show();
            $('.infrastructure-nav li a').removeClass('usa-current');
        }
        $(this).addClass('usa-current');
        });
    });

 //This  code makes the parent selected link usa-current on handbook subnav
    $(document).ready(function (e) {
     $('.usa-sidenav > li > a').click(function(){

        if(!$(this).closest('.infrastructure-nav').length) {
            $(this).next().slideToggle();
            $('.usa-sidenav li a').removeClass('usa-current');

            $(this).addClass('usa-current');
            if ($( this ).attr('id') == 'parent-href-list-1' || $( this ).attr('id') == 'parent-href-list-2' || $( this ).attr('id') == 'parent-href-list-10' ){

            }else {
                return false;
            }
        }
     });
   });
   $(document).ready(function (e) {
  
     $('.usa-sidenav > li > ul > li > a').click(function(){

       var gchild=2;
       
       if($( this ).parent().children(':nth-child('+gchild+')').attr('id').indexOf("grandchild") != -1){

         $( "ul[id^='grandchild-sub-nav-list']" ).hide();
         // open the corresponding ul for the grandchild 
         $( this ).parent().children(':nth-child('+gchild+')').show();
        
         return false;
       }else{

       }
       //return false;
     });
 
     
   });
 