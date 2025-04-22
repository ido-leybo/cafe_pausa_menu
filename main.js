function showTab(tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    let activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}

// Show food tab by default
showTab('food');