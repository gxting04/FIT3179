var vg1 = 'map.json';
var vg2 = 'pyramid.json';
var vg3 = 'ph.json';
var vg4 = 'coalition.json';
var vg5 = 'map_governing_party.json';

vegaEmbed("#map", vg1).then(function(result){
    // Access the Vega view instance 
    // https://vega.github.io/vega/docs/api/view/ as result.view
}).catch(console.error)

vegaEmbed("#pyramid", vg2).then(function(result){
    // Access the Vega view instance 
    // https://vega.github.io/vega/docs/api/view/ as result.view
}).catch(console.error)

vegaEmbed("#ph", vg3).then(function(result){
    // Access the Vega view instance 
    // https://vega.github.io/vega/docs/api/view/ as result.view
}).catch(console.error)

vegaEmbed("#coalition", vg4).then(function(result){
    // Access the Vega view instance 
    // https://vega.github.io/vega/docs/api/view/ as result.view
}).catch(console.error)

vegaEmbed("#govern", vg5).then(function(result){
    // Access the Vega view instance 
    // https://vega.github.io/vega/docs/api/view/ as result.view
}).catch(console.error)
