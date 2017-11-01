<%-- 
    Document   : registroVehiculos
    Created on : 14/10/2017, 02:24:03 PM
    Author     : aleca
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Proyecto de Programacion IV</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/css/main.css" />
    </head>
    <body>
        <form id="signup-form">
            <table>
                <tr>
                    <td><h2>Datos del Vehículo</h2></td>
                </tr>
                <tr>
                    <td><h4>Modelo</h4></td>
                    <td><h4>Placa</h4></td>
                </tr>
                <tr>
                    <td><input type="text" name="text" id="campoModelo" /></td>
                    <td><input type="text" name="text" id="campoPlaca" /></td>
                </tr>
                <tr>
                    <td><h4>Año</h4></td>
                    <td><h4>Color</h4></td>

                </tr>
                <tr>

                    <td><input type="text" name="text" id="campoAño"/></td>
                    <td><input type="text" name="text" id="campoColor"/></td>
                </tr>
                <tr>
                    <td><h4>Tipo de Licencia</h4></td>
                    <td><h4>Fecha de Vencimiento de la Licencia</h4></td>
                </tr>
                <tr>
                    <td><input type="text" name="text" id="campoTipoLicencia"/></td>
                    <td><input type="text" name="text" id="campoFechaVencimiento" placeholder="12/9/2017"/></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Registrar" /></td>
                </tr>
            </table>
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
        <br>
        <p><a href="terminos.html">Términos y condiciones</a></p> 
        <br>
        <br>
    </body>
</html>

