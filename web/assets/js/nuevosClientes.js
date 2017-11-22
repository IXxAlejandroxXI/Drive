var x;
var y;
var ult;
var cliente;
//$(function () {
//    
//    //agrega los eventos las capas necesarias
//    $("#ingreso").click(function () {
//        enviar();    
//    });
//    
//});

//******************************************************************************
//******************************************************************************
//El metodo enviar envia la información del login
//******************************************************************************
//******************************************************************************
function enviar2() {
   // var g = prueba();
    pos();
    if (validar()) {
        //Se envia la información por ajax
        console.log($("#usuario").val());
        $.ajax({
            url: 'ClientesServlet',
            data: {
                accion: "agregarCliente",
                usuario: $("#usuario").val(),
                contrasena: $("#contrasena").val(),
                nombre: $("#nombre").val(),
                apellidos: $("#apellidos").val(),
                correo: $("#correo").val(),
                fechaNacimiento: $("#dpFechaNacimiento").data('date'),
                direccionx: x,
                direcciony: y,
                telefono: $("#telefono").val(),
                ultimousuario: "",
                fecha: new Date()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    document.getElementById('ingreso3').innerHTML="Ingresado correctamente!";
                            
                            if (tipoRespuesta === "E~") {
                        
                    } else {
                        document.getElementById('ingreso3').innerHTML="Problema al ingresar!";
                    }
                }

            },
            type: 'POST'
        });
    } else {
       document.getElementById('ingreso3').innerHTML="Problema al ingresar!";
    }
}


function validar() {
    var validacion = true;

    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    //$("#groupUsario").removeClass("has-error");
    //$("#groupPassword").removeClass("has-error");

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if ($("#usuario").val() === "") {
        $("#groupUsario").addClass("has-error");
        validacion = false;
    }
    if ($("#password").val() === "") {
        $("#groupPassword").addClass("has-error");
        validacion = false;
    }
    return validacion;
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

    //Resetear el formulario
    $('#formLogin').trigger("reset");
}

function pos(){
    x = posicionx();
    
    y = posiciony();
}
function client(usuario){
    consultarClienteByID(usuario);
    return cliente;
}