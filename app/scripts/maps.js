(function() {
  'use strict';

  function initialize() {
    var coordiates = { lat: 40.998340, lng: -8.171281 };
    var mapOptions = {
      zoom: 16,
      center: coordiates,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    return new google.maps.Map(document.getElementById('Map'), mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
})();
