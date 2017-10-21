<%-- 
    Document   : index
    Created on : 14/10/2017, 02:21:41 PM
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
                <link href="assets/css/main.css" rel="stylesheet" type="text/css"/>
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body>

		<!-- Header -->
			<header id="header">
				<h1>¡Bienvenido a Drive!</h1>
                                <p>Un servicio de transporte en línea<br /></p>
                                 <p>Puedes obtener tu alquiler de vehículo con chofer <a href="viajes.html">aquí mismo</a> </p> 
                               

                        </header>

                        <!-- Signup Form -->
                        <form id="signup-form">
                            <div>
                            <input type="email" name="email" id="email" placeholder="Correo electronico" />
                            </div>
                            <div> <input type="password" name="contrasena" id="contra" placeholder="*****"/>
                            </div>
                            <div>
                                <a href="MantenimientoClientes.jsp"><input type="submit"  value="Ingresar" id="ingreso" onclick="location.href='MantenimientoClientes.jsp';" /></a>
                            
                            
                            </div>
                        </form>
                        
                        <form id="signup-form" method="post" action="#">
                            
                            ¿No tienes una cuenta? ¡Crea una en sencillos pasos y empieza a disfrutar de Drive!&nbsp &nbsp<a href="registro.html"> <input type="button" value="Registrarse"/></a>
                            <br>
                            ¡Únete a nuestro equipo de trabajo! <a href="registroConductores.html"><input type="button" value ="Unirme"/></a>
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
