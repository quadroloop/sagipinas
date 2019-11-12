
function renderGMap() {

  let lat, long;

  if (localStorage.lat && localStorage.long) {
    lat = localStorage.lat;
    long = localStorage.long;
  } else {
    lat = 14.508822;
    long = 121.001707;
  }

  let xcenter = new google.maps.LatLng(lat, long);

  var mapOptions = {
    center: xcenter,
    zoom: 10, scrollwheel: false, draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#1673cb"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "hue": "#0066ff"
          },
          {
            "weight": 1.9
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "saturation": 86
          },
          {
            "hue": "#0077ff"
          },
          {
            "weight": 0.8
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "18"
          },
          {
            "lightness": "24"
          },
          {
            "gamma": "1.84"
          },
          {
            "weight": "6.56"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "saturation": "-29"
          },
          {
            "lightness": "35"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c7e2ff"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
          {
            "color": "#bcddff"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#4797e0"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "hue": "#0077ff"
          },
          {
            "saturation": -7
          },
          {
            "lightness": 24
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": "-2"
          },
          {
            "lightness": "3"
          },
          {
            "gamma": "2.10"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#209ee1"
          },
          {
            "lightness": 49
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#5fb3ff"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#3ea3ff"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
          {
            "saturation": 58
          },
          {
            "hue": "#006eff"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "-13"
          },
          {
            "lightness": "66"
          },
          {
            "color": "#ee952c"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          {
            "color": "#ebf4ff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "52"
          },
          {
            "lightness": "5"
          },
          {
            "gamma": "4.11"
          },
          {
            "weight": "1.59"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "lightness": "10"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "saturation": "35"
          },
          {
            "lightness": "49"
          },
          {
            "gamma": "5.79"
          },
          {
            "weight": "5.45"
          },
          {
            "color": "#7245d5"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ebf4ff"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#93c8ff"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": "20"
          },
          {
            "color": "#7b4646"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ff6100"
          },
          {
            "lightness": "-62"
          },
          {
            "gamma": "2.01"
          },
          {
            "weight": "8.64"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "saturation": "20"
          },
          {
            "visibility": "on"
          },
          {
            "gamma": "2.02"
          },
          {
            "weight": "3.96"
          }
        ]
      },
      {
        "featureType": "transit.station.airport",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": 100
          },
          {
            "gamma": 0.82
          },
          {
            "hue": "#0088ff"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "-2"
          },
          {
            "lightness": "-81"
          },
          {
            "gamma": "1.50"
          }
        ]
      }
    ]
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

  var marker = new google.maps.Marker({
    position: xcenter,
  });
  marker.setMap(map);
}

const el = (element) => {
  return document.getElementById(element);
}

const cardSelect = (uid) => {
  let dataset = JSON.parse(localStorage.incidents);
  let reportData = dataset.find(item => { return item.uid === uid })

  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${reportData.location.lat},${reportData.location.long}&key=AIzaSyD5kFZMwUIUDZ25nTtLx0_0G3x1d2GMiCY`)
    .then(res => {
      if (res.data.status === "OK") {

        localStorage.lat = reportData.location.lat;
        localStorage.long = reportData.location.long;

        localStorage.uid = uid;
        localStorage.psid = reportData.id;

        renderGMap();

        setTimeout(() => {
          document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000)

        setTimeout(() => {
          if (document.getElementsByClassName('gm-control-active')[1]) {
            setTimeout(() => {
              document.getElementsByClassName('gm-control-active')[1].click();
            }, 200);
            setTimeout(() => {
              document.getElementsByClassName('gm-control-active')[1].click();
            }, 400);
            setTimeout(() => {
              document.getElementsByClassName('gm-control-active')[1].click();
            }, 600);
            setTimeout(() => {
              document.getElementsByClassName('gm-control-active')[1].click();
            }, 800);

          }
        }, 1000)

        el('location').innerHTML = res.data.results[0].formatted_address;
        if (reportData.type === 'others') {
          el('hazard-type').innerHTML = 'accident'
        } else {
          el('hazard-type').innerHTML = reportData.type;
        }
        el('report-time').innerHTML = moment(reportData.timestamp).fromNow()
        el('report-details').innerHTML = reportData.details;
        el('geolocation').innerHTML = '';

        let locationCount = 1;

        res.data.results.forEach(location => {
          el('geolocation').innerHTML += `
           <p class="detail-text"><i class="fa fa-map-marker"></i> ${locationCount}.) ${location.geometry.location_type.split('_').join(" ")}</p>
           <div class="support-card">
               ${location.formatted_address}
               <hr>
               <strong>Coordinates</strong>
               <ul class="coordinates">
                  <li>Latitude: <span>${location.geometry.location.lat}</span></li>
                  <li>Longtitude: <span>${location.geometry.location.lng}</span></li>
               </ul>

           </div>
           `
          locationCount++;
        });

        el('infoCard').style.display = 'block';

      }
    })
}

