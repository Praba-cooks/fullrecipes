// --- High-Performance Dynamic Website Controller ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reactive Checkbox / Reagents Cross-Out Engine
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

    // 2. High-Fidelity Realtime Filtration Search Engine
    const searchInput = document.getElementById('siteSearch');
    const cards = document.querySelectorAll('.recipe-card');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const visibleText = card.textContent.toLowerCase();
            if (visibleText.includes(query)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // 3. Category Filter Tabs Mechanics
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
