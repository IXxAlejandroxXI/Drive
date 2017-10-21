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
    consultarClientes();
});

//******************************************************************************
//******************************************************************************
//metodos para consultas el listado de las personas
//******************************************************************************
//******************************************************************************

function consultarClientes() {
    mostrarModal("myModal", "Espere por favor..", "Consultando la información de clientes en la base de datos");
    //Se envia la información por ajax
    $.ajax({
        url: 'ClientesServlet',
        data: {
            accion: "consultarClientes"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de los clientes en la base de datos");
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
    $("#tablaClientes").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaClientes").append(head); 
    row.append($("<th><b>USUARIO</b></th>"));
    row.append($("<th><b>CONTRASEÑA</b></th>"));
    row.append($("<th><b>NOMBRE</b></th>"));
    row.append($("<th><b>APELLIDOS</b></th>"));
    row.append($("<th><b>CORREO ELECTRONICO</b></th>"));
    row.append($("<th><b>FEC. NAC.</b></th>"));
    row.append($("<th><b>DIRECCION X</th>"));
    row.append($("<th><b>DIRECCION Y</b></th>"));
    row.append($("<th><b>TEL TRABAJO</b></th>"));
    row.append($("<th><b>ULT. USUARIO</b></th>"));
    
    //carga la tabla con el json devuelto
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFila(dataJson[i]);
    }
}

function dibujarFila(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de una persona
    var user = rowData.usuario;
    var row = $("<tr />");
    $("#tablaClientes").append(row); 
    row.append($("<td>" + rowData.usuario + "</td>"));
    row.append($("<td>" + rowData.contrasena + "</td>"));
    row.append($("<td>" + rowData.nombre + "</td>"));
    row.append($("<td>" + rowData.apellidos + "</td>"));
    row.append($("<td>" + rowData.correo + "</td>"));
    row.append($("<td>" + rowData.fechaNacimiento + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarClienteByID(\'' + user + '\');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarCliente(\'' + user + '\');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
    row.append($("<td>" + rowData.direccionX + "</td>"));
    row.append($("<td>" + rowData.direccionY + "</td>"));
    row.append($("<td>" + rowData.nombre + "</td>"));
    row.append($("<td>" + rowData.telefonoTrabajo + "</td>"));
    row.append($("<td>" + rowData.ultimoUsuario + "</td>"));
}

//******************************************************************************
//******************************************************************************
//El metodo enviar funciona tanto para el insertar como para el modificar
//******************************************************************************
//******************************************************************************

function enviar() {
    if (validar()) {
        //Se envia la información por ajax
        console.log($("#usuario").val());
        $.ajax({
            url: 'ClientesServlet',
            data: {
                accion: $("#clientesAction").val(),
                usuario: $("#usuario").val(),
                contrasena: $("#contrasena").val(),
                nombre: $("#nombre").val(),
                apellidos: $("#apellidos").val(),
                correo: $("#correo").val(),
                fechaNacimiento: $("#dpFechaNacimiento").data('date'),
                direccionx: $("#direccionx").val(),
                direcciony: $("#direcciony").val(),
                telefono: $("#telefono").val(),
                ultimousuario: $("#ultimousuario").val(),
                fecha: new Date()
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
                    consultarClientes();
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
    $("#groupUsuario").removeClass("has-error");
    $("#groupContrasena").removeClass("has-error");
    $("#groupNombre").removeClass("has-error");
    $("#groupApellidos").removeClass("has-error");
    $("#groupCorreo").removeClass("has-error");
    $("#groupDireccionX").removeClass("has-error");
    $("#groupDireccionY").removeClass("has-error");
    $("#groupTelefonoTrabajo").removeClass("has-error");
    $("#groupUltimoUsuario").removeClass("has-error");
    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#usuario").val() === "") {
        $("#groupUsuario").addClass("has-error");
        validacion = false;
    }
    if ($("#contrasena").val() === "") {
        $("#groupContrasena").addClass("has-error");
        validacion = false;
    }
    if ($("#nombre").val() === "") {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#apellidos").val() === "") {
        $("#groupApellidos").addClass("has-error");
        validacion = false;
    }
    if ($("#correo").data('date') === "") {
        $("#groupCorreo").addClass("has-error");
        validacion = false;
    }
    if ($("#direccionx").val() === "") {
        $("#groupDireccionX").addClass("has-error");
        validacion = false;
    }
    if ($("#direcciony").data('date') === "") {
        $("#groupDireccionY").addClass("has-error");
        validacion = false;
    }
    if ($("#telefono").val() === "") {
        $("#groupTelefonoTrabajo").addClass("has-error");
        validacion = false;
    }
    if ($("#ultimousuario").data('date') === "") {
        $("#groupUltimoUsuario").addClass("has-error");
        validacion = false;
    }

    return validacion;
}

//******************************************************************************
//******************************************************************************
//metodos para eliminar personas
//******************************************************************************
//******************************************************************************

function eliminarCliente(idCliente) {
    mostrarModal("myModal", "Espere por favor..", "Se esta eliminando al cliente seleccionado");
    //Se envia la información por ajax
    $.ajax({
        url: 'ClientesServlet',
        data: {
            accion: "eliminarClientes",
            idCliente: idCliente
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
                setTimeout(consultarClientes, 3000);// hace una pausa y consulta la información de la base de datos
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

function consultarClienteByID(idCliente) {
    mostrarModal("myModal", "Espere por favor..", "Consultando la persona seleccionada");
    //Se envia la información por ajax
    $.ajax({
        url: 'ClientesServlet',
        data: {
            accion: "consultarClientesByID",
            idCliente: idCliente
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
            $("#usuario").attr('readonly', 'readonly');
            
            //se modificar el hidden que indicar el tipo de accion que se esta realizando
            $("#clientesAction").val("modificarCliente"); 
            
            //se carga la información en el formulario
            $("#usuario").val(data.usuario);
            $("#contrasena").val(data.contrasena);
            $("#nombre").val(data.nombre);
            $("#apellidos").val(data.apellidos);
            $("#correo").val(data.correo);
            
            //carga de fecha
            var fecha = new Date(data.fechaNacimiento);
            
            
            var fechatxt = fecha.getDate() +"/" +fecha.getMonth()+1 + "/" + fecha.getFullYear();
            $("#dpFechaNacimiento").data({date: fechatxt});
            $("#dpFechaNacimientoText").val(fechatxt);
            
            //$("#dpFechaNacimiento")$('.datepicker').datepicker('update', new Date(2011, 2, 5));
            $("#direccionx").val(data.direccionX);
            $("#direcciony").val(data.direccionY);
            $("#telefono").val(data.telefonoTrabajo);
            $("#ultimousuario").val(data.ultimoUsuario);
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
    $('#usuario').focus();
    $("#usuario").removeAttr("readonly"); //elimina el atributo de solo lectura
    
    //se cambia la accion por agregarPersona
    $("#clientesAction").val("agregarCliente"); 

    //esconde el div del mensaje
    mostrarMensaje("hiddenDiv", "", "");

    //Resetear el formulario
    $('#formClientes').trigger("reset");
}
$(function() {
    $("tablaClientes").pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});

