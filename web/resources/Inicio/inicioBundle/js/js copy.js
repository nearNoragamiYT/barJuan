const TapaModal = document.getElementById("#Tapa");
const btnTapaNuevaGuardar = document.querySelector(".btn-enviar-correo");

/* cancelacion Modal*/

$("#btnModal").on("click", function () {
    // console.log("llega hasta aqui")
    $("#Tapa").modal({ dismissible: false }).modal('open');
});

//cierra el modal y lo vacía
$(".close-modal-Tapa").on("click", function () {
    // $("#data").empty();
    // console.log("llega hasta aqui")
    $("#Tapa").modal("close");
});

// $('.carousel.carousel-slider').carousel({fullWidth: true});


$(document).ready(function(){
    $('.carousel').carousel();

    setInterval(function(){
        $('.carousel').carousel('next');
    }, 9000);
  });

  $(document).ready(function(){
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
  
  $(document).ready(function() {
    $('select').material_select();
  });
  
  $(document).ready(function() {
  $("#formulario-Tapa").validate({
    rules: {
      nombre : {
        required: true,
        minlength: 3
      },
      descripcion_espanol: {
        required: true,
        minlength: 4
      },
      ingredientes: {
        required: true
        // email: true
      },
      top: {
        required: true
        // email: true
      },
      // weight: {
      //   required: {
      //     depends: function(elem) {
      //       return $("#age").val() > 50
      //     }
      //   },
      //   number: true,
      //   min: 0
      // }
    },
    messages : {
      nombre: {
        minlength: "minimo de 3 caracteres",
        required: "ingrese un nombre"
      },
      descripcion_espanol: {
        minlength: "ingrese una descripcion",
        required: "Please enter your age"
        // number: "Please enter your age as a numerical value",
        // min: "You must be at least 18 years old"
      },
      ingredientes: {
        required: "ingrese un ingrediente",
        minlength: "Nminimo de 3 caracteres"
        // email: "The email should be in the format: abc@domain.tld"
      },
      top: {
        required: "People with age over 50 have to enter their weight",
      }
    }
  });
});