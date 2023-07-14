function renderCharts(cpuTimeSeries, memoryTimeSeries) {
    // Convert time series data to separate arrays for x and y values
    var cpuTime = cpuTimeSeries.map(function (point) {
        return point.time;
    });
    var cpuUsage = cpuTimeSeries.map(function (point) {
        return point.value;
    });
    var memoryTime = memoryTimeSeries.map(function (point) {
        return point.time;
    });
    var memoryUsage = memoryTimeSeries.map(function (point) {
        return point.value;
    });

    // Render CPU time series chart
    var cpuChart = {
        x: cpuTime,
        y: cpuUsage,
        mode: 'lines',
        type: 'scatter',
        name: 'CPU Usage (%)'
    };
    var cpuLayout = {
        title: 'CPU Usage Time Series',
        xaxis: { title: 'Time' },
        yaxis: { title: 'CPU Usage (%)' }
    };
    Plotly.newPlot('cpuTimeSeries', [cpuChart], cpuLayout);

    // Render memory time series chart
    var memoryChart = {
        x: memoryTime,
        y: memoryUsage,
        mode: 'lines',
        type: 'scatter',
        name: 'Memory Usage (%)'
    };
    var memoryLayout = {
        title: 'Memory Usage Time Series',
        xaxis: { title: 'Time' },
        yaxis: { title: 'Memory Usage (%)' }
    };
    Plotly.newPlot('memoryTimeSeries', [memoryChart], memoryLayout);
}
