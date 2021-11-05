// Apply chart themes
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("basicsdiv", am4charts.XYChart);

// Set up data source
chart.dataSource.url = "https://raw.githubusercontent.com/WesleyOMorrow/LSDE-viz/main/data/basics.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "snapshot";

// Create series
function createSeriesAndAxis(field, name, topMargin, bottomMargin) {
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "snapshot";
    series.name = name;
    series.tooltipText = "{name}: [b]{valueY}[/]";
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.stroke = series.stroke;
    valueAxis.renderer.grid.template.stroke = series.stroke;
    valueAxis.renderer.grid.template.strokeOpacity = 0.1;
    valueAxis.renderer.labels.template.fill = series.stroke;
    valueAxis.renderer.minGridDistance = 20;
    valueAxis.align = "right";
    
    if (topMargin && bottomMargin) {
      valueAxis.marginTop = 10;
      valueAxis.marginBottom = 10;
    }
    else {
      if (topMargin) {
        valueAxis.marginTop = 20;
      }
      if (bottomMargin) {
        valueAxis.marginBottom = 20;
      }
    }
    
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.stroke = am4core.color("#fff");
    bullet.circle.strokeWidth = 2;
  }
  
createSeriesAndAxis("numVertices", "Number of Vertices", false, true);
createSeriesAndAxis("numEdge", "Number of Edges", true, true);
createSeriesAndAxis("avgdegree", "Average Degree", true, false);

chart.leftAxesContainer.layout = "vertical";

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();