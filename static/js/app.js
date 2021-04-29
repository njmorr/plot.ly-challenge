console.log("the app.js file has loaded.")

function initDashboard() {
    console.log("initDashboard function called");

    // Populate the dropdown menu
    var selector = d3.select("#selDataset");

    d3.json("data/samples.json").then(function(data){
        console.log(data)
    })

    // Update the bar graph

    // Update teh bubblechart

    // update the demographic information
}

initDashboard()