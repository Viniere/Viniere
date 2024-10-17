function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var sidebarButton = document.getElementById("open-sidebar-btn");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-300px"; // Hide sidebar
        sidebarButton.classList.remove('open');
    } else {
        sidebar.style.left = "0px"; // Show sidebar
        sidebarButton.classList.add('open');
    }
}

document.getElementById('close-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar-btn');
    sidebar.classList.remove('sidebar-open');
    openBtn.classList.remove('open');
});

function updateCart() {
    const quantity1 = parseInt(document.getElementById('wine1-quantity').value) || 0;
    const quantity2 = parseInt(document.getElementById('wine2-quantity').value) || 0;
    const quantity3 = parseInt(document.getElementById('wine3-quantity').value) || 0;

    // Retrieve the prices from the HTML
    const price1 = parseInt(document.querySelector('.wine-item:nth-child(1) .wine-info span').textContent.replace('Pris: ', '').replace(' kr', '')) || 0;
    const price2 = parseInt(document.querySelector('.wine-item:nth-child(2) .wine-info span').textContent.replace('Pris: ', '').replace(' kr', '')) || 0;
    const price3 = parseInt(document.querySelector('.wine-item:nth-child(3) .wine-info span').textContent.replace('Pris: ', '').replace(' kr', '')) || 0;

    // Calculate the total for each wine
    const total1 = quantity1 * price1;
    const total2 = quantity2 * price2;
    const total3 = quantity3 * price3;

    // Calculate the total cost for all wines
    const totalCost = total1 + total2 + total3;

    // Update the total cost element with the new total
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = `Totalkostnad: ${totalCost} kr`;
}

document.getElementById('open-sidebar-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('sidebar-open');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('sidebar-open');
});
