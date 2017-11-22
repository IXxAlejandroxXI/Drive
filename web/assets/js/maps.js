 var geocoder;
  var map;
  var markers = [];
  var marker;
  var posicion;
  var LAT;
  var LNG;
  function initMap() {
        var haightAshbury = {lat: 37.769, lng: -122.446};

        map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 12,
          center: haightAshbury,
        });
               if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              LAT = position.coords.latitude;
              LNG = position.coords.longitude;
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            posicion = pos;
            addMarker(pos);
            map.setCenter(pos);
            
          }, function() {
            
          });
        } else {
          // Browser doesn't support Geolocation
         
        }
        // This event listener will call addMarker() when the map is clicked.
        map.addListener('click', function(event) {
          addMarker(event.latLng);
        });

        // Adds a marker at the center of the map.
        
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
  

  function codeAddress() {
      var address = document.getElementById('address').value;
      var address2 = document.getElementById('address2').value;
     
     if(address == "" || address == "Mi hubicacion"){
         address=posicion;
     }
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true,
    map: map
});
directionsDisplay.addListener('directions_changed', function () {
    var re=computeTotalDistance(directionsDisplay.getDirections());
    tiempoDuracion(re);
    costo(re);
});
deleteMarkers(); 
var usuario = ultimo();
var clientes = client(usuario);
displayRoute(address, address2, directionsService,
        directionsDisplay);

  }
//  var marker = new google.maps.Marker({
//            map: map,
//            position: results[0].geometry.location
//        });
//var address = document.getElementById('address').value;
//    var address2 = document.getElementById('address2').value;
//    geocoder.geocode( { 'address': address}, function(results, status) {

function displayRoute(origin, destination, service, display) {
    service.route({
        origin: origin,
        destination: destination,
       // waypoints: [{location: 'Adelaide, SA'}, {location: 'Broken Hill, NSW'}],
        travelMode: 'DRIVING',
        avoidTolls: true
    }, function (response, status) {
        if (status === 'OK') {
            display.setDirections(response);
        } else {
            alert('Could not display directions due to: ' + status);
        }
    });
}
function computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    document.getElementById('total').innerHTML = total + ' km';
    return total;
}
function costo(result){
    document.getElementById('costo').innerHTML = 400*result + '₡';
    return 400*result;
}
function tiempoDuracion(result){
    var def = result*2.5/60;
    var w=def - Math.trunc(def); 
    document.getElementById('distancia').innerHTML = Math.trunc(def) + ' horas'+ w.toFixed(2) * 100+ 'minutos';
}
 // Adds a marker to the map and push to the array.
      function addMarker(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
      }

      // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }
      function posicionx(){
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              LAT = position.coords.latitude;
            
          });
        return LAT; }
    else{
        return 0.0;
    }
        
      }
      function posiciony(){
          return 2;
      }
function enviar() {
   // var g = prueba();
 
        $.ajax({
            url: 'ViajesServlet',
            data: {
                accion: "guardarViaje",
                usuario: $("#usuario").val(),
                contrasena: $("#contrasena").val(),
                nombre: $("#nombre").val(),
                apellidos: $("#apellidos").val(),
                correo: $("#correo").val(),
                fechaNacimiento: $("#dpFechaNacimiento").data('date'),
                direccionx: x,
                direcciony: y,
                telefono: $("#telefono").val(),
                ultimousuario: "",
                fecha: new Date()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    $("#myModalFormulario").modal("hide");
                    consultarClientes();
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                    }
                }

            },
            type: 'POST'
        });
  
}
//        }