$(document).ready(function(){
  
    //ay 3onsor ast5domo marten fe jqury  a3mlo cash
    var myheader=$('.header');
     myheader.height($(window).height());
    $(window).resize(function(){
         myheader.height($(window).height());
        
        
    });
    //add active class
    $('.ul_links li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    
    var select = document.getElementById("selectDepartment");
var options = ["IS", "CS", "Designer", "Developer", "Engineer"];
for(var i = 0; i < options.length; i++)
{
    var opt = options[i];
    var element = document.createElement("option");
    element.textContent = opt;
    element.value = opt;
    select.appendChild(element);
}
    
   
     $('.fe').click(function(){
                           $('html ,body').animate({
               scrollTop: $('#features').offset().top
                
            },1000);
                           
                           });
            
            $('.wo').click(function(){
                           $('html ,body').animate({
               scrollTop: $('#work').offset().top
                
            },1000);
                           
                           });
            
             $('.te').click(function(){
                           $('html ,body').animate({
               scrollTop: $('#team').offset().top
                
            },1000);
                           
                           });
             $('.co').click(function(){
                           $('html ,body').animate({
               scrollTop: $('#contact').offset().top
                
            },1900);
                           
                           });
           
});