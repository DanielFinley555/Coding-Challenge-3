// Task 1: Create a Function to Calculate Average Sales

function calculateAverageSales(sales) {
    let totalSales = sales.reduce((sum, sale) => sum + sale);
    return totalSales / sales.length;
}
