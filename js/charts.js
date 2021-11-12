
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
var myOrdersChart = new Chart(ordersChart, {
  type: 'line',
  data: {
    labels: ["Aug 1", "Aug 2", "Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10", "Aug 11", "Aug 12", "Aug 13"],
    datasets: [{
      lineTension: 0.1,
      borderColor: "rgba(218,65,103,0.6)",
      pointBackgroundColor: "rgba(218,65,103,0.8)",
      data: [7559, 30201, 24201, 20012, 19501, 26011, 32420, 35012, 30087, 29515, 20215, 35785, 39741],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgb(55, 49, 94, 0.2)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');
var myBarChart = new Chart(visitorChart, {
type: 'bar',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July"],
datasets: [{
        
    label: "Man",
    data: [4700, 9950, 14200, 9000, 8200, 10500, 12000],
    backgroundColor: '#37315e' 
    },
    {

    label: "Women",
    data: [5000, 9200, 15000, 9300, 8250, 10800, 11990],
    backgroundColor:'rgba(220, 92, 124, 1)'
    }]
},

options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 8
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 8
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: true
    }
  }

});


// Pie Chart for Cities
var citiesChart = document.getElementById("myPieChart");
var myCitiesChart = new Chart(citiesChart, {
  type: 'pie',
  data: {
    labels: ["Riyadh", "Jaddah", "Sharqia", "Mecca"],
    datasets: [{
      data: [40, 20.2, 10.11, 30],
      backgroundColor: ["rgba(218,65,103,0.8)", "rgb(55, 49, 94, 0.8)", "rgba(218,65,99,0.8)", "rgb(25, 39, 90, 0.8)"],
    }],
  },
});

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart").getContext('2d');
var myLinearChart = new Chart(ratChart, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            data: [1, 1.5, 2.7, 4, 4.5, 3.75],
            borderColor: "rgba(218,65,103,0.6)",
            pointBackgroundColor: "rgba(218,65,103,0.8)",
            borderWidth: 3,
            fill: true,
            lineTension: 0.4,
        },
        ]
    },
    options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 5,
              maxTicksLimit: 6
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
});