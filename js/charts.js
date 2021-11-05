// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart").getContext('2d');
var myLineChart = new Chart(ordersChart, {
    type: 'line',
    data: {
        labels: ["Jan 1", "Jan 5", "Jan 9", "Jan 13", "Jan 17", "Jan 21", "Jan 25"],
        datasets: [{
            data: [9000, 20500, 10000, 20200, 29200, 27000, 40000],
            borderColor: [
                'rgba(218, 65, 103, 1)',
            ],
            fill: true,
            borderWidth: 3,
            backgroundColor:"#37315e79",
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

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
backgroundColor: [
'#37315e',
],
},
{
label: "Women",
data: [5000, 9200, 15000, 9300, 8250, 10800, 11990],
backgroundColor: [
'rgba(218, 65, 103, 1)',
],
}
]
},
options: {
responsive: true,
maintainAspectRatio: false,

}
});


// Pie Chart for Cities
var citiesChart = document.getElementById("myPieChart").getContext('2d');
var myPieChart = new Chart(citiesChart, {
type: 'pie',
data: {
labels: ["Riyadh", "Jeddah", "Macca", "Abha"],
datasets: [{
data: [30, 50, 10, 40, 20],
backgroundColor: ["#37315e", "rgba(218, 65, 103, 1)", "#37315e", "rgba(218, 65, 103, 1)"],
hoverBackgroundColor: ["#7952b3", "rgba(220, 92, 124, 1)", "#7952b3", "rgba(220, 92, 124, 1)"],
}]
},
options: {
responsive: true,
maintainAspectRatio: false,

}
});

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart").getContext('2d');
var myLinearChart = new Chart(ratChart, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            data: [1, 1.5, 2.7, 4, 4.5, 3.75],
            borderColor: [
                'rgba(218, 65, 103, 1)',
            ],
            borderWidth: 3,
            fill: true,
            backgroundColor:"#37315e79",
            lineTension: 0.4,
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,

        
    }
});