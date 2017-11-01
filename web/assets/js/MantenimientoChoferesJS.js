//******************************************************************************
// // Funcion para generar el datetimepicker
// Además de agregar los eventos a las respectivas etiquetas
//******************************************************************************
$(function () {
    //Genera el datapicker
    $('#fechanacimiento').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
     $('#fechavencimiento').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('#fecha').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    //agrega los eventos las capas necesarias
    $("#enviar").click(function () {
        enviar();
    });

    //agrega los eventos las capas necesarias
    $("#cancelar").click(function () {
        limpiarForm();
        $("#myModalFormulario").modal("hide");
    });
    
    $("#btMostarForm").click(function () {
        limpiarForm();
    });
    
    
});

//******************************************************************************
//Se ejecuta cuando la página esta completamente cargada
//******************************************************************************

$(document).ready(function () {
    consultarChoferes();
});

//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de las personas
//******************************************************************************
//******************************************************************************

function consultarChoferes() {
    mostrarModal("myModal", "Espere por favor..", "Consultando la información de clientes en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'ChoferesServlet',
        data: {
            accion: "consultarChoferes"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los choferes en la base de datos");
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

function dibujarTabla(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaChoferes").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaChoferes").append(head); 
    row.append($("<th><b>CEDULA</b></th>"));
    row.append($("<th><b>TIPO DE LICENCIA</b></th>"));
    row.append($("<th><b>FECHA DE NACIMIENTO</b></th>"));
    row.append($("<th><b>FECHA VENCIMIENTO LICENCIA</b></th>"));
    row.append($("<th><b>CHOFER ACTUAL</b></th>"));
    row.append($("<th><b>ULTIMO USUARIO</th>"));
    row.append($("<th><b>FECHA</b></th>"));
    row.append($("<th><b>ADMINISTRADOR</b></th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }
}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona
    
    var row = $("<tr />");
    $("#tablaChoferes").append(row); 
    row.append($("<td>" + rowData.cedula + "</td>"));
    row.append($("<td>" + rowData.tipoLicencia + "</td>"));
    row.append($("<td>" + rowData.fechaNacimiento + "</td>"));
    row.append($("<td>" + rowData.fechaVencimientoLicencia + "</td>"));
    row.append($("<td>" + rowData.choferActual + "</td>"));
    row.append($("<td>" + rowData.ultimoUsuario + "</td>"));
    row.append($("<td>" + rowData.fecha + "</td>"));
    row.append($("<td>" + rowData.administrador + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarChoferByID(\'' + rowData.cedula + '\');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarChofer(\'' + rowData.cedula + '\');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
    
}

//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
//******************************************************************************

function enviar() {
    if (validar()) {
        //Se envia la información por ajax
        //console.log($("#cedula").val());
        $.ajax({
            url: 'ChoferesServlet',
            data: {
                accion: $("#choferAction").val(),
                cedula: $("#cedula").val(),
                tipoLicencia: $("#tipoLicencia").val(),
                fechaNacimiento: $("#fechanacimientotext").data('date'),
                fechaVencimientoLicencia: $("#fechavencimientotext").data('date'),
                choferActual: $("#SeleccionChoferActual").val(),
                ultimoUsuario: $("#ultimousuario").val(),
                fecha: $("#fechatext").data('date'),
                administrador: $("#SeleccionAdministrador").val()
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
                    consultarChoferes();
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                    }
                }

            },
            type: 'POST'
        });
    } else {
        mostrarMensaje("alert alert-danger", "Debe digitar los campos del formulario", "Error!");
    }
}

function validar() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupCedula").removeClass("has-error");
    $("#groupTipoLicencia").removeClass("has-error");
    $("#groupFechaNacimiento").removeClass("has-error");
    $("#groupFechaVencimientoLicencia").removeClass("has-error");
    $("#groupChoferActual").removeClass("has-error");
    $("#groupUltimoUsuario").removeClass("has-error");
    $("#groupFecha").removeClass("has-error");
    $("#groupAdministrador").removeClass("has-error");

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#cedula").val() === "") {
        $("#groupCedula").addClass("has-error");
        validacion = false;
    }
    if ($("#tipoLicencia").val() === "") {
        $("#groupTipoLicencia").addClass("has-error");
        validacion = false;
    }
    if ($("#fechaNacimiento").data('date') === "") {
        $("#groupFechaNacimiento").addClass("has-error");
        validacion = false;
    }
    if ($("#fechaVencimientoLicencia").date ('date') === "") {
        $("#groupFechaVencimientoLicencia").addClass("has-error");
        validacion = false;
    }
    if ($("#choferActual").val() === "") {
        $("#groupChoferActual").addClass("has-error");
        validacion = false;
    }
    if ($("#ultimoUsuario").val() === "") {
        $("#groupUltimoUsuario").addClass("has-error");
        validacion = false;
    }
    if ($("#fecha").data('date') === "") {
        $("#groupFecha").addClass("has-error");
        validacion = false;
    }
    if ($("#administrador").val() === "") {
        $("#groupAdministrador").addClass("has-error");
        validacion = false;
    }
    return validacion;
}

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function eliminarChofer(cedulaChofer) {
    mostrarModal("myModal", "Espere por favor..", "Se esta eliminando al chofer seleccionado");
    //Se envia la información por ajax
    $.ajax({
        url: 'ChoferesServlet',
        data: {
            accion: "eliminarChoferes",
            cedula: cedulaChofer
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
                setTimeout(consultarChoferes, 3000);// hace una pausa y consulta la información de la base de datos
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

function consultarChoferByID(cedula) {
    mostrarModal("myModal", "Espere por favor..", "Consultando la persona seleccionada");
    //Se envia la información por ajax
    $.ajax({
        url: 'ChoferesServlet',
        data: {
            accion: "consultarCedulaChofer",
            cedula: cedula
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
            $("#cedula").attr('readonly', 'readonly');
            
            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#choferesAction").val("modificarChofer"); 
            
            //se carga la información en el formulario
            $("#cedula").val(data.cedula);
            $("#tipoLicencia").val(data.tipoLicencia);
            
            var fecha = new Date(data.fechaNacimiento);
            var fechatxt = fecha.getDate() +"/" +fecha.getMonth()+1 + "/" + fecha.getFullYear();
            $("#FechaNacimiento").data({date: fechatxt});
            $("#Fechanacimientotext").val(fechatxt);
            
            var fecha1 = new Date(data.fechaVencimiento);
            var fechatxt1 = fecha1.getDate() +"/" +fecha1.getMonth()+1 + "/" + fecha1.getFullYear();
            $("#FechaVencimiento").data({date: fechatxt1});
            $("#Fechavencimientotext").val(fechatxt1);
            
            $("#choferActual").val(data.choferActual);
            $("#ultimoUsuario").val(data.ultimoUsuario);
            
            var fecha2 = new Date(data.fecha);
            var fechatxt2 = fecha2.getDate() +"/" +fecha2.getMonth()+1 + "/" + fecha2.getFullYear();
            $("#Fecha").data({date: fechatxt2});
            $("#Fechatext").val(fechatxt2);
            
            $("#administrador").val(data.administrador);
            
            //carga de fecha
            
            //$("#dpFechaNacimiento")$('.datepicker').datepicker('update', new Date(2011, 2, 5));
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
    $('#cedula').focus();
    $("#cedula").removeAttr("readonly"); //elimina el atributo de solo lectura
    
    //se cambia la accion por agregarPersona
    $("#choferesAction").val("agregarChofer"); 

    //esconde el div del mensaje
    mostrarMensaje("hiddenDiv", "", "");

    //Resetear el formulario
    $('#formChoferes').trigger("reset");
}
$(function() {
    $("tablaChoferes").pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});




