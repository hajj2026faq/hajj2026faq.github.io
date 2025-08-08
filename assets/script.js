// Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        // Update tab button active state + ARIA attributes
        tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        // Show/hide tab contents
        tabContents.forEach(content => {
        if (content.id === target) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
        });
    });
    });

    // Toggle answers on question click or Enter key
    const questions = document.querySelectorAll('.question');
    questions.forEach(q => {
    q.addEventListener('click', () => {
        const faqItem = q.parentElement;
        faqItem.classList.toggle('open');
    });
    q.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        q.click();
        }
    });
    });