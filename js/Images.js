function myFunction(imgs) {
    const expandImg = document.getElementById("expandedImg");
    const imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "flex";
}

function disableClickOnMobile() {
    const images = document.querySelectorAll('.column img');
    if (window.innerWidth <= 768) {
        images.forEach(function (img) {
            img.classList.add('non-clickable');
        });
    } else {
        images.forEach(function (img) {
            img.classList.remove('non-clickable');
        });
    }
}

function showAll() {
    document.querySelectorAll('.column').forEach(column => {
        column.style.display = 'flex';
    });
}

window.onload = disableClickOnMobile;
window.onresize = disableClickOnMobile;

document.querySelector('.container').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

const dropdownButton = document.querySelector('.dropbtn');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.getAttribute('href') !== "#") {
            event.preventDefault();
            const targetSection = link.getAttribute('href').slice(1);

            document.querySelectorAll('.column').forEach(column => {
                column.style.display = 'none';
            });

            document.querySelectorAll(`.${targetSection}`).forEach(column => {
                column.style.display = 'flex';
            });

            dropdownButton.textContent = link.textContent;
        }
    });
});

    document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-in-gallery');
    images.forEach(image => {
    image.addEventListener('click', function () {
    image.classList.toggle('enlarged');
});
});
});


