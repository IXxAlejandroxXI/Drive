<%-- 
    Document   : registroConductores
    Created on : 14/10/2017, 02:23:26 PM
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
                    <td><h2>Registro de Conductores</h2></td>
                </tr>
                <tr>
                    <td><h4>Nombre</h4></td>
                    <td><h4>Apellidos</h4></td>
                </tr>
                <tr>
                    <td><input type="text" name="text" id="campoNombre" /></td>
                    <td><input type="text" name="text" id="campoApellido" /></td>
                </tr>
                <tr>
                    <td><h4>Correo electronico</h4></td>
                    <td><h4>Fecha de Nacimiento</h4></td>

                </tr>
                <tr>
                    
                    <td><input type="email" name="email" id="email" placeholder="ejemplo@drive.com" /></td>
                    <td><input type="text" name="text" id="campoFechaNacimiento"/></td>
                </tr>
                <tr>
                    <td><h4>Contraseña</h4></td>
                    <td><h4>Confirma Contraseña</h4></td>
                </tr>
                <tr>
                    <td><input type="password" name="contrasena" id="contra" placeholder="*****"/></td>
                    <td><input type="password" name="contrasena" id="contra" placeholder="*****"/></td>
                </tr>
                <tr>
                    <td> <a href="registroVehiculos.html"><input type="button" value ="Siguiente Paso"/></a>
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

