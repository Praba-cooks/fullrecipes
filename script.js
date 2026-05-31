// --- High-Performance Combined Search & Tab Filtering System ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reactive Checkbox / Reagents Cross-Out System
    const checkItems = document.querySelectorAll('.check-item');
    
    checkItems.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const label = item.querySelector('label');

        item.addEventListener('click', (e) => {
            if (e.target !== checkbox && e.target !== label) {
                checkbox.checked = !checkbox.checked;
            }
            handleVisualState(item, checkbox.checked);
        });

        checkbox.addEventListener('change', () => {
            handleVisualState(item, checkbox.checked);
        });
    });

    function handleVisualState(container, isChecked) {
        if (isChecked) {
            container.classList.add('struck-out');
        } else {
            container.classList.remove('struck-out');
        }
    }

    // 2. Dual-Layer Matrix Filter Logic
    const searchInput = document.getElementById('siteSearch');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.recipe-card');

    function filterMatrices() {
        const query = searchInput.value.toLowerCase().trim();
        const activeTab = document.querySelector('.tab-btn.active').getAttribute('data-filter');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const visibleText = card.textContent.toLowerCase();
            
            const matchesTab = (activeTab === 'all' || cardCategory === activeTab);
            const matchesSearch = (query === '' || visibleText.includes(query));

            if (matchesTab && matchesSearch) {
                card.style.display = "block";
                setTimeout(() => card.style.opacity = "1", 10);
            } else {
                card.style.display = "none";
                card.style.opacity = "0";
            }
        });
    }

    // Event Triggers
    searchInput.addEventListener('input', filterMatrices);

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterMatrices();
        });
    });
});
