// Test to see if the data loads properly
// console.log("the app.js file has loaded.")


//////////////////////////////////////////////////
// creates functions to draw the graphs/metadata

// bar graph
function drawBarGraph(sampleId) {
    // console.log(`drawBarGraph(${sampleId})`);

    // reads data into a function; creates variables for bar chart
    d3.json("data/samples.json").then(data => {
        // console.log(data);
        var samples = data.samples;
        var resultArray = samples.filter(s => s.id == sampleId);
        var result = resultArray[0];
        // console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        // console.log(otu_labels);

        yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

        // puts elements on bar chart into one variable
        var barData = {
            x: sample_values.slice(0,10).reverse(),
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h"
        }

        // puts bar chart variable into an array
        var barArray = [barData];

        // set layout for bar chart
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t: 30, l: 150}
        }

        // plots bar chart
        Plotly.newPlot("bar", barArray, barLayout);
    });
}

// bubble Chart
function drawBubbleChart(sampleId) {
    console.log(`drawBubbleChart(${sampleId})`);
}

// meta data
function showMetaData(sampleId) {
    console.log(`showMetaData(${sampleId})`);

    // reads data into a function; creates variables for bar chart
    d3.json("data/samples.json").then(data => {
        // console.log(data);
        var metadata = data.metadata;
        var metadataArray = metadata.filter(s => s.id == sampleId)[0];
        var idee = metadataArray.id;
        var ethnicity = metadataArray.ethnicity;
        var gender = metadataArray.gender;
        var age = metadataArray.age;
        var location = metadataArray.location;
        var bbtype = metadataArray.bbtype;
        var wfreq = metadataArray.wfreq;
        console.log(idee, ethnicity, gender, age, location, bbtype, wfreq);

        // var otu_ids = result.otu_ids;
        // var otu_labels = result.otu_labels;
        // var sample_values = result.sample_values;
        // console.log(otu_labels);

        // yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

        // puts elements on bar chart into one variable
        // var barData = {
        //     x: sample_values.slice(0,10).reverse(),
        //     y: yticks,
        //     type: "bar",
        //     text: otu_labels.slice(0,10).reverse(),
        //     orientation: "h"
        // }

        // // puts bar chart variable into an array
        // var barArray = [barData];

        // // set layout for bar chart
        // var barLayout = {
        //     title: "Top 10 Bacteria Cultures Found",
        //     margin: {t: 30, l: 150}
        // }

        // // plots bar chart
        // Plotly.newPlot("bar", barArray, barLayout);
    });
}

/////////////////////////////////////////////////////////
// function to handle changing of user input

function optionChanged (newSampleId) {
    console.log(`user selected ${newSampleId}`);

    drawBarGraph(newSampleId);
    drawBubbleChart(newSampleId);
    showMetaData(newSampleId);   
}

/////////////////////////////////////////////////////
// initializing function

function initDashboard() {
    // console.log("initDashboard function called");

    // Populate the dropdown menu
    var selector = d3.select("#selDataset");

    d3.json("data/samples.json").then(function(data){
        // console.log(data);

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
}

initDashboard()


// portions of this code is based on Instructor Dom's offices hours on 14 April 2021