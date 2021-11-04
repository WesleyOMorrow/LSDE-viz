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

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "numVertices";
series1.dataFields.categoryX = "snapshot";
series1.name = "Number of Vertices";
series1.strokeWidth = 3;
series1.tensionX = 0.7;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "{name}: [bold]{valueY}[/]";

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "numEdge";
series2.dataFields.categoryX = "snapshot";
series2.name = "Number of Edges";
series2.strokeWidth = 3;
series2.tensionX = 0.7;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "{name}: [bold]{valueY}[/]";

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "avgdegree";
series3.dataFields.categoryX = "snapshot";
series3.name = "Average Degree";
series3.strokeWidth = 3;
series3.tensionX = 0.7;
series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "{name}: [bold]{valueY}[/]";

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();