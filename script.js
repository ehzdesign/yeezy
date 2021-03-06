
// create a variable for map
var map;

//store location in myLatLng
var myLatLng = {lat: 43.64330, lng: -79.42322};

//store image for marker in var image
var image = 'images/face.png';


// initialize google map
function initMap() {

  //add custom style to map
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],

    //label for styalized map tab
    {name: 'Yeezy'});

    //info window for google map
    var contentString = '<div id="map_info_window">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">YEEZY TO</h2>'+
    '<div id="bodyContent">'+
    '<p><b>YEEZY SAYS</b>, "I always misspell genius SMH! The irony!"</p>' +
    '</div>'+
    '</div>';





    //set options on map
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      //set zoom level
      zoom: 16,
      //set types of map
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid',
        'styled_map']
      }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // create marker
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP
    });

    //add info window
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    //add event listener for opeing info window on click of marker
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }





  //animation for revealing content when scrolling
  window.sr = ScrollReveal();

  //check if scroll reveal is supported
  if (sr.isSupported()) {
    document.documentElement.classList.add('sr');
  }

  //add attributes to scroll reveal items
  sr.reveal('.large-bg-image--pablo',
  { origin: 'right' ,
  distance: '3em',
  scale: 1,
  opacity: 0,
  viewFactor: .1,
  duration: 2000,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true
});

sr.reveal('#tour h1', {
  origin: 'left' ,
  distance: '1.5em',
  scale: 1, opacity: 0,
  viewFactor: 0.5,
  duration: 1800,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true

});

sr.reveal('#tour p', {
  origin: 'left' ,
  distance: '1em',
  scale: 1,
  opacity: 0,
  viewFactor: 0.5,
  duration: 1500,
  // delay: 500,

  delay: 600,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',

  reset: true

});

sr.reveal('.pablo-images img:first-child', {
  origin: 'left' ,
  distance: '1em',
  scale: 1,
  viewFactor: 0.2,
  opacity: 0.8,
  duration: 1200,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true

});

sr.reveal('.pablo-images img:nth-child(2)', {
  origin: 'right' ,
  distance: '1em',
  scale: 1,
  viewFactor: 0.1,
  opacity: .8,
  duration: 1200,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true

});

sr.reveal('.large-bg-image--products',
{ origin: 'left' ,
distance: '3em',
scale: 1,
opacity: 0,
viewFactor: .1,
duration: 2000,
easing:'cubic-bezier(0.23, 1, 0.32, 1)',
reset: true
});

var $productFirst = $('.product:first');
var $productSecond = $('.product:eq(1)');
var $productThird = $('.product:eq(2)');

sr.reveal($productFirst,
  { origin: 'bottom' ,
  distance: '3em',
  scale: 1,
  opacity: 0,
  viewFactor: .2,
  duration: 2000,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true
});

sr.reveal($productSecond,
  { origin: 'bottom' ,
  distance: '3em',
  scale: 1,
  opacity: 0,
  viewFactor: .2,
  delay: 400,
  duration: 2000,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true
});

sr.reveal($productThird,
  { origin: 'bottom' ,
  distance: '3em',
  scale: 1,
  opacity: 0,
  viewFactor: .2,
  delay: 600,
  duration: 2000,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true
});

sr.reveal('.toronto_text_bg_big',
{

  opacity: .6,
  viewFactor: 0.2,
  scale: 0.9,
  duration: 4000,

  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: true
});

sr.reveal('.hero-img',
{
  origin:'left',
  distance: '3em',
  opacity: 0,
  viewFactor: 0.2,
  scale: 1,
  delay: 600,
  duration: 2000,

  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: false
});

sr.reveal('.hero-title',
{
  origin:'right',
  distance: '4em',
  opacity: 0,
  viewFactor: 0.2,
  scale: 1,
  delay: 600,
  duration: 2500,

  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: false
});


sr.reveal('.social-links-container i:first-child', {
  origin: 'bottom' ,
  distance: '1em',
  scale: 1,
  opacity: 0,
  viewFactor: .2,
  duration: 2000,
  delay: 1000,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: false
});

sr.reveal('.social-links-container i:nth-child(2)', {
  origin: 'bottom' ,
  distance: '1em',
  scale: 1,
  opacity: 0,
  viewFactor: .2,
  duration: 2000,
  delay: 1200,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: false
});

sr.reveal('.social-links-container i:nth-child(3)', {
  origin: 'bottom' ,
  distance: '1em',
  scale: 1,
  opacity: 0,
  viewFactor: .2,
  duration: 2000,
  delay: 1400,
  easing:'cubic-bezier(0.23, 1, 0.32, 1)',
  reset: false
});
