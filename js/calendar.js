document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysContainer = document.querySelector(".days");
    const monthNameElement = document.querySelector(".month-name");
    const prevMonthElement = document.querySelector(".prev-month");
    const nextMonthElement = document.querySelector(".next-month");
    const concertsListElement = document.getElementById("concerts-list");

    const concerts = [
        { date: 17, month: 5, year: 2024, url: "Sommerkonzert.html", name: "Sommerkonzert" },
        { date: 3, month: 6, year: 2024, url: "https://konzerthaus.at/konzert/eventid/61188", name: "Coming Soon :)" }
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let currentDisplayedMonth = currentMonth;
    let currentDisplayedYear = currentYear;

    function renderCalendar(month, year) {
        daysContainer.innerHTML = "";
        monthNameElement.textContent = months[month] + " " + year;


        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = i.toString();
            dayElement.classList.add("day");

            if (
                i === currentDate.getDate() &&
                month === currentMonth &&
                year === currentYear
            ) {
                dayElement.classList.add("current-day");
            }

            for (const concert of concerts) {
                if (concert.month === month && concert.year === year && concert.date === i) {
                    dayElement.classList.add("concert-day");
                    dayElement.setAttribute("data-url", concert.url);
                    dayElement.addEventListener("click", function () {
                        const url = this.getAttribute("data-url");
                        window.open(url, "_blank");
                    });
                }
            }

            daysContainer.appendChild(dayElement);
        }
    }

    function renderConcertList() {
        concertsListElement.innerHTML = "";
        concerts.forEach(concert => {
            const concertItem = document.createElement("li");
            const concertLink = document.createElement("a");
            concertLink.href = concert.url;
            concertLink.target = "_blank";
            concertLink.textContent = `${months[concert.month]} ${concert.date} - ${concert.name}`;
            concertItem.appendChild(concertLink);
            concertsListElement.appendChild(concertItem);
        });
    }

    renderCalendar(currentMonth, currentYear);
    renderConcertList();

    prevMonthElement.addEventListener("click", function () {
        currentDisplayedMonth--;
        if (currentDisplayedMonth < 0) {
            currentDisplayedMonth = 11;
            currentDisplayedYear--;
        }
        renderCalendar(currentDisplayedMonth, currentDisplayedYear);
    });

    nextMonthElement.addEventListener("click", function () {
        currentDisplayedMonth++;
        if (currentDisplayedMonth > 11) {
            currentDisplayedMonth = 0;
            currentDisplayedYear++;
        }
        renderCalendar(currentDisplayedMonth, currentDisplayedYear);
    });
});
