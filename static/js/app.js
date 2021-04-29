console.log("the app.js file has loaded.")

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
            .property("value",sampleId)

        });
    });

    // Update the bar graph

    // Update teh bubblechart

    // update the demographic information
}

initDashboard()


// portions of this code is based on Instructor Dom's offices hours on 14 April 2021