export const generateHomeContent = function () {
    const contentContainer = document.querySelector(".content");

    const headline = document.createElement("h1");
    headline.classList.add("headline");
    headline.textContent = "Rainbug's Bug House";

    const introTextContainer = document.createElement("div");
    introTextContainer.classList.add("intro-text");
    introTextContainer.innerHTML = `
        <p>Rainbug's Bug House is the perfect place for all little bug friends with a hearty appetite. We have something for all kinds of bugs! Whether a leaf salad for your caterpillar or a caterpillar salad for your spider, we have it all.</p>
    `;

    const openHoursContainer = document.createElement("div");
    openHoursContainer.classList.add("hours-list");
    openHoursContainer.innerHTML = `
        <h2>Hours</h2>
        <ul>
            <li>Bunday (bug Sunday): 8am - 8pm</li>
            <li>Monday: 6am - 6pm</li>
            <li>Tuesday: 6am - 6pm</li>
            <li>Wednesday: 6am - 6pm</li>
            <li>Thursday: 6am - 10pm</li>
            <li>Friday: 6am - 10pm</li>
            <li>Saturday: 8am - 10pm</li>
        </ul>
    `;

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location");
    locationContainer.innerHTML = `
        <h2>Location</h2>
        <address>123 Lettuce Lane, Shroomville</address>
    `;

    contentContainer.appendChild(headline);
    contentContainer.appendChild(introTextContainer);
    contentContainer.appendChild(openHoursContainer);
    contentContainer.appendChild(locationContainer);
}