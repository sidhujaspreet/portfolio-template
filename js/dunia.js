function initMap() {
  var myLatLng = {lat: 18.50, lng: 73.92};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    icon: '../img/marker.png',
    map: map,
    title: 'Hello World!'
  });
}

function setDynamicCss() {
    $('#map').height($(".fill").height()-$("#contact-info-label").height());
    $('.image').height($('.dev-info').height());
}

$( document ).ready(function() {
    initMap();
    setDynamicCss();
});