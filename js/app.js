//eventos
$('.hidden2').hide();


//

var json = $.getJSON("https://raw.githubusercontent.com/43D/infographic_ibge/master/js/ibge.json", function(json) {
    main(json)
});


function loadMap() {
    $('#brazil-map').JSMaps({
        map: 'brazil',
        "responsive": true,
        "strokeWidth": 2,
        "abbreviationColor": '#fff',
        "abbreviationFontSize": 9,
        "displayAbbreviations": true,
        "displayAbbreviationOnDisabledStates": false,
        "stateClickAction": "",
        "preloaderText": "Carregando mapa...",
        "selectElement": true,
        onStateClick: function(data) {
            setState(data.abbreviation, data.name);
        }
    });
}

function reloadMap() {
    $('#brazil-map').empty();
    // remover Dados de Estado
    loadMap();
}

function main(json) {
    $('.firtsMap').html(json.menu[0].name);
    if (json.menu[0].range) {
        $("#myRange").prop("disabled", false);
        $("#myRange").attr({
            "max": json.menu[0].rangeEnd,
            "min": json.menu[0].rangeStart
        });
    } else {
        $("#myRange").prop("disabled", true);
        $("#myRange").attr({
            "max": json.menu[0].rangeEnd
        });
    }

    setConfig(json, json.demo[0].year.length - 1);


    loadMap();
}

function setConfig(json, id) {
    $('#ptb').html(json.demo[0].data[id].date[0].all.toLocaleString());
    $('#pub').html(json.demo[0].data[id].date[0].urban.toLocaleString());
    $('#prb').html(json.demo[0].data[id].date[0].countryside.toLocaleString());

    $('#ptn').html(json.demo[0].data[id].date[1].all.toLocaleString());
    $('#pun').html(json.demo[0].data[id].date[1].urban.toLocaleString());
    $('#prn').html(json.demo[0].data[id].date[1].countryside).toLocaleString();

    $('#ptno').html(json.demo[0].data[id].date[2].all.toLocaleString());
    $('#puno').html(json.demo[0].data[id].date[2].urban.toLocaleString());
    $('#prno').html(json.demo[0].data[id].date[2].countryside.toLocaleString());

    $('#ptse').html(json.demo[0].data[id].date[3].all.toLocaleString());
    $('#puse').html(json.demo[0].data[id].date[3].urban.toLocaleString());
    $('#prse').html(json.demo[0].data[id].date[3].countryside.toLocaleString());

    $('#pts').html(json.demo[0].data[id].date[4].all.toLocaleString());
    $('#pus').html(json.demo[0].data[id].date[4].urban.toLocaleString());
    $('#prs').html(json.demo[0].data[id].date[4].countryside.toLocaleString());

    $('#ptco').html(json.demo[0].data[id].date[5].all.toLocaleString());
    $('#puco').html(json.demo[0].data[id].date[5].urban.toLocaleString());
    $('#prco').html(json.demo[0].data[id].date[5].countryside.toLocaleString());
}

function setState(uf, name) {
    $('.hidden1').html(uf);
    $('.hidden1').hide();
    $('.hidden2').show();
    $('.ufSelect').html(name);
    for (let i = 0; i < json.responseJSON.demo[0].year.length; i++)
        if (json.responseJSON.demo[0].year[i] == $("#myRange").val())
            setStateDate(json.responseJSON, i, uf)
}

function setStateDate(json, id, uf) {
    for (let i = 1; i < json.demo[0].data[id].date.length; i++) {
        for (let j = 0; j < json.demo[0].data[id].date[i].state.length; j++) {
            if (json.demo[0].data[id].date[i].state[j].type == uf) {
                $('#ptuf').html(json.demo[0].data[id].date[i].state[j].all.toLocaleString());
                $('#puuf').html(json.demo[0].data[id].date[i].state[j].urban.toLocaleString());
                $('#pruf').html(json.demo[0].data[id].date[i].state[j].countryside.toLocaleString());
            }
        }
    }
}
// Set Range Number
$('.rangeNumber').html($("#myRange").val());
$('#myRange').on('input', function() {
    $('.rangeNumber').html($("#myRange").val());
    //set json
    for (let i = 0; i < json.responseJSON.demo[0].year.length; i++)
        if (json.responseJSON.demo[0].year[i] == $("#myRange").val()) {
            setConfig(json.responseJSON, i);
            if ($('.hidden1').css('display') == 'none') {
                setStateDate(json.responseJSON, i, $('.hidden1').html());
            }
        }
});
