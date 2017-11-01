/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cedula;
var placa;

$(function () {
    //Genera el datapicker
//    $('#dpFechaNacimiento').datetimepicker({
//        weekStart: 1,
//        todayBtn: 1,
//        autoclose: 1,
//        todayHighlight: 1,
//        startView: 2,
//        minView: 2,
//        forceParse: 0
//    });

    //agrega los eventos las capas necesarias
    $("#enviar").click(function () {
        enviar();
        limpiarForm();
    });
    
    $("#enviar1").click(function () {
        //enviar();
        // ACA SE AGREGA EL CODIGO
    });

    //agrega los eventos las capas necesarias
    $("#cancelar").click(function () {
        limpiarForm();
        removeError();
        $("#myModalFormulario").modal("hide");
    });
    
    $("#cancelar1").click(function () {
        limpiarForm();
        $("#myModalFormulario1").modal("hide");
    });
    
    $("#cancelar4").click(function () {
        limpiarForm();
        $("#confirmacionEliminar").modal("hide");
    });
    
    $("#btMostarForm").click(function () {
        limpiarForm();
    });
    
    $("#btMostarForm1").click(function () {
        limpiarForm();
    });
    
    $("#enviar4").click(function (){
        limpiarForm();
        document.getElementById("nom").append("hola");
        $("#confirmacionEliminar").modal("hide");
        eliminarVehiculo(placa);
    });
    
    $("#buscarPlaca").click(function (){
        busqueda();
    });
    
    
});

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************

$(document).ready(function () {
    consultarVehiculos();
    paginacion();
});

//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de las personas
//******************************************************************************
//******************************************************************************

function consultarVehiculos() {
    mostrarModal("myModal", "Espere por favor..", "Consultando la información de vehiculos en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'VehiculosServlet',
        data: {
            accion: "consultarVehiculos"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los vehiculos en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTabla(data);
            // se oculta el modal esta funcion se encuentra en el utils.js
            ocultarModal("myModal");

        },
        type: 'POST',
        dataType: "json"
    });
}


function buscar(placa){
    $.ajax({
        url: 'VehiculosServlet',
        data: {
            accion: "consultarVehiculos"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los vehiculos en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            $("#tablaVehiculos").html("");
            /*for (var i=0;i<data.length;i++){
                if(data[i].nombre.indexOf(nombre)>-1)
                dibujarFila(data[i]);
            }*/
            dibujarTablaBuscar(data,placa);
            // se oculta el modal esta funcion se encuentra en el utils.js
            ocultarModal("myModal");
        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaVehiculos").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var body = $("<tbody />")
    var row = $("<tr />");
    head.append(row);
    $("#tablaVehiculos").append(head); 
    row.append($("<th><b>AÑO</b></th>"));
    row.append($("<th><b>MODELO</b></th>"));
    row.append($("<th><b>PLACA</b></th>"));
    row.append($("<th><b>COLOR</b></th>"));
    row.append($("<th><b>PUNTUACION</b></th>"));
    row.append($("<th><b>ESTADO</b></th>"));
    row.append($("<th><b>UBICACION ACTUAL X</b></th>"));
    row.append($("<th><b>UBICACION ACTUAL Y</b></th>"));
    row.append($("<th><b>CEDULA CHOFER</b></th>"));
     row.append($("<th><b>FECHA</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    $("#tablaVehiculos").append(body);
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {

        dibujarFila(dataJson[i]);
    }
    
    body.append("<tr><td colspan=4><div id=\"page-nav\"></div></tr></td>");
    paginacion();
}

function dibujarTablaBuscar(dataJson,placa) {
    //limpia la información que tiene la tabla
    $("#tablaVehiculos").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var body = $("<tbody />")
    var row = $("<tr />");
    head.append(row);
    $("#tablaVehiculos").append(head); 
    row.append($("<th><b>AÑO</b></th>"));
    row.append($("<th><b>MODELO</b></th>"));
    row.append($("<th><b>PLACA</b></th>"));
    row.append($("<th><b>COLOR</b></th>"));
    row.append($("<th><b>PUNTUACION</b></th>"));
    row.append($("<th><b>ESTADO</b></th>"));
    row.append($("<th><b>UBICACION ACTUAL X</b></th>"));
    row.append($("<th><b>UBICACION ACTUAL Y</b></th>"));
    row.append($("<th><b>CÉDULA CHOFER</b></th>"));
     row.append($("<th><b>FECHA</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    $("#tablaVehiculos").append(body);
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        if(dataJson[i].placa.toUpperCase().indexOf(placa.toUpperCase())>-1){
                dibujarFila(dataJson[i]);
        }
    }
    body.append("<tr><td colspan=4><div id=\"page-nav\"></div></tr></td>");
    paginacion();
}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona
    var row = $("<tr class=\"paginate\"/>");
    $("#tablaVehiculos").append(row); 
    row.append($("<td>" + rowData.ano + "</td>"));
    row.append($("<td>" + rowData.modelo + "</td>"));
    row.append($("<td>" + rowData.placa + "</td>"));
    row.append($("<td>" + rowData.color + "</td>"));
    row.append($("<td>" + rowData.puntuacion + "</td>"));
    row.append($("<td>" + rowData.estado + "</td>"));
    row.append($("<td>" + rowData.ubicacionActualX + "</td>"));
    row.append($("<td>" + rowData.ubicacionActualY + "</td>"));
    row.append($("<td>" + rowData.cedula + "</td>"));
    row.append($("<td>" + rowData.fecha + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarVehiculoByPlaca('+rowData.placa+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" >'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true" data-toggle="modal" data-target="#confirmacionEliminar" onclick="eliminarVehiculos('+rowData.placa+');"></span>'+
                    '</button></td>'));
}


function busqueda() {
    var filter, table, tr, td, i;
    filter = $("#email").val().toUpperCase();
    table = document.getElementById("tablaVehiculos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    paginacion();
}

function paginacion() {
    // Grab whatever we need to paginate
    var pageParts = $(".paginate");

    // How many parts do we have?
    var numPages = pageParts.length;
    // How many parts do we want per page?
    var perPage = 5;

    // When the document loads we're on page 1
    // So to start with... hide everything else
    pageParts.slice(perPage).hide();
    // Apply simplePagination to our placeholder
    $("#page-nav").pagination({
        items: numPages,
        itemsOnPage: perPage,
        cssStyle: "light-theme",
        prevText: "<<",
        nextText: ">>",
        // We implement the actual pagination
        //   in this next function. It runs on
        //   the event that a user changes page
        onPageClick: function (pageNum) {
            // Which page parts do we show?
            var start = perPage * (pageNum - 1);
            var end = start + perPage;

            // First hide all page parts
            // Then show those just for our page
            pageParts.hide()
                    .slice(start, end).show();
        }
    });
}


//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
//******************************************************************************

function enviar() {
    if (validar()) {
        removeError();
        //Se envia la información por ajax
        $.ajax({
            url: 'VehiculosServlet',
            data: {
                accion: $("#vehiculosAction").val(),
                ano: $("#ano").val(),
                modelo: $("#modelo").val(),
                placa: $("#placa").val(),
                color: $("#color").val(),
                puntuacion: $("#puntuacion").val(),
                estado: $("#estado").val(),
                ubicacionActualX: $("#ubicacionActualX").val(),
                ubicacionActualY: $("#ubicacionActualY").val(),
                cedula: $("#cedula").val(),
                fecha: $("#fecha").data('date'),
                ultimoUsuario: 'Linsey'
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    $("#myModalFormulario").modal("hide");
                    consultarVehiculos();
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } else if (tipoRespuesta == "F~") {
                        mostrarMensaje("alert alert-danger", "El vehiculo ya existe en la base de datos placa duplicada", "Error!");
                        $("#groupPlaca").addClass("has-error");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                    }
                }
               

            },
            type: 'POST'
        });
    } else {
        mostrarMensaje("alert alert-danger", "Debe digitar correctamente los campos del formulario", "Error!");
    }
}

function removeError(){
    $("#groupAno").removeClass("has-error");
    $("#groupModelo").removeClass("has-error");
    $("#groupPlaca").removeClass("has-error");
    $("#groupColor").removeClass("has-error");
    $("#groupPuntuacion").removeClass("has-error");
    $("#groupEstado").removeClass("has-error");
    $("#groupUbicacionActualX").removeClass("has-error");
    $("#groupUbicacionActualY").removeClass("has-error");
    $("#groupCedula").removeClass("has-error");
    $("#groupFecha").removeClass("has-error");
    
}

function validar() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    removeError();
    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    var aux=$("#ano").val();
    var e=aux.length;
    if ($("#ano").val() === "" || isNaN($("#ano").val())) {
        $("#groupAno").addClass("has-error");
        validacion = false;
    }
    //var ja = ($("#modelo").val()).length;
    if ($("#modelo").val() === "" || ($("#modelo").val()).length >= 45) {
        $("#groupModelo").addClass("has-error");
        validacion = false;
    }
    if ($("#placa").val() === "" || $("#placa").val().length >=30) {
        $("#groupPlaca").addClass("has-error");
        validacion = false;
    }
    if ($("#color").val() === "" || $("#color").val().length >=30) {
        $("#groupColor").addClass("has-error");
        validacion = false;
    }
    
    if ($("#puntuacion").val() === "" || $("#puntuacion").val().length >=30) {
        $("#groupPuntuacion").addClass("has-error");
        validacion = false;
    }
    
      if ($("#estado").val() === "" || $("#estado").val().length >=30) {
        $("#groupEstado").addClass("has-error");
        validacion = false;
    }
    
    if ($("#ubicacionActualX").val() === "" || $("#ubicacionActualX").val().length >=30) {
        $("#groupubicacionActualX").addClass("has-error");
        validacion = false;
    }
    
    if ($("#ubicacionActualY").val() === "" || $("#ubicacionActualY").val().length >=30) {
        $("#groupubicacionActualY").addClass("has-error");
        validacion = false;
    }
    
      if ($("#cedula").val() === "" || $("#cedula").val().length >=30) {
        $("#cedula").addClass("has-error");
        validacion = false;
    }
    
    if ($("#dpFecha").data('date') === "") {
        $("#groupFecha").addClass("has-error");
        validacion = false;
    }

    return validacion;
}

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function eliminarVehiculos(idVehiculo) {
    mostrarModal("myModal", "Espere por favor..", "Se esta eliminando al vehiculo seleccionado");
    //Se envia la información por ajax
    $.ajax({
        url: 'VehiculosServlet',
        data: {
            accion: "eliminarVehiculos",
            idVehiculo: idVehiculo
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModal","Resultado acción","Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se cambia el mensaje del modal por la respuesta del ajax
            var respuestaTxt = data.substring(2);
            var tipoRespuesta = data.substring(0, 2);
            if (tipoRespuesta === "E~") {
                cambiarMensajeModal("myModal","Resultado acción",respuestaTxt);
            }else{
                setTimeout(consultarVehiculos, 3000);// hace una pausa y consulta la información de la base de datos
            }
        },
        type: 'POST',
        dataType: "text"
    });
}

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function consultarVehiculoByPlaca(idVehiculo) {
    mostrarModal("myModal", "Espere por favor..", "Consultando al vehiculo seleccionado");
    //Se envia la información por ajax
    $.ajax({
        url: 'VehiculosServlet',
        data: {
            accion: "consultarVehiculosByPlaca",
            idVehiculo: idVehiculo
        },
        error: function () { //si existe un error en la respuesta del ajax
            cambiarMensajeModal("myModal","Resultado acción","Se presento un error, contactar al administador");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            // se oculta el mensaje de espera
            ocultarModal("myModal");
            limpiarForm();
            //se muestra el formulario
            $("#myModalFormulario").modal();
            
            //************************************************************************
            //carga información de la persona en el formulario
            //************************************************************************
            //se indicar que la cédula es solo readOnly
            $("#placa").attr('readonly', 'readonly');
            
            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#vehiculosAction").val("modificarVehiculo"); 
            
            //se carga la información en el formulario
            $("#ano").val(data.ano);
            $("#modelo").val(data.modelo);
            $("#placa").val(data.placa);
            $("#color").val(data.color);
            $("#puntuacion").val(data.puntuacion);
            $("#estado").val(data.estado);
            $("#ubicacionActualX").val(data.ubicacionActualX);
            $("#ubicacionActualY").val(data.ubicacionActualY);
            $("#cedula").val(data.cedula);
            
            //carga de fecha
            var fecha = new Date(data.fecNacimiento);
            var lal = fecha.getMonth()+1;
            
            // este es el proyecto final
            
            var fechatxt = fecha.getDate() +"/" + lal + "/" + fecha.getFullYear();
            $("#dpFechaNacimiento").data({date: fechatxt});
            $("#dpFechaNacimientoText").val(fechatxt);
            
         
        },
        type: 'POST',
        dataType: "json"
    });
}


//******************************************************************************
//******************************************************************************

function mostrarMensaje(classCss, msg, neg) {
    //se le eliminan los estilos al mensaje
    $("#mesajeResult").removeClass();

    //se setean los estilos
    $("#mesajeResult").addClass(classCss);

    //se muestra la capa del mensaje con los parametros del metodo
    $("#mesajeResult").fadeIn("slow");
    $("#mesajeResultNeg").html(neg);
    $("#mesajeResultText").html(msg);
    $("#mesajeResultText").html(msg);
}

//******************************************************************************
//******************************************************************************

function limpiarForm() {
    //setea el focus del formulario
    $('#placa').focus();
    $("#placa").removeAttr("readonly"); //elimina el atributo de solo lectura
    
    //se cambia la accion por agregarPersona
    $("#vehiculosAction").val("agregarVehiculo"); 
    $("#placa").val("");
    $("#ano").val("");
    $("#modelo").val("");
    $("#color").val("");
    $("#puntuacion").val("");
    $("#estado").val("");
    $("#ubicacionActualX").val("");
    $("#ubicacionActualY").val("");
    $("#cedula").val("");
    
    

    //esconde el div del mensaje
    mostrarMensaje("hiddenDiv", "", "");

    //Resetear el formulario
    $('#formVehiculos').trigger("reset");
    
    $('#formVehiculos1').trigger("reset");
}




