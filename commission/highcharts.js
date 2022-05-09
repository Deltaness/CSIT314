$.getJSON('https://data.jianshukeji.com/stock/history/000001', function(data) {
    if (data.code !== 1) {
        alert('error！');
        return false;
    }
    data = data.data;
    // 去掉多余的数据
    Highcharts.each(data, function(d) {
        d.length = 2;
    });
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 2
        },
        title: {
            text: ''
        },
        plotOptions: {
            series: {
                showInLegend: true
            }
        },
        tooltip: {
            split: false,
            shared: true
        },
        rangeSelector: {
            buttons: [{
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                count: 15,
                type: 'minute',
                text: '15M'
            }, {
                count: 30,
                type: 'minute',
                text: '30M'
            }, {
                count: 1,
                type: 'hour',
                text: '1h'
            }, {
                count: 2,
                type: 'hour',
                text: '2h'
            }, {
                count: 4,
                type: 'hour',
                text: '4h'
            }, {
                count: 1,
                type: 'day',
                text: '1d'
            }, {
                count: 1,
                type: 'week',
                text: '1w'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            verticalAlign: 'bottom',
            buttonSpacing: 0,
            buttonTheme: {
                fill: 'none',
                stroke: 'none',
                'stroke-width': 0,
                r: 8,
                style: {
                    color: '#000',
                    fontWeight: 'bold'
                },
                states: {
                    hover: {},
                    select: {
                        fill: '#000',
                        style: {
                            color: 'white'
                        }
                    }
                    // disabled: { ... }
                }
            },
            selected: 0
        },
        series: [{
            // type: 'line',
            id: '000001',
            name: '数据',
            data: data
        }]
    });
});