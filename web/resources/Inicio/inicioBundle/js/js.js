const TapaModal = document.getElementById("#Tapa");
const btnTapaNueva = document.querySelector("#btnModal");

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