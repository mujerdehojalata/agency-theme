$(function() {  
    var header = $("#mainNav");
    // obtenemos el height + padding de la sección 1
    var services = $("#services").outerHeight();
    // obtenemos el height + padding de la sección última
    // y le sumamos el de la sección 1
    var footer = $("footer").outerHeight() + services;
    // cada vez que se produzca scroll en la ventana
    $(window).scroll(function(event) {
        // scrollTop la posición del elemento
        height = $(event.target).scrollTop();
        // dependiendo el lugar de la pantalla
        // modificamos la clase del header
        // para cambiar su color de fondo
        if (height > -1 && height < services) {
            header.addClass("nav-transparent").removeClass("nav-black");
        } else {
            header.addClass("nav-black").removeClass("nav-transparent");
        }
    });
});