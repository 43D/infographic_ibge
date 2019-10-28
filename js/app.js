$(function() { loadMap(); });

$.getJSON("https://raw.githubusercontent.com/43D/infographic_ibge/master/js/ibge.json", function(json) {
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
        "selectElement": true
    });
}

function removeMap() {
    $('#brazil-map').empty();
}

function main(json) {}

// Set Range Number
$('.rangeNumber').html($("#myRange").val());
$('#myRange').on('input', function() {
    $('.rangeNumber').html($("#myRange").val());
    //set json
});





















function setColor(hex, estado) {
    return this;
}