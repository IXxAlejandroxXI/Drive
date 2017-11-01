<%-- 
    Document   : viajes
    Created on : 14/10/2017, 02:25:06 PM
    Author     : aleca
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
        <link rel="stylesheet" href="assets/css/main.css" />
        <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
        <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
        <title>Solicitud de Servicio</title>
        <style>
     /* Always set the map height explicitly to define the size of the div
      * element that contains the map. */
     #map {
       position:relative;
       height: 50%;
       width: 50%;
       left:25%;
       top:0%;
     }
     /* Optional: Makes the sample page fill the window. */
     html, body {
       
       margin: 0;
       padding: 0;
     }
        </style>
    </head>
    <body>
         <header id="header">
            <h1>¡Comienza a viajar con Drive!</h1>
         </header>
        
        <form>
            <div class="form-group">
                <label for="inputPartida">Punto de partida:</label>
                <input type="text" class="form-control" id="inputPartida" placeholder="Ingrese aquí el punto de partida">
            </div>
            <div class="form-group">
                <label for="inputLlegada">Punto de llegada:</label>
                <input type="text" class="form-control" id="inputLlegada" placeholder="Ingrese aquí el punto de llegada">
            </div> 
        </form>
        

        <!-- Scripts -->
        <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
        <script src="assets/js/main.js"></script>
        
        <div id="map"></div>
        <script>
          // Note: This example requires that you consent to location sharing when
          // prompted by your browser. If you see the error "The Geolocation service
            // failed.", it means you probably did not give permission for the browser to
            // locate you.

            function initMap() {
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 20
                });
                var infoWindow = new google.maps.InfoWindow({map: map});

                // Try HTML5 geolocation.
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                       

                        infoWindow.setPosition(pos);
                        infoWindow.setContent('Location found.');
                        map.setCenter(pos);
                    }, function () {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
                } else {
                    // Browser doesn't support Geolocation
                    handleLocationError(false, infoWindow, map.getCenter());
                }
                
              
            }

            function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
            }
        </script>
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0jrfSYIWLMuDh826ai7JFOs_nUsgpzQo&callback=initMap">
        </script>
        
        
        
         <input type="submit" value="Confirmar viaje" />

        
    </body>
</html>