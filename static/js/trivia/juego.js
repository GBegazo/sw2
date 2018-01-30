
$(function () {
    // obteber el doc de local storage
    //jcurahua Belcorp2018
    var docs = JSON.parse(localStorage.getItem("docs"));
    var cantPreguntas = (docs.length - 1);
    console.log("Cantidad de preguntas : " + cantPreguntas);
    var now = 0;
    var loading = $('#loadbar').hide();
    var auxpuntos = 0;
    var cronometro;
    var contador_s = 0;
    var tiempoXPregunta = 15;
    var ancho = 0;
    var evaluando = false;
    $(document)
        .ajaxStart(function () {
            loading.show();
        }).ajaxStop(function () {
            loading.hide();
        });

    //CARGAR LA PRIMERA PRGUNTA
    $("#pregunta").html('<span class="label label-warning" id="qid">' + 1 + '</span>' + docs[1].quest);
    for (var i = 1; i <= 4; i++) {
        $("#p" + i).html('<span class="btn-label"><i class="glyphicon glyphicon-chevron-right">' +
            '</i></span> <input type="radio" name="q_answer" value="' + (i - 1) + '">' + docs[1].ans[i - 1]);
    }

    $("label.btn").on('click', function () {
        $(this).evaluar($(this));
    });

    $.fn.changeQuestion = function (preg) {
        $("#pregunta").html('<span class="label label-warning" id="qid">' + (now + 1) + '</span>' + docs[now + 1].quest);
    };

    $.fn.changeOptions = function (preg) {
        for (var i = 1; i <= 4; i++) {
            $("#p" + i).html('<span class="btn-label"><i class="glyphicon glyphicon-chevron-right">' +
                '</i></span> <input type="radio" name="q_answer" value="' + (i - 1) + '">' + docs[now + 1].ans[i - 1]);
        }
    };

    $.fn.checking = function (ck) {
        if (ck == docs[now].res) {
            auxpuntos = auxpuntos + 10;
            document.getElementById("puntos").innerHTML = auxpuntos + " pts";
            return 'CORRECTO';
        } else {
            return 'INCORRECTO';
        }
    };

    //cronometro
    function carga() {
        contador_s = 0;
        document.getElementById("temporizador").innerHTML = contador_s;
        clearInterval(cronometro);
        cronometro = setInterval(
            function () {
                if (!evaluando) {
                    contador_s++;
                    document.getElementById("temporizador").innerHTML = contador_s;
                    if (contador_s >= tiempoXPregunta) {
                        $(this).evaluar();
                    }
                }
            }, 1000);
    };
    carga();

    $.fn.evaluar = function (elem) {
        evaluando = true;
        $('#loadbar').show();
        $('#quiz').fadeOut();
        now++;
        console.log("Estas en la pregunta : " + now);
        if (now > cantPreguntas) {
            localStorage.setItem("puntos", JSON.stringify(auxpuntos));
            window.location.href = "http://127.0.0.1:8000/juegosmundial/trivia/final";
        } else {
            ancho = ancho + (100 / cantPreguntas);
            document.getElementById("progresopreg").style.width = ancho + "%";
            document.getElementById("progresopreg").innerHTML = ancho + "%";
            if (elem) choice = elem.find('input:radio').val();

            if (now == cantPreguntas) {
                $("#answer").html($(this).checking(choice));
                setTimeout(function () {
                    localStorage.setItem("puntos", JSON.stringify(auxpuntos));
                    window.location.href = "http://127.0.0.1:8000/juegosmundial/trivia/final";
                }, 1500);
            } else {
                var choice;
                setTimeout(function () {
                    $("#answer").html($(this).checking(choice));
                    $('#quiz').show();
                    $('#loadbar').fadeOut();
                    $(this).changeQuestion();
                    $(this).changeOptions();
                    $("input:radio").attr("checked", false);
                    $(".foc").removeClass("active");
                    $(".foc").removeClass("focus");
                    contador_s = 0;
                    evaluando = false;
                    $(".pg").removeClass("progress-bar");
                    setTimeout(function () {
                        $(".pg").addClass("progress-bar");
                    }, 100);
                    document.getElementById("temporizador").innerHTML = contador_s;

                }, 1000);
            }
        }
    }
});

