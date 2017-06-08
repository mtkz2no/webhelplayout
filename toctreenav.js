$(document).ready(function(){
 $("nav li").each(function(){
  if($(this).children('ul').length){
   $(this).prepend('<i/>');
  } else {
   $(this).prepend('<i class="none"/>');
  }
 });

 $('nav i').click(function(){
  $(this).toggleClass('collapsed');
 });
});
