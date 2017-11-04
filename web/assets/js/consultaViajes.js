/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cedula;
var numero;

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
     
    });
    
    $("#buscarNumero").click(function (){
        busqueda();
    });
    
    
});

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************

$(document).ready(function () {
    consultarViajes();
    paginacion();
});

//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de las personas
//******************************************************************************
//******************************************************************************

function consultarViajes() {
    mostrarModal("myModal", "Espere por favor..", "Consultando la información de viajes en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'ViajesServlet',
        data: {
            accion: "consultarViajes"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los viajes en la base de datos");
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


function buscar(numero){
    $.ajax({
        url: 'ViajesServlet',
        data: {
            accion: "consultarViajes"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los viajes en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            $("#tablaViajes").html("");
            /*for (var i=0;i<data.length;i++){
                if(data[i].nombre.indexOf(nombre)>-1)
                dibujarFila(data[i]);
            }*/
            dibujarTablaBuscar(data,numero);
            // se oculta el modal esta funcion se encuentra en el utils.js
            ocultarModal("myModal");
        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaViajes").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var body = $("<tbody />")
    var row = $("<tr />");
    head.append(row);
    $("#tablaViajes").append(head);
    row.append($("<th><b>NÚMERO DE VIAJE</b></th>"));
    row.append($("<th><b>USUARIO</b></th>"));
    row.append($("<th><b>CEDULA DEL CHOFER</b></th>"));
    row.append($("<th><b>PLACA</b></th>"));
    row.append($("<th><b>FECHA</b></th>"));
    row.append($("<th><b>PUNTO INICIO X</b></th>"));
    row.append($("<th><b>PUNTO INICIO Y</b></th>"));
    row.append($("<th><b>DURACIÓN</b></th>"));
    row.append($("<th><b>MONTO</b></th>"));
    row.append($("<th><b>CALIFICACION</b></th>"));
     row.append($("<th><b>PUNTO FINAL X</b></th>"));
    row.append($("<th><b>PUNTO FINAL Y</th>"));
    $("#tablaViajes").append(body);
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {

        dibujarFila(dataJson[i]);
    }
    
    body.append("<tr><td colspan=4><div id=\"page-nav\"></div></tr></td>");
    paginacion();
}

function dibujarTablaBuscar(dataJson,numero) {
    //limpia la información que tiene la tabla
    $("#tablaViajes").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var body = $("<tbody />")
    var row = $("<tr />");
    head.append(row);
    $("#tablaViajes").append(head);
    row.append($("<th><b>NÚMERO DE VIAJE</b></th>"));
    row.append($("<th><b>USUARIO</b></th>"));
    row.append($("<th><b>CEDULA DEL CHOFER</b></th>"));
    row.append($("<th><b>PLACA</b></th>"));
    row.append($("<th><b>FECHA</b></th>"));
    row.append($("<th><b>PUNTO DE INCIO X</b></th>"));
    row.append($("<th><b>PUNTO INICIO Y</b></th>"));
    row.append($("<th><b>DURACIÓN</b></th>"));
    row.append($("<th><b>MONTO</b></th>"));
    row.append($("<th><b>CALIFICACIÓN</b></th>"));
    row.append($("<th><b>PUNTO FINAL X</b></th>"));
    row.append($("<th><b>PUNTO FINAL Y</b></th>"));
    
    $("#tablaViajes").append(body);
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        if(dataJson[i].numero.toUpperCase().indexOf(numero.toUpperCase())>-1){
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
    $("#tablaViajes").append(row);
     row.append($("<td>" + rowData.numero+ "</td>"));
    row.append($("<td>" + rowData.usuario+ "</td>"));
    row.append($("<td>" + rowData.cedula + "</td>"));
    row.append($("<td>" + rowData.placa + "</td>"));
    row.append($("<td>" + rowData.fecha + "</td>"));
    row.append($("<td>" + rowData.puntoInicioX + "</td>"));
    row.append($("<td>" + rowData.puntoInicioY + "</td>"));
    row.append($("<td>" + rowData.duracion+ "</td>"));
    row.append($("<td>" + rowData.monto + "</td>"));
    row.append($("<td>" + rowData.calificacion + "</td>"));
    row.append($("<td>" + rowData.puntoFinalX+ "</td>"));
    row.append($("<td>" + rowData.puntoFinalY+ "</td>"));
  
}


function busqueda() {
    var filter, table, tr, td, i;
    filter = $("#email").val().toUpperCase();
    table = document.getElementById("tablaViajes");
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
            url: 'ViajesServlet',
            data: {
                accion: $("#viajesAction").val(),
                numero:$("#numero").val(),
                usuario: $("#usuario").val(),
                cedula: $("#cedula").val(),
                placa: $("#placa").val(),
                fecha: $("#fecha").val(),
                puntoInicioX: $("#puntoInicioX").val(),
                puntoInicioY: $("#puntoInicioY").val(),
                duracion: $("#duracion").val(),
                monto: $("#monto").val(),
                calificacion: $("#calificacion").val(),
                ultimoUsuario: 'Linsey',
                fechaMod: $("#fecha").data('date'),
                puntoFinalX: $("#puntoFinalX").val(),
                puntoFinalY: $("#puntoFinalX").val(),
                
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
                        mostrarMensaje("alert alert-danger", "El viaje ya existe en la base de datos, numero duplicado", "Error!");
                        $("#groupNumero").addClass("has-error");
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

//function removeError(){
//    $("#groupAno").removeClass("has-error");
//    $("#groupModelo").removeClass("has-error");
//    $("#groupPlaca").removeClass("has-error");
//    $("#groupColor").removeClass("has-error");
//    $("#groupPuntuacion").removeClass("has-error");
//    $("#groupEstado").removeClass("has-error");
//    $("#groupUbicacionActualX").removeClass("has-error");
//    $("#groupUbicacionActualY").removeClass("has-error");
//    $("#groupCedula").removeClass("has-error");
//    $("#groupFecha").removeClass("has-error");
//    
//}


//******************************************************************************
//******************************************************************************


//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function consultarViajesByNumero(idViaje) {
    mostrarModal("myModal", "Espere por favor..", "Consultando el viaje seleccionado");
    //Se envia la información por ajax
    $.ajax({
        url: 'ViajesServlet',
        data: {
            accion: "consultarViajesByNumero",
            idViaje: idViaje
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
            $("#numero").attr('readonly', 'readonly');
            
            //se modificar el hidden que indicar el tipo de accion que se esta realizando
//            $("#viajesAction").val("modificarVehiculo"); 
            
            //se carga la información en el formulario
//            $("#ano").val(data.ano);
//            $("#modelo").val(data.modelo);
//            $("#placa").val(data.placa);
//            $("#color").val(data.color);
//            $("#puntuacion").val(data.puntuacion);
//            $("#estado").val(data.estado);
//            $("#ubicacionActualX").val(data.ubicacionActualX);
//            $("#ubicacionActualY").val(data.ubicacionActualY);
//            $("#cedula").val(data.cedula);
////            
//            //carga de fecha
//            var fecha = new Date(data.fecNacimiento);
//            var lal = fecha.getMonth()+1;
//            
//            // este es el proyecto final
//            
//            var fechatxt = fecha.getDate() +"/" + lal + "/" + fecha.getFullYear();
//            $("#dpFechaNacimiento").data({date: fechatxt});
//            $("#dpFechaNacimientoText").val(fechatxt);
//            
         
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
    
//    //se cambia la accion por agregarPersona
//    $("#vehiculosAction").val("agregarVehiculo"); 
//    $("#placa").val("");
//    $("#ano").val("");
//    $("#modelo").val("");
//    $("#color").val("");
//    $("#puntuacion").val("");
//    $("#estado").val("");
//    $("#ubicacionActualX").val("");
//    $("#ubicacionActualY").val("");
//    $("#cedula").val("");
//    
    

    //esconde el div del mensaje
    mostrarMensaje("hiddenDiv", "", "");

    //Resetear el formulario
    $('#formViajes').trigger("reset");
    
    $('#formViajes1').trigger("reset");
}





