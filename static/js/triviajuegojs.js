
$(function () {
    // obteber el doc de local storage
    var docs = JSON.parse(localStorage.getItem("docs"));
    var now = 0;
    var loading = $('#loadbar').hide();
    $(document)
        .ajaxStart(function () {
            loading.show();
        }).ajaxStop(function () {
            loading.hide();
        });

    ///////////
    var ancho = 0;
    console.log(ancho);
    /////////////

    $("label.btn").on('click', function () {
        if (now > 9) {
            console.log("no es en carga");
            alert("No mas preguntas");
        } else {
            /////////
            if (now < 9) {
                carga();
            }

            ancho = ancho + 10;
            document.getElementById("progresopreg").style.width = ancho + "%";
            document.getElementById("progresopreg").innerHTML = ancho + "%";
            //////////
            var choice = $(this).find('input:radio').val();
            $('#loadbar').show();
            $('#quiz').fadeOut();
            now++;
            setTimeout(function () {
                $("#answer").html($(this).checking(choice));
                $('#quiz').show();
                $('#loadbar').fadeOut();
                $(this).changeQuestion();
                $(this).changeOptions();
                $("input:radio").attr("checked", false);
                $(".foc").removeClass("active");
                $(".foc").removeClass("focus");
                /* something else */
            }, 1500);
        }
    });

    console.log("paso2222");
    var auxtemp = document.getElementById("temporizador").innerHTML;
    console.log(auxtemp);
    if (auxtemp == 15) {
        console.log("paso");

    }



    //el id de la respuesta es 3 
    $.fn.changeQuestion = function (preg) {
        $("#pregunta").html('<span class="label label-warning" id="qid">' + (now + 1) + '</span>' + docs[now + 1].quest);
    };

    $.fn.changeOptions = function (preg) {
        for (var i = 1; i <= 4; i++) {
            $("#p" + i).html('<span class="btn-label"><i class="glyphicon glyphicon-chevron-right">' +
                '</i></span> <input type="radio" name="q_answer" value="' + (i - 1) + '">' + docs[now + 1].ans[i - 1]);
        }
    };


    var auxpuntos = 0;
    $.fn.checking = function (ck) {
        console.log("Marcado : " + ck);
        console.log("Res : " + docs[now].res);
        if (ck != docs[now].res) {
            return 'INCORRECTO';
        } else {
            auxpuntos = auxpuntos + 10;
            document.getElementById("puntos").innerHTML = auxpuntos + " pts";
            return 'CORRECTO';
        }
    };



    var cronometro;

    function carga() {
        var contador_s = 1;
        //     progressbar.value = 0;

        clearInterval(cronometro);
        cronometro = setInterval(
            function () {
                if (contador_s > 15) {


                    console.log("nowww" + now);
                    if (now == (docs.length -1)) {

                        ancho = ancho + 10;
                        document.getElementById("progresopreg").style.width = ancho + "%";
                        document.getElementById("progresopreg").innerHTML = ancho + "%";

                        console.log("es en carga");
                        alert("No mas preguntas");

                        clearInterval(cronometro);


                        now++;
                    } else if (now <= (docs.length -2)) {
                        /////////
                        clearInterval(cronometro);
                        carga();
                        ancho = ancho + 10;
                        document.getElementById("progresopreg").style.width = ancho + "%";
                        document.getElementById("progresopreg").innerHTML = ancho + "%";
                        //////////
                        //var choice = $(this).find('input:radio').val();
                        var choice = 5;
                        $('#loadbar').show();
                        $('#quiz').fadeOut();
                        now++;
                        setTimeout(function () {
                            $("#answer").html('INCORRECTO');
                            $('#quiz').show();
                            $('#loadbar').fadeOut();
                            $(this).changeQuestion();
                            $(this).changeOptions();
                            $("input:radio").attr("checked", false);
                            $(".foc").removeClass("active");
                            $(".foc").removeClass("focus");

                        }, 1500);
                    }



                } else {

                    document.getElementById("temporizador").innerHTML = contador_s;
                    contador_s++;


                    //      progress = document.getElementById("progressbar");
                    //      progressbar.value = progress.value+1;

                }
            }
            , 1000);

    };
    carga();



});

