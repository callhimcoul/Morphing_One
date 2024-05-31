document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.lang-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-en], [data-de]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
    }
});
