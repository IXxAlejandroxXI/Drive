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
        <script src="assets/js/viajes.js" type="text/javascript"></script>
        <link href="assets/css/viajes.css" rel="stylesheet" type="text/css"/>
        <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
        <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
        <title>Solicitud de Servicio</title>
          <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC0jrfSYIWLMuDh826ai7JFOs_nUsgpzQo&callback=initMap">
        </script>

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
       
        
        
        
         <input type="submit" value="Confirmar viaje" />

        
    </body>
</html>