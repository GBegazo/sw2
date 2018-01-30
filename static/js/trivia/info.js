$(document).ready(function () {

    var preguntas = [];
    var respuestas = [];
    var rel = [];
    var docs2 = [""];
    //Remplazar el 127.0.0.1 por el link publico
    var url = "https://mundialrusiasw2.herokuapp.com/api/trivia";
    // var url = "http://127.0.0.1:8000/api/trivia"
    var jqxhr = $.get(url, function () {
        console.log("enviado");
    })
        .done(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].hasOwnProperty('descrespuesta')) {
                    respuestas.push(data[i]);
                }
                if (data[i].hasOwnProperty('descpregunta')) {
                    preguntas.push(data[i]);
                }
                if (data[i].hasOwnProperty('res_val')) {
                    rel.push(data[i]);
                }
            }
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            alasql.fn.extend = alasql.utils.extend;
            for (var j = 0; j < preguntas.length; j++) {
                var res1 = alasql(
                    `
                    select
                    res.descrespuesta,
                    rel.res_val
                    FROM ? rel
                    join ? res on res.id = rel.idrespuesta
                    where rel.idpregunta  = ?
                    `, [rel, respuestas, preguntas[j].id]);
                index = res1.findIndex(x => x.res_val==true);
                var array = $.map(res1, function (value, index) {
                    return [value.descrespuesta];
                });
                docs2.push({
                    quest : preguntas[j].descpregunta,
                    ans : array,
                    res : index
                });
            }
            console.log(docs2);
            localStorage.setItem("docs", JSON.stringify(docs2));
            $('#jugar').removeClass("invisible");
        });

    

});