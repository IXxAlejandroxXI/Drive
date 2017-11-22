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
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="assets/css/main.css" />
        <script src="assets/js/maps.js" type="text/javascript"></script>
        <script src="assets/js/nuevosClientes.js" type="text/javascript"></script>
    </head>
    <body>
        <header id="header">
				<h1>¡Registrate a Drive!</h1>
                                
                        </header>
        <br>
        <br>
        <form id="signup-form">
            <table>
                <tr>
                    <td><h4>Usuario</h4></td>
                    <td><h4>Contraseña</h4><td>
                </tr>
                <tr>
                    <td><input type="password" name="contrasena" id="usuario" placeholder="usuario93"/></td>
                    <td><input type="password" name="contrasena" id="contrasena" placeholder="*****"/></td>
                </tr>
                <tr>
                    <td><h4>Nombre</h4></td>
                    <td><h4>Apellidos</h4></td>
                </tr>
                <tr>
                    <td><input type="text" name="text" id="nombre" /></td>
                    <td><input type="text" name="text" id="apellidos" /></td>
                </tr>
                <tr>
                    <td><h4>Correo electronico</h4></td>
                    <td><h4>Fecha de Nacimiento</h4></td>

                </tr>
                <tr>
                    
                    <td><input type="email" name="email" id="correo" placeholder="ejemplo@drive.com" /></td>
                    <td><input type="text" name="text" id="dpFechaNacimiento"/></td>
                </tr>
                 <tr>
                    
                     <td><h4>Telefono</h4></td>
                    
                </tr>
                <tr>
                    <td><input type="text" name="text" id="telefono"/></td>
                </tr>
                <tr>
                    <td><input type="button" id="ingreso" onclick="enviar2()" value ="Siguiente Paso"/></a>
                </tr>
            </table>
        </form>

    <di>
        <h2 id="ingreso3">
            
        </h2>
    </di>
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

