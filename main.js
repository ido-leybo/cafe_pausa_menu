function showTab(tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    let activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
}

document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
    });
});

// Show food tab by default
showTab('food');