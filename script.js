document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs h3');
    const tabContents = document.querySelectorAll('.tab-content div');
    
    // initialize first tab as active
    tabs[0].classList.add('active');
    tabContents[0].classList.add('active');
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // add active class to clicked tab and corresponding content
            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });
});