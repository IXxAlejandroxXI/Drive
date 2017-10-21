<%-- 
    Document   : registro
    Created on : 14/10/2017, 02:22:46 PM
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

                        <!-- Signup Form -->
                        <form id="signup-form">
                            <table>
                                <tr>
                                    <td><h2>Registro</h2></td>
                                </tr>
                                <tr>
                                    <td><h3>Nombre</h3></td>
                                    <td><h3>Apellidos</h3></td>
                                </tr>
                                <tr>
                                    <td><input type="text" name="text" id="text" /></td>
                                    <td><input type="text" name="text" id="text" /></td>
                                </tr>
                                <tr>
                                    <td><h3>Correo electronico</h3></td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                     <input type="email" name="email" id="email" placeholder="ejemplo@drive.com" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><h3>Contraseña</h3></td>
                                    <td><h3>Confirma Contraseña</h3></td>
                                </tr>
                                <tr>
                                    <td><input type="password" name="contrasena" id="contra" placeholder="*****"/></td>
                                    <td><input type="password" name="contrasena" id="contra" placeholder="*****"/></td>
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
                        <br></br>
                        <p><a href="terminos.html">Términos y condiciones</a></p> 
                        <br></br>
                        <br></br>
        </body>
</html>