function balance_chart(ctx, filename){

  // Open a file from the results
  var req = new XMLHttpRequest();
  req.open('GET', filename, false);
  req.send();
  if(req.status == 4 || req.status == 200){
    // Read the file and split its data into lines
    var data = (req.responseText).match(/[^\r\n]+/g);
  }else{
    alert("Cannot load the file " + filename);
  }

  var address = new Array();
  var balance = new Array();
  var idx = 0;

  // Construct the labels and data for the chart
  // Skip the first line, which consists of the headers
  for (i = 1; i < data.length; i++) {
    address[idx] = data[i].split(",")[0];
    balance[idx] = Number(data[i].split(",")[2]);
    idx++;
  }

  // Create the chart
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: address,
          datasets: [{
              label: 'The Balance in Each Address',
              data: balance,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
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