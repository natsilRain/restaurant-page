export const generateMenuContent = function () {
    const contentContainer = document.querySelector(".content");
    const content = document.createElement("div");
    content.classList.add("content-div");

    const headline = document.createElement("h1");
    headline.classList.add("headline");
    headline.textContent = "Our Menu";

    const bevHeadline = document.createElement("h2");
    bevHeadline.classList.add("sub-header");
    bevHeadline.textContent = "Beverages";

    const beverage1 = document.createElement("div");
    beverage1.classList.add("menu-item");
    beverage1.innerHTML = `
        <h3>Tree Sap</h3>
        <p>A thimble-full of tree sap for your aphids, mealybugs, leafhoppers, and scale insects.</p>
        <p class="price">Price: $0.29</p>
    `;

    const beverage2 = document.createElement("div");
    beverage2.classList.add("menu-item");
    beverage2.innerHTML = `
        <h3>Dew Drop</h3>
        <p>Fresh dew drops collected from the morning grass. Great for any thirsty friend!</p>
        <p class="price">Price: $0.01</p>
    `;

    const mainHeadline = document.createElement("h2");
    mainHeadline.classList.add("sub-header");
    mainHeadline.textContent = "Main Dishes";

    const dish1 = document.createElement("div");
    dish1.classList.add("menu-item");
    dish1.innerHTML = `
        <h3>Leaf Salad<h3>
        <p>Big fresh bowl of leaves for the hungry caterpillar!</p>
        <p class="price">Price: $0.99</p>
    `;

    const dish2 = document.createElement("div");
    dish1.classList.add("menu-item");
    dish1.innerHTML = `
        <h3>Caterpillar Salad</h3>
        <p>Big fresh bowl of caterpillars for the hungry spider!</p>
        <p class="price">Price: $0.98</p>
    `;

    const dish3 = document.createElement("div");
    dish3.classList.add("menu-item");
    dish3.innerHTML = `
        <h3>Mystery Pizza - Extra Small</h3>
        <p>We don't know who makes these, we keep finding them under our sink...</p>
        <p class="price">Price: $0.02</p>
    `;

    contentContainer.appendChild(content);
    content.appendChild(headline);
    content.appendChild(bevHeadline);
    content.appendChild(beverage1);
    content.appendChild(beverage2);
    content.appendChild(mainHeadline);
    content.appendChild(dish1);
    content.appendChild(dish2);
    content.appendChild(dish3);
}