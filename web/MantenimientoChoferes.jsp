<%-- 
    Document   : MantenimientoChoferes
    Created on : 24/10/2017, 01:33:57 PM
    Author     : Laura
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

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link href="assets/css/datetimepicker.min.css" rel="stylesheet" type="text/css"/>
        <script src="assets/js/datetimepicker.js" type="text/javascript"></script>
        <script src="assets/js/utils.js" type="text/javascript"></script>
        <script src="assets/js/MantenimientoChoferesJS.js" type="text/javascript"></script>
    </head>
    <body>

        <!-- Header -->
        <header id="header">
            <h1>¡Drive!</h1>
            <h1>Administrador <small>Mantenimiento de Choferes</small></h1>
        </header>

        <!-- Signup Form -->
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
        <div class="modal fade" id="myModalFormulario" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insertar / Modificar Choferes
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formChoferes">
                            <div class="form-group" id="groupCedula">
                                <p for="cedula">Cedula:</p>
                                <input type="text" class="form-control" id="cedula" autofocus="true" placeholder="cedula">
                            </div>
                            <div class="form-group" id="groupTipoLicencia">
                                <p for="tipolicencia">Tipo de Licencia:</p>
                                <input type="text" class="form-control" id="tipoLicencia" autofocus="true" placeholder="tipoLicencia">
                            </div>
                            <div class="form-group" id="groupFechaNacimiento">
                                <p for="fechanacimiento">Fecha Nacimiento:</p>
                                <div id="fechanacimiento" class="input-group date form_date" data-date="" data-date-format="dd/mm/yyyy" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
                                    <input class="form-control" type="text" value=""  placeholder="dd/mm/aaaa" id="fechanacimientotext">
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group" id="groupFechaVencimiento">
                                <p for="fechavencimiento">Fecha Vencimiento Licencia:</p>
                                <div id="fechavencimiento" class="input-group date form_date" data-date="" data-date-format="dd/mm/yyyy" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
                                    <input class="form-control" type="text" value=""  placeholder="dd/mm/aaaa" id="fechavencimientotext">
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group" id="groupChoferActual">
                                <p for="choferactual"> Chofer actual: </p>
                                <select class="from-control" autofocus="true" id="SeleccionChoferActual">
                                    <option value="Si" >Si</option>
                                    <option value="No" selected="Selected">No</option>
                                </select>
                            </div>
                            <div class="form-group" id="groupUltimoUsuario">
                                <p for="ultimousuario">Ultimo Usuario:</p>
                                <input type="text" class="form-control" id="ultimousuario" autofocus="true" placeholder="x">
                            </div>
                            <div class="form-group" id="groupFecha">
                                <p for="fecha">Fecha:</p>
                                <div id="fecha" class="input-group date form_date" data-date="" data-date-format="dd/mm/yyyy" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">
                                    <input class="form-control" type="text" value=""  placeholder="dd/mm/aaaa" id="fechatext">
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                            <div class="form-group" id="groupAdministrador">
                                <p for="administrador">Administrador: </p>
                                <select class="from-control" autofocus="true" id="SeleccionAdministrador">
                                <option value="Si" >Si</option>
                                <option value="No" selected="Selected">No</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <input type="hidden" value="agregarChofer" id="choferAction"/>
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
        
         <div class="container">
            <div class="page-header">
                <h1>Drive <small>Sistema para la administración de choferes</small></h1>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL SUPERIOR -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-4" >
                            <button type="button" class="btn btn-info centered" data-toggle="modal" data-target="#myModalSesion" id="btMostarSesion" >Mostrar datos de la sesión</button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <!-- ********************************************************** -->
            <!-- PANEL DEL MANTENIMIENTO DE PERSONAS -->
            <!-- ********************************************************** -->
            
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Mantenimiento de Choferes</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalFormulario" id="btMostarForm">Insertar Chofer</button>
                    </center><br>
                    <!-- ********************************************************** -->
                    <div class="col-sm-12">
                        <form role="form" onsubmit="return false;" id="formChofer" class="form-horizontal centered">
                            <div class="form-group" id="groupCedula">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <p><b>Buscar por cedula del chofer:</b></p>
                                </div>
                                <div class="col-sm-4">
                                    <input type="cedula" class="form-control" id="cedula" placeholder="Digite la cedula del chofer">
                                </div>
                                <div class="col-sm-4">
                                    <button type="button" class="btn btn-info centered" data-toggle="modal" data-target="#myModalFormulario" id="btMostarForm">
                                        Buscar <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- ********************************************************** -->

                    <table class="table table-hover table-condensed" id="tablaChoferes"></table>

                </div>
                <div class="panel-footer">Nota: Acciones validas dependeran del rol del usuario</div>
            </div>
        </div>


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

    </body>
</html>
