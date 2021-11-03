function line_chart(ctx){
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sample Dataset',
                data: [0, 10, 5, 2, 20, 30, 45],
                borderColor: 'rgb(255, 99, 132)',
            }]
        },
        options: {
            scales: {
              y: {
                display: true,
                title: {
                    display: true,
                    text: 'Balance'
                }
               },
               x: {
                display: true,
                title: {
                    display: true,
                    text: 'Address'
                }
                }
            }
            }
    }); 
}