document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs h3');
    const tabContents = document.querySelectorAll('.tab-content div');
    const saveBtn = document.getElementById('save-btn');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // initialize first tab as active
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');

    // load saved checkboxes state from localStorage
    function loadCheckboxStates() {
        checkboxes.forEach(checkbox => {
            const savedState = localStorage.getItem(checkbox.name);
            if (savedState === 'true') {
                checkbox.checked = true;
                // trigger the visual change for the custom checkbox
                checkbox.dispatchEvent(new Event('change'));
            }
        });
    }

    // save all checkboxes state to localStorage
    function saveCheckboxStates() {
        checkboxes.forEach(checkbox => {
            localStorage.setItem(checkbox.name, checkbox.checked);
        });
        alert('Progress saved!');
    }

    // event listener for the save button
    saveBtn.addEventListener('click', saveCheckboxStates);

    // load saved states when the page loads
    loadCheckboxStates();

    // tab switching logic (existing code)
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
});