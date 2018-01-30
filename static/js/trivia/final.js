$(document).ready(function () {
    var puntos = JSON.parse(localStorage.getItem("puntos"));
    $("#puntos").html(puntos);
});