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

$(function() { loadMap(); });

function setColor(hex, estado) {
    return this;
}