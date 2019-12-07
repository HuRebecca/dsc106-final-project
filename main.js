
function pieFunction() {
    var val = document.getElementById("value_pie");
    var quant = document.getElementById("quantity_pie");
    if (val.style.display === "none") {
        val.style.display = "block";
        quant.style.display = "none";
    } else if (val.style.display === "block"){
        quant.style.display = "block";
        val.style.display = "none";
    }
  }


function vennFunction() {
var val = document.getElementById("venn_diagram");
if (val.style.display === "none") {
    val.style.display = "block";
} else{
    val.style.display = "none";
}
}

// QUANTITY PIE CHART
Highcharts.chart({
    chart: {
        renderTo: quantity_pie,
        plotBackgroundColor: '#ffffff',
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
    },
    title: {
        text: 'Consumers Purchase TONS of Bananas',
        style: {
            fontSize: 25
        }
    },
    subtitle: {
        text: 'Percentages of Fruit Import Quantities from 1961 to 2017 <br> Source: Food and Agriculture Organization of the United Nations',
        style: {
            fontSize: 15
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        style: {
            fontSize: 15
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: ['#ffd700', '#dc143c', '#800080', '#ff8c00', '#b22222', '#32cd32', '#4169e1'],
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    fontSize: 15
                }
            }
        }
    },
    series: [{
        name: 'Import Percentage',
        colorByPoint: true,
        data: [{
            name: 'Bananas',
            y: 624071647.0,
            sliced: true,
            selected: true
        }, {
            name: 'Apples',
            y: 266328787.0
        }, {
            name: 'Grapes',
            y: 118888248.0
        }, {
            name: 'Oranges',
            y: 274942405.0
        }, {
            name: 'Cherries',
            y: 9920044.0
        }, {
            name: 'Watermelons',
            y: 66809999.0
        }, {
            name: 'Blueberries',
            y: 2610832.0
        }]
    }]
});

// VALUE PIE CHART
Highcharts.chart({
    chart: {
        renderTo: value_pie,
        plotBackgroundColor: '#ffffff',
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
    },
    title: {
        text: 'Consumers Spend BILLIONS on Bananas',
        style: {
            fontSize: 25
        }
    },
    subtitle: {
        text: 'Percentages of Fruit Import Value from 1961 to 2017 <br> Source: Food and Agriculture Organization of the United Nations',
        style: {
            fontSize: 15
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        style: {
            fontSize: 15
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: ['#ffd700', '#dc143c', '#800080', '#ff8c00', '#b22222', '#32cd32', '#4169e1'],
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    fontSize: 15
                }
            }
        }
    },
    series: [{
        name: 'Import Percentage',
        colorByPoint: true,
        data: [{
            name: 'Bananas',
            y: 304456932.0,
            sliced: true,
            selected: true
        }, {
            name: 'Apples',
            y: 172074679.0
        }, {
            name: 'Grapes',
            y: 163481319.0
        }, {
            name: 'Oranges',
            y: 136701189.0
        }, {
            name: 'Cherries',
            y: 35015835.0
        }, {
            name: 'Watermelons',
            y: 23852971.0
        }, {
            name: 'Blueberries',
            y: 11032614.0
        }]
    }]
});

// BAR CHART
Highcharts.chart({
    chart: {
        renderTo: bar,
        plotBackgroundColor: '#ffffff',
        plotBorderWidth: null,
        plotShadow: true,
        type: 'bar'
    },
    title: {
        text: 'Bananas are Pretty Potent Potassium Producers',
        style: {
            fontSize: 23
        }
    },
    subtitle: {
        text: 'Potassium (in mg) per One Serving of Fruit <br> Source: United States Department of Agriculture',
        style: {
            fontSize: 15
        }
    },
    xAxis: {
        categories: ['Bananas', 'Watermelons', 'Cherries', 'Oranges', 'Apples', 'Grapes', 'Blueberries']
    },
    yAxis: {
        title: {
            text: 'Potassium in Milligrams'
        }
    },
    plotOptions: {
        bar: {
            colors: ['#ffd700', '#32cd32', '#b22222' , '#ff8c00', '#dc143c', '#800080', '#4169e1']
        }
    },
    series: [{
        name: 'Potassium',
        showInLegend: false,
        colorByPoint: true,
        data: [422, 314, 268, 237, 195, 176, 114]
    }]
});

// LINE CHART
Highcharts.chart({
    chart: {
        renderTo: line,
        plotBackgroundColor: '#ffffff',
        plotBorderWidth: null,
        plotShadow: true,
    },
    title: {
        text: 'Bananas Make BIG BUCKS',
        style: {
            fontSize: 30
        }
    },
    subtitle: {
        text: 'Banana Sales ($ USD) from 1961 to 2017 <br> Source: Food and Agriculture Organization of the United Nations',
        style: {
            fontSize: 20
        }
    },
    yAxis: {
        title: {
            text: 'Sales in Thousands of US Dollars'
        }
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1961
        }
    },
    series: [{
        name: 'Banana Sales',
        data: [314862.0
            ,294638.0
            ,307035.0
            ,378152.0
            ,460867.0
            ,493230.0
            ,496812.0
            ,503098.0
            ,521551.0
            ,498637.0
            ,563649.0
            ,580185.0
            ,607987.0
            ,610725.0
            ,772743.0
            ,796196.0
            ,897247.0
            ,1006805.0
            ,1123550.0
            ,1313871.0
            ,1386012.0
            ,1473170.0
            ,1361358.0
            ,1482549.0
            ,1516197.0
            ,1709228.0
            ,1917443.0
            ,2035954.0
            ,2239863.0
            ,2620212.0
            ,3135531.0
            ,3180068.0
            ,3385090.0
            ,3971148.0
            ,4546091.0
            ,4888718.0
            ,5086396.0
            ,4941758.0
            ,4779157.0
            ,4270561.0
            ,4221749.0
            ,4308043.0
            ,4715314.0
            ,5010964.0
            ,5661675.0
            ,5794862.0
            ,6637439.0
            ,7695008.0
            ,8156796.0
            ,8123542.0
            ,8880865.0
            ,8653033.0
            ,9710274.0
            ,10779503.0
            ,9606689.0
            ,10188457.0
            ,11510295.0]
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

// CHLOROPLETH MAP
google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Biodiversity Intactness Index'],
      ['Andorra', 92],
      ['United Arab Emirates', 85],
      ['Afghanistan', 75],
      ['Antigua and Barbuda', 90],
      ['Anguilla', 85],
      ['Albania', 95],
      ['Algeria', 70],
      ['Armenia', 85],
      ['Angola', 80],
      ['Argentina', 60],
      ['American Samoa', 100],
      ['Austria', 83],
      ['Aruba', 95], 
      ['Bosnia and Herzegovina', 94],
      ['Barbados', 60], 
      ['Bangladesh', 80], 
      ['Bahamas', 75],
      ['Belgium', 70],
      ['Belieze', 93],
      ['Bolivia', 85],
      ['Burkina Faso', 80],
      ['Bulgaria', 68],
      ['Bahrain', 58],
      ['Burundi', 97], 
      ['Bermuda', 97],
      ['Botswana', 67],
      ['Belarus', 71],
      ['Belize', 97],
      ['CD', 91],
      ['Central African Republic', 71],
      ['CG', 85],
      ['Switzerland', 97],
      ['Cook Islands', 97],
      ['Chile', 85],
      ['Cambodia', 92],
      ['Cameroon', 90],
      ['Colombia', 72],
      ['Croatia', 85],
      ['Costa Rica', 85],
      ['Cuba', 80],
      ['Denmark', 75],
      ['Djibouti', 70],
      ['Ecuador', 80],
      ['Gabon', 85],
      ['Ghana', 80],
      ['Georgia', 74],
      ['Guyana', 85], 
      ['Guinea', 80],
      ['Greece', 75],
      ['Suriname', 95],
      ['Iraq', 85],
      ['Iran', 85],
      ['Ireland', 70], 
      ['Italy', 80],
      ['Ivory Coast', 79],
      ['Jamaica', 95],
      ['United Kingdom', 69],
      ['Laos', 90],
      ['Latvia', 72],
      ['Libya', 72],
      ['Liberia', 80],
      ['Lithuania', 79],
      ['Egypt', 70],
      ['Ethiopia', 88],
      ['Estonia', 70],
      ['Morocco', 80], 
      ['Western Sahara', 79], 
      ['Mauritania', 73], 
      ['Tunisia', 75], 
      ['Mali', 70],
      ['Madagascar', 85],
      ['Germany', 74],
      ['United States', 70],
      ['Brazil', 82],
      ['Canada', 90],
      ['France', 71],
      ['Russia', 92],
      ['Japan', 97],
      ['Greenland', 100],
      ['Iceland', 85],
      ['Svalbard and Jan Mayen', 100],
      ['Norway', 97],
      ['Sweden', 95], 
      ['Finland', 94],
      ['Kazakhstan', 60], 
      ['Mongolia', 58], 
      ['China', 68],
      ['Kenya', 73],
      ['Kyrgyzstan', 57],
      ['India', 85],
      ['Australia', 60],
      ['New Zealand', 58],
      ['Indonesia', 90], 
      ['Papua New Guinea', 97],
      ['Malawi', 78],
      ['Mozambique', 77],
      ['Myanmar', 95],
      ['Macao', 97],
      ['Malta', 97],
      ['Maldives', 97],
      ['Mexico', 73],
      ['Malaysia', 97],
      ['Namibia', 65],
      ['Niger', 69],
      ['Norfolk Island', 97],
      ['Nigeria', 92],
      ['Nicaragua', 97],
      ['Netherlands', 75],
      ['Nepal', 97],
      ['Nauru', 97],
      ['Oman', 80],
      ['Panama', 97],
      ['Peru', 85],
      ['French Polynesia', 97],
      ['Philippines', 91],
      ['Pakistan', 85],
      ['Poland', 73],
      ['Puerto Rico', 90],
      ['Palestine, State of', 97],
      ['Portugal', 87],
      ['Palau', 92],
      ['Paraguay', 65],
      ['Qatar', 80],
      ['Romania', 80],
      ['Serbia', 85],
      ['Spain', 77],
      ['Rwanda', 95],
      ['Saudi Arabia', 85],
      ['Solomon Islands', 100],
      ['Seychelles', 85],
      ['Sudan', 100],
      ['Singapore', 97],
      ['Saint Helena, Ascension and Tristan da Cunha', 95], 
      ['Slovenia', 94],
      ['Slovakia', 70], 
      ['Sierra Leone', 82], 
      ['Senegal', 79],
      ['Somalia', 85],
      ['Suriname', 95],
      ['SS', 58],
      ['South Korea', 98],
      ['North Korea', 98],
      ['Sudan', 62],
      ['El Salvador', 97],
      ['Syria', 73],
      ['Eswatini', 97],
      ['Tajikistan', 68],
      ['Tanzania', 80],
      ['Turks and Caicos Islands', 97],
      ['Chad', 68],
      ['Togo', 97],
      ['Thailand', 89],
      ['Timor-Leste', 97],
      ['Tunisia', 97],
      ['Tonga', 97],
      ['Turkey', 77],
      ['Turkmenistan', 65],
      ['Trinidad and Tobago', 97],
      ['Ukraine', 71],
      ['Uganda', 87],
      ['Uruguay', 58],
      ['Uzbekistan', 65],
      ['Venezuela', 73],
      ['Vietnam', 97],
      ['Samoa', 97],
      ['Yemen', 85],
      ['South Africa', 60],
      ['Zambia', 80],
      ['Zimbabwe', 70]
    ]);

    var options = {title: 'Biodiversity Intactness Index',
                   colorAxis: {colors: ['#d16666','#d16666', '#ffffff','#ffffff', '#66D166', '#66D166']}, 
                //    '#f5e0e0', '#e0f5e0'
                   backgroundColor: '#b2d8ff',
                   datalessRegionColor: '#d8d8d8',
                   defaultColor: '#d8d8d8'


                };

    var chart = new google.visualization.GeoChart(document.getElementById('chloropleth'));

    chart.draw(data, options);
  }