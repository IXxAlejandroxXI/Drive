<%-- 
    Document   : VehiculosJSP
    Created on : 20/10/2017, 09:06:39 PM
    Author     : Linsey
--%>

<%

    HttpSession sesion = request.getSession(true);
    String tipoUsuario = "";
    if(sesion!=null){
        if (sesion.getAttribute("usuario")  == null) {
            response.sendRedirect("index.jsp");
        }else{
            tipoUsuario = (String)sesion.getAttribute("usuario");
        }
    }else{
        response.sendRedirect("index.jsp");
    }
%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Vehiculos - Sistema para la administración de vehiculos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- ********************************************************** -->
        <script src="assets/js/jquery-3.2.1.js" type="text/javascript"></script>
        <link href="assets/css/main.css" rel="stylesheet" type="text/css"/>
        <script src="assets/js/jquery.simplePagination.js" type="text/javascript"></script>
        <script src="assets/js/VehiculosJS.js" type="text/javascript"></script>
        <script src="assets/js/utils.js" type="text/javascript"></script>
        <script src="assets/js/main.js" type="text/javascript"></script>
        <link href="assets/css/simplePagination.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
         <link href="assets/css/main.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <script src="assets/js/jquery-3.2.1.js" type="text/javascript"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.simplePagination.js" type="text/javascript"></script>
        <script src="assets/js/VehiculosJS.js" type="text/javascript"></script>
        <script src="assets/js/utils.js" type="text/javascript"></script>
        <link href="assets/css/simplePagination.css" rel="stylesheet" type="text/css"/>
         
        
    </head>
    <body>
        
           <!-- Header -->
        <header id="header">
            <h1>¡Drive!</h1>
            <h1>Administrador <small>Mantenimiento de Vehículos</small></h1>
        </header>

        
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#" readonly>Base de Datos</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="dropdown"><a class="dropdown-toggle"  href="MantenimientoChoferes.jsp">Mantenimiento Choferes</a>
                    </li>
                    <li class="dropdown"><a class="dropdown-toggle" href="MantenimientoClientes.jsp">Mantenimiento Clientes</a>
                    </li>
                    <li class="dropdown"><a class="dropdown-toggle"  href="VehiculosJSP.jsp">Mantenimiento Vehiculos</a>
                    </li>
                    <li class="dropdown"><a class="dropdown-toggle"  href="ConsultaViajes.jsp">Consulta Viajes</a>
                     </li>
      
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Cerrar Sesion</a></li>
                </ul>
            </div>
        </nav>
        

        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <p>This is a small modal.</p>
                    </div>
                </div>
            </div>
        </div>
        

        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- Modal del BootsTrap para mostrar el formulario de insertar -->
        <!-- o modificar
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <div class="modal fade" id="myModalFormulario" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insertar / Modificar Vehiculos
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formPersonas">
                            <div class="form-group" id="groupAno">
                                <label for="ano">Año:</label>
                                <input type="text" class="form-control" id="ano" autofocus="true" placeholder="Año">
                            </div>

                            <div class="form-group" id="groupModelo">
                                <label for="modelo">Modelo:</label>
                                <input type="text" class="form-control" id="modelo" placeholder="Modelo" >
                            </div>

                            <div class="form-group" id="groupPlaca">
                                <label for="placa">Placa</label>
                                <input type="text" class="form-control" id="placa" placeholder="Placa">
                            </div>

                            <div class="form-group" id="groupColor">
                                <label for="color">Color</label>
                                <input type="text" class="form-control" id="color" placeholder="Color">
                            </div>
                            
                            <div class="form-group" id="groupPuntuacion">
                                <label for="puntuacion">Puntuacion</label>
                                <input type="number" class="form-control" id="puntuacion" placeholder="Puntuacion">
                            </div>
                            
                             <div class="form-group" id="groupEstado">
                                <label for="estado">Estado</label>
                                <input type="text" class="form-control" id="estado" placeholder="Estado">
                            </div>
                            
                               <div class="form-group" id="groupUbicacionActualX">
                                <label for="ubicacionActualX">Ubicación Actual X</label>
                                <input type="text" class="form-control" id="ubicacionActualX" placeholder="UbicacionActualX">
                            </div>
                            
                            <div class="form-group" id="groupUbicacionActualY">
                                <label for="ubicacionActualY">Ubicación Actual Y</label>
                                <input type="text" class="form-control" id="ubicacionActualY" placeholder="UbicacionActualY">
                            </div>
                            
                            <div class="form-group" id="Cedula">
                                <label for="cedula">Cédula</label>
                                <input type="text" class="form-control" id="cedula" placeholder="Cédula">
                            </div>
                             
                            <div class="form-group">
                                <input type="hidden" value="agregarVehiculo" id="vehiculosAction"/>
                                <button type="submit" class="btn btn-primary" id="enviar">Guardar</button>
                                <button type="reset" class="btn btn-danger" id="cancelar">Cancelar</button>
                            </div>

                            <div class="form-group height25" >
                                <div class="alert alert-success hiddenDiv" id="mesajeResult">
                                    <strong id="mesajeResultNeg">Info!</strong> 
                                    <span id="mesajeResultText">This alert box could indicate a neutral informative change or action.</span>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->
        <!-- ********************************************************** -->

        <div class="container">
            <div class="page-header">
                <h1>Agenda <small>Sistema para la administración de Vehículos</small></h1>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL SUPERIOR -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <!-- ********************************************************** -->
                        <!-- COLUMNA DEL MENU -->
                        <!-- ********************************************************** -->
                        <div class="col-md-4">
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Menú Principal
                                    <span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Mantenimiento Choferes</a></li>
                                    <li><a href="MantenimientoClientes.jsp">Mantenimiento Clientes</a></li>
                                    <li><a href="VehiculosJSP.jsp">Mantenimiento Vehiculos</a></li>
                                    <li class="divider"></li>
                                    <li><a href="Logout">Cerrar Sesión</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- ********************************************************** -->
                        <!-- COLUMNA DEL MENU -->
                        <!-- ********************************************************** -->
                        <div class="col-md-4" style="text-align: center">
                            <button type="button" class="btn btn-info centered" data-toggle="modal" data-target="#myModalSesion" id="btMostarSesion">Mostrar datos de la sesión</button>
                        </div>
                        <!-- ********************************************************** -->
                        <!-- COLUMNA DEL BOTON DE CERRAR SESION -->
                        <!-- ********************************************************** -->
                        <div class="col-md-4" style="text-align: right;">
                            <a class="btn btn-warning" href="Logout" role="button">
                                <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                                Cerrar Sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL DEL MANTENIMIENTO DE PERSONAS -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Mantenimiento de Vehiculos</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalFormulario" id="btMostarForm">Insertar Vehículo</button>
                    </center><br>
                    <!-- ********************************************************** -->
                    <div class="col-sm-12">
                        <form role="form" onsubmit="return false;" id="formVehiculos" class="form-horizontal centered">
                            <div class="form-group" id="groupPlaca">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <p><b>Buscar por número de placa del vehículo:</b></p>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="email" placeholder="Digite la placa del vehículo">
                                </div>
                                <div class="col-sm-4">
                                    <button type="button" class="btn btn-info centered" id="buscarPlaca">
                                        Buscar <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- ********************************************************** -->

                    <table class="table table-hover table-condensed" id="tablaVehiculos"></table>

                </div>
                <div class="panel-footer">Nota: Acciones validas dependeran del rol del usuario</div>
            </div>
        </div>
 <script src="assets/js/main.js"></script>

    </body>
</html>
