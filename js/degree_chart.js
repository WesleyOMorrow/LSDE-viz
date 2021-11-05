// Apply chart themes
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("degreediv", am4charts.XYChart);

// Set up data source
chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2010.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "degree";
categoryAxis.title.text = "Degree";

// Configure axis label
var label = categoryAxis.renderer.labels.template;
label.truncate = true;
label.maxWidth = 200;
label.tooltipText = "{category}";

categoryAxis.events.on("sizechanged", function(ev) {
    var axis = ev.target;
      var cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
      if (cellWidth < axis.renderer.labels.template.maxWidth) {
        axis.renderer.labels.template.rotation = -45;
        axis.renderer.labels.template.horizontalCenter = "right";
        axis.renderer.labels.template.verticalCenter = "middle";
      }
      else {
        axis.renderer.labels.template.rotation = 0;
        axis.renderer.labels.template.horizontalCenter = "middle";
        axis.renderer.labels.template.verticalCenter = "top";
      }
    });

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Frequency";

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "count";
series.dataFields.categoryX = "degree";
series.name = "Frequency";
series.tooltipText = "{name}: [bold]{valueY}[/]";

// Add cursor
chart.cursor = new am4charts.XYCursor();

// Select datasets
function selectDataset(set) {
  if (set == 2010) {
    chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2010.csv";
    chart.dataSource.load();
  }
  else if (set == 2011){
    chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2011.csv";
    chart.dataSource.load();
  }
  else if (set == 2012){
    chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2012.csv";
    chart.dataSource.load();
  }
  else if (set == 2013){
    chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2013.csv";
    chart.dataSource.load();
  }
  else if (set == 2014){
    chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2014.csv";
    chart.dataSource.load();
  }
  else if (set == 2015){
    chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2015.csv";
    chart.dataSource.load();
  }
  else if (set == 2016){
    chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/degree/2016.csv";
    chart.dataSource.load();
  }
}