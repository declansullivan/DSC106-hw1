// Build the chart
Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Male vs Female Acceptance Rates, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Genders',
        colorByPoint: true,
        data: [{
            name: 'Female',
            y: 53.45,
            sliced: true,
            selected: true
        }, {
            name: 'Male',
            y: 46.55
        }]
    }]
});