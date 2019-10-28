$(function() { loadMap(); });

$.getJSON("https://raw.githubusercontent.com/43D/Web/master/LeEco/json/leMax2.json", function(json) {
    main(json)
});

function loadMap() {
    $('#brazil-map').JSMaps({
        map: 'brazil',
        "responsive": true,
        "strokeWidth": 2,
        "abbreviationColor": '#fff',
        "abbreviationFontSize": 9,
        "displayAbbreviations": false,
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