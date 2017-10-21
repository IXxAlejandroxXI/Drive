<%-- 
    Document   : viajes
    Created on : 14/10/2017, 02:25:06 PM
    Author     : aleca
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Proyecto de Programación IV</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
        <link rel="stylesheet" href="assets/css/main.css" />
        <!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
        <!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
    </head>
    <body>

        <!-- Header -->
        <header id="header">
            <h1>¡Comienza a viajar con Drive!</h1>

        </header

        <!-- Puntos de recogida y llegada -->
        <form>
            <div class="form-group">
                <label for="inputPartida">Punto de partida:</label>
                <input type="text" class="form-control" id="inputPartida" placeholder="Ingrese aquí el punto de partida">
            </div>
            <div class="form-group">
                <label for="inputLlegada">Punto de llegada:</label>
                <input type="text" class="form-control" id="inputLlegada" placeholder="Ingrese aquí el punto de llegada">
            </div>   
            <p></p>
            <input type="submit" value="Confirmar viaje" />
        </form>

        <!-- Footer -->
        <footer id="footer">

            <ul class="icons">
                <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
                <li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
            </ul>

            <ul class="copyright">
                <li>Credits: &copy; Laura Flores Rojas, Alejandro Calderon, Linsey Garro.</li>
            </ul>
        </footer>

        <!-- Scripts -->
        <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
        <script src="assets/js/main.js"></script>
        <p><a href="terminos.html">Términos y condiciones</a></p> 
        <p></p>
        <p></p>
        <p></p>
    </body>
</html>