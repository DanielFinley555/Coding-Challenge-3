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



// Task 3: Create a Function to Identify Top and Bottom Performers

function findTopAndBottomPerformers(salesData) {
    let totalSalesArray = salesData.map(name => name.totalSales);

    let maxSales = Math.max(...totalSalesArray);
    let minSales = Math.min(...totalSalesArray);

    let topPerformer = helperSales(salesData, maxSales);
    let bottomPerformer = helperSales(salesData, minSales);

    return { topPerformer, bottomPerformer };
}

// Helper function to help find the top and bottom performers
function helperSales(salesData, performance) {
    return salesData.find(name => name.totalSales === performance);
}
