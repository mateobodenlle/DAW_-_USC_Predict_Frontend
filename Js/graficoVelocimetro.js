Highcharts.setOptions({
    accessibility: {
        enabled: false
    }
});


var gaugeOptions = {

    chart: {
        type: 'solidgauge',
        backgroundColor: '#0e1d30'
    },

    title: null,

    pane: {
        center: ['51%', '70%'],
        size: '110%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: '#1a2b3a',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.4, '#DF5353'], // red
            [0.6, '#DDDF0D'], // yellow
            [0.7, '#55BF3B'] // green
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
            y: 16,
            style: {
                color: '#a9c083'
            }
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

// The speed gauge
var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {

    yAxis: {
        min: 0,
        max: 100
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Ratio',
        data: [80],
        dataLabels: {
            y: 20,
            // format: '<div style="text-align:center"><span style="font-size:25px;color:#a9c083">{y}</span><br/>'
            format: `
                <div style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60px;
                    height: 60px;
                    font-size: 25px;
                    color: #a9c083;
                    background-color: #0c1a2b;
                    border: 2px solid #c0d9af;
                    border-radius: 12px;
                    box-shadow: 0 0 5px #c0d9af;
                    margin: 0 auto;
                ">
                    {y}
                </div>
            `
        }
    }]

}));

function actualizarRatio(valor) {
    chartSpeed.series[0].points[0].update(valor);
    // actualizarAguja(valor);
}



