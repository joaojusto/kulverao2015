(function() {
  'use strict';

  function initialize() {
    var position = { lat: 40.998340, lng: -8.171281 };
    var mapOptions = {
      zoom: 16,
      center: position,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var map = new google.maps.Map(document.getElementById('Map'), mapOptions);

    var logo = {
      url: 'images/logo_small.png',
      size: new google.maps.Size(120, 64)
    };

    new google.maps.Marker({
        position: position,
        map: map,
        icon: logo
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
})();
