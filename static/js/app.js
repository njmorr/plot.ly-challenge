console.log("the app.js file has loaded.")

function drawBarGraph(sampleId) {
    console.log(`drawBarGraph(${sampleId})`);
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