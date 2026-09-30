export const generateContactContent = function () {
    const contentContainer = document.querySelector(".content");
    const content = document.createElement("div");
    content.classList.add("content-div");

    const headline = document.createElement("h1");
    headline.classList.add("headline");
    headline.textContent = "Contact Us";

    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");
    contactCard.innerHTML = `
        <h3>Pumpkin</h3>
        <ul>
            <li>Chef</li>
            <li>222-222-2223</li>
            <li>pumpkin@email.me</li>
        </ul>
    `;

    const contactCard2 = document.createElement("div");
    contactCard2.classList.add("contact-card");
    contactCard2.innerHTML = `
        <h3>Rainbug</h3>
        <ul>
            <li>Manager</li>
            <li>222-222-2224</li>
            <li>rainbug@email.me</li>
        </ul>
    `;

    const contactCard3 = document.createElement("div");
    contactCard3.classList.add("contact-card");
    contactCard3.innerHTML = `
        <h3>Nautilus</h3>
        <ul>
            <li>Waiter</li>
            <li>222-222-2225</li>
            <li>nautilus@email.me</li>
        </ul>
    `;

    contentContainer.appendChild(content);
    content.appendChild(headline);
    content.appendChild(contactCard);
    content.appendChild(contactCard2);
    content.appendChild(contactCard3);
}