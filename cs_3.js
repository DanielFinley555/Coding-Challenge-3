// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
    let totalSales = sales.reduce((sum, sale) => sum + sale);
    return totalSales / sales.length;
}



// Task 2: Create a Function to Determine Performance Rating

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000 && averageSales <= 10000) {
        return "Good";
    } else if (averageSales >= 4000 && averageSales < 7000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}
