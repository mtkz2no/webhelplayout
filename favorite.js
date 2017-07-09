$(loadFavorites);

function loadFavorites() {
 var st = window.localStorage;

 $('h1,h2,h3,h4,h5')
  .append(' <i class="favbtn" />');

 $('.favbtn').on('click',
  function(){
   var btn = $(this);
   btn.toggleClass('favorite');

   var h = $(this).parent();
   var id = '#' + h.attr('id');

   if(btn.hasClass('favorite')) {
    st.setItem(id, h.text());
   } else {
    st.removeItem(id);
   }
   updateFavorites();
  });

 //var v = st.getItem('favorites');
 //var ls = JSON.parse(v);
 updateFavorites();
}

function updateFavorites(){
 var st = window.localStorage;

 var parent = $('#favorites > ul');
 $('#favorites .unfavor')
  .off('click');
 parent.empty();

 for(var i=0;i<st.length;i++) {
  var key = st.key(i);
  addTo(parent, key, st.getItem(key));
  var btn = $(key + ' > .favbtn');
  if(!btn.hasClass('favorite')) {
   btn.addClass('favorite');
  }
 }
 
 $('#favorites > .collapsed')
  .toggleClass('collapsed');

 $('#favorites .unfavor')
  .on('click', function() {
   var id = $(this).prev()
    .attr('href');
   //alert(id);
   st.removeItem(id);
   $(id + ' .favorite')
    .toggleClass('favorite');
   //a.parent().remove();
   updateFavorites();
  });
}

function addTo(target, id, text) {
 var st = window.localStorage;

 target.append(
  '<li><a href="'+ id + '">' + text + '</a> <span class="fa fa-times unfavor"></span></li>');

}
