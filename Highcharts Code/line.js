Highcharts.chart('container', {

    title: {
        text: 'UCSD Male vs Female Application and Admittance Rates'
    },

    subtitle: {
        text: 'https://ir.ucsd.edu/undergrad/stats-data/common-data-set.html'
    },

    yAxis: {
        title: {
            text: 'Number of People'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
    },

    series: [{
        name: 'Male Applications',
        data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]
    }, {
        name: 'Female Applications',
        data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41047, 44430, 46845, 52265]
    }, {
        name: 'Male Admittance',
        data: [7580, 9210, 8419, 8517, 7816, 8365, 8707, 10917, 11866, 11758, 12748, 14103, 13981, 13781]
    }, {
        name: 'Female Admittance',
        data: [10311, 12135, 10759, 11200, 9863, 9991, 10269, 12046, 12966, 12837, 13761, 16170, 16231, 15821]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});