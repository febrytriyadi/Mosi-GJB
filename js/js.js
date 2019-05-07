function write(){ 
  Highcharts.chart('container', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'grafik jarak mobil dari posisi awal'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 75,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#0F0F0F'
    },
    xAxis: {
            title: {
            text: 'waktu'
        },
        categories: kesamping
    },
    yAxis: {
        title: {
            text: 'jarak mobil dari posisi awal'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' Meter'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'jarak',
        data: hasil
    }]
});


Highcharts.chart('velocity', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'grafik velocity'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 75,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#0F0F0F'
    },
    xAxis: {
            title: {
            text: 'waktu'
        },
        categories: kesamping
    },
    yAxis: {
        title: {
            text: 'velocity'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' M/s'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'kecepatan',
        data: kecepatan
    }]
});



}

jalan();