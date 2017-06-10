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
 $('#showleft').click(function(){
  var left = $('#left');
  if(left.css('display')=='none') {
   left.removeClass('show');
   left.toggleClass('show');
   $('#hideleft')
    .toggleClass('show');
  }
 });
 $('#hideleft').click(function(){
  $('#left, #hideleft')
   .removeClass('show');
 });
});