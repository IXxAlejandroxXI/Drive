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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <title>Solicitud de Servicio</title>
    </head>
    <body>
        <h1>¡Comienza tu viaje!</h1>
        <p>
            <input id="address" type="text" placeholder="Mi posicion"></p>
        <p>
            <input id="address2" type="text" placeholder="Mi destino"></p>
        <p>
          <input type="button" id="comenzar" value="Comenzar Viaje" onclick="codeAddress()">
        </p>
        </div>
        <div id="map-canvas"></div>
      <p>Total Distance: <span id="total"></span></p>
    </div>
        <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
        <script src="assets/js/main.js"></script>
        <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0jrfSYIWLMuDh826ai7JFOs_nUsgpzQo&callback=initMap">
        </script>
        <script src="assets/js/maps.js" type="text/javascript"></script>
        

        
    </body>
</html>