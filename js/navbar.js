document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.navbar-brand img'); // Select the logo image
    logo.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
