const tabs = document.querySelectorAll('.tab');
const recordsContent = document.querySelectorAll('.records-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(item => item.classList.remove('active'));

        // Add active class to the clicked tab
        tab.classList.add('active');

        // Hide all content and show the selected content
        recordsContent.forEach(content => content.classList.remove('active'));
        document.querySelector(tab.dataset.target).classList.add('active');
    });
});
