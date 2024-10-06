var vg1 = 'map.json';
var vg2 = 'barchart.json';

vegaEmbed("#map", vg1).then(function(result){
    // Access the Vega view instance 
    // https://vega.github.io/vega/docs/api/view/ as result.view
}).catch(console.error)

vegaEmbed("#bar", vg2).then(function(result){
    // Access the Vega view instance 
    // https://vega.github.io/vega/docs/api/view/ as result.view
}).catch(console.error)
