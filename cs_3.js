// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(salesData) {
    let totalSales = salesData.reduce((sum, sale) => sum + sale);
    return totalSales / salesData.length;
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
    let totalSalesArray = salesData.map(person => person.totalSales);

    let maxSales = Math.max(...totalSalesArray);
    let minSales = Math.min(...totalSalesArray);

    let topPerformer = helperSales(salesData, maxSales);
    let bottomPerformer = helperSales(salesData, minSales);

    return { topPerformer, bottomPerformer };
}

// Helper function to help find the top and bottom performers
function helperSales(salesData, performance) {
    return salesData.find(person => person.totalSales === performance);
}



// Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesData) {
    const report = salesData.map(person => {
        const averageSales = calculateAverageSales(person.sales);
        const performanceRating = determinePerformanceRating(averageSales);
        return {
            name: person.name,
            averageSales,
            performanceRating
        };
    });

    // Combine with top and bottom performance function
    const topAndBottomPerformers = findTopAndBottomPerformers(
        report.map(person => ({ name: person.name, totalSales: person.averageSales }))
    );

    return {
        salesSummary: report,
        topPerformer: topAndBottomPerformers.topPerformer,
        bottomPerformer: topAndBottomPerformers.bottomPerformer
    };
}
