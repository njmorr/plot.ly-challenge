console.log("the app.js file has loaded.")

function drawBarGraph(sampleId) {
    console.log(`drawBarGraph(${sampleId})`);

    d3.json("data/samples.json").then(data => {
        // console.log(data);
        var samples =data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        var result = resultArray[0];
        // console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        // console.log(otu_labels);

        yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

        var barData = {
            x: sample_values.slice(0,10).reverse(),
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h"

        }

        var barArray = [barData];

        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t: 30, l: 150}
        }

        Plotly.newPlot("bar", barArray, barLayout);
    });
}

function drawBubbleChart(sampleId) {
    console.log(`drawBubbleChart(${sampleId})`);
}

function showMetaData(sampleId) {
    console.log(`showMetaData(${sampleId})`);
}

function optionChanged (newSampleId) {
    console.log(`user selected ${newSampleId}`);

    drawBarGraph(newSampleId);
    drawBubbleChart(newSampleId);
    showMetaData(newSampleId);   
}


function initDashboard() {
    console.log("initDashboard function called");

    // Populate the dropdown menu
    var selector = d3.select("#selDataset");

    d3.json("data/samples.json").then(function(data){
        console.log(data);

        var sampleNames = data.names;

        sampleNames.forEach(sampleId =>{
            selector.append("option")
            .text(sampleId)
            .property("value",sampleId);

        });

        var id = sampleNames[0];

        drawBarGraph(id);
        drawBubbleChart(id);
        showMetaData(id);


    });

    // Update the bar graph

    // Update teh bubblechart

    // update the demographic information
}

initDashboard()


// portions of this code is based on Instructor Dom's offices hours on 14 April 2021