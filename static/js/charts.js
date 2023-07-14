// charts.js
function renderTimeSeriesCharts(cpuData, memoryData) {
    var cpuTrace = {
        x: cpuData.time,
        y: cpuData.values,
        mode: 'lines',
        name: 'CPU Usage (%)'
    };

    var memoryTrace = {
        x: memoryData.time,
        y: memoryData.values,
        mode: 'lines',
        name: 'Memory Usage (%)'
    };

    var layout = {
        title: 'CPU and Memory Usage',
        xaxis: {
            title: 'Time'
        },
        yaxis: {
            title: 'Usage (%)'
        }
    };

    var data = [cpuTrace, memoryTrace];

    Plotly.newPlot('cpuTimeSeries', data, layout);
}

function renderPieChart(data) {
    var labels = data.map(process => process.name);
    var values = data.map(process => process.cpuUsage);

    var trace = {
        labels: labels,
        values: values,
        type: 'pie'
    };

    var layout = {
        title: 'Process Consumption'
    };

    var data = [trace];

    Plotly.newPlot('pieChart', data, layout);
}
