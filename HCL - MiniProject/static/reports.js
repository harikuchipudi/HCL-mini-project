// Initial sales data for products 1, 2, 3, and 4
let productSales = [150, 220, 180, 300];

// Create a Chart.js bar chart
const ctx = document.getElementById('sales-chart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
        datasets: [{
            label: 'Sales',
            data: productSales,
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

const pieCtx = document.getElementById('sales-pie-chart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
        datasets: [{
            data: productSales,
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});

// Update data dynamically
function updateChartData() {
    // Example: increase sales values
    productSales = productSales.map(value => value + Math.floor(Math.random() * 20));

    // Update bar chart data
    salesChart.data.datasets[0].data = productSales;
    salesChart.update();

    // Update pie chart data
    pieChart.data.datasets[0].data = productSales;
    pieChart.update();
}

let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

home.addEventListener("click", function(){
    window.location.href="index.html";
});

// Call updateChartData every 5 seconds (you can adjust the interval as needed)
setInterval(updateChartData, 1000);
