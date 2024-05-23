document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreText = document.getElementById("moreText");

    readMoreBtn.addEventListener("click", function() {
        if (moreText.classList.contains("show")) {
            moreText.classList.remove("show");
            readMoreBtn.textContent = "Read More";
        } else {
            moreText.classList.add("show");
            readMoreBtn.textContent = "Read Less";
        }
    });
});
