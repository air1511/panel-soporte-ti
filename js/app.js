
alert("JavaScript cargado");

document.getElementById("btnAgregar").addEventListener("click", function () {

    let ticket = document.getElementById("txtTicket").value;

    if (ticket === "") {
        alert("Capture un ticket");
        return;
    }

    let nuevo = document.createElement("li");
    nuevo.textContent = ticket;

    document.getElementById("listaTickets").appendChild(nuevo);

    document.getElementById("txtTicket").value = "";

});

$("#txtTicket").keyup(function(){

    let texto = $(this).val();

    $("#contador").text(texto.length);

});

$("#txtTicket").keydown(function(){

    console.log("Tecla presionada");

});

$(document).on("mouseover", "li", function(){

    $(this).css("background-color","yellow");

});

$(document).on("mouseout", "li", function(){

    $(this).css("background-color","");

});

$(document).on("dblclick","li",function(){

    $(this).slideToggle();

});

$("#txtTicket").keydown(function(){

    $("#mensajeTecla").text("Se está presionando una tecla...");

});