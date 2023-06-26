const TapaModal = document.getElementById("#Tapa");
const btnTapaNuevaGuardar = document.querySelector(".btn-enviar-correo");

/* cancelacion Modal*/

$("#btnModal").on("click", function () {
  // console.log("llega hasta aqui")
  $("#Tapa").modal({ dismissible: false }).modal("open");
});

//cierra el modal y lo vacía
$(".close-modal-Tapa").on("click", function () {
  // $("#data").empty();
  // console.log("llega hasta aqui")
  $("#Tapa").modal("close");
});

// $('.carousel.carousel-slider').carousel({fullWidth: true});

$(document).ready(function () {
  $(".carousel").carousel();

  setInterval(function () {
    $(".carousel").carousel("next");
  }, 9000);
});

$(document).ready(function () {
  $(".btn-enviar-correo").click(() => {
    let nombre = $("#nombre").val();
    let descripcion_espanol = $("#descripcion_espanol").val();
    let ingredientes = $("#ingredientes").val();
    let foto = $("#foto").val();
    let top = $("#top").val();
    console.log("llego aqui con " + top);
    // let idTipoUsuario = $("#idTipoUsuario").prop("checked") ? 2 : 1; //produccion / prueba
    // let eventoUrl = $("#EventoUrl").val();
    // let params = {};
    // params.idTipoUsuario = idTipoUsuario;
    // params.eventoUrl = eventoUrl;
    // params.colorHeader = colorH;
    // params.colorPortal = colorP;

    // sendData(params);
  });
});

$(document).ready(function () {
  $("select").material_select();
});

$(document).ready(function () {
  $("#formularioTapa").validate({
    rules: {
      nombre: {
        required: true,
        minlength: 5
      },
      descripcion_espanol: {
        required: true,
        minlength: 5
      },
      ingredientes: {
        required: true,
        minlength: 5
      },
      top: {
        required: true,
      }
    },
    messages: {
      nombre: {
        required: "Por favor ingresa tu nombre completo",
        minlength: "Tu nombre debe ser de no menos de 5 caracteres",
      },
      descripcion_espanol: {
        required: "Por favor ingresa tu nombre completo"
      },
      ingredientes: {
        required: "Por favor ingresa tu nombre completo",
        minlength: "Tu nombre debe ser de no menos de 5 caracteres"
      },
      top: {
        required: "Por favor ingresa tu nombre completo"      }
    },
    errorElement: "em",
    errorPlacement: function (error, element) {
      // Add the `help-block` class to the error element
      error.addClass("help-block");

      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.parent("label"));
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element)
        .parents(".col-sm-10")
        .addClass("has-error")
        .removeClass("has-success");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element)
        .parents(".col-sm-10")
        .addClass("has-success")
        .removeClass("has-error");
    },
  });
});
