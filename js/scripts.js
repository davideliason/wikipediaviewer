$(document).ready(function(){

  <!-- HTML5 Geocaching -->

 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;

   console.log(longitude);
  });
}

});