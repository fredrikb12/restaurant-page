import loadHome from "./home";
import loadMenu from "./menu";
import loadContacts from "./contacts";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantTitle = document.createElement("h1");
    restaurantTitle.textContent = "Pizzamancy";
    header.appendChild(restaurantTitle);

    const nav = document.createElement("nav");
    const [homeButton, menuButton, contactButton] = createHeaderButtons();
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    header.appendChild(nav);

    return header;
}

function createHeaderButtons() {
    const homeButton = document.createElement("button");
    homeButton.setAttribute("id", "home");
    homeButton.textContent = "home";
    homeButton.classList.add("active");
    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "menu");
    menuButton.textContent = "menu"
    const contactButton = document.createElement("button");
    contactButton.setAttribute("id", "contact");
    contactButton.textContent = "contact";
    const navButtons = [homeButton, menuButton, contactButton];
    navButtons.forEach(button => {
        button.classList.add("nav-button");
        button.addEventListener("click", (e) => {
            if (button.classList.contains("active")) {
                return;
            }
            navButtons.forEach(item => {
                if (item.classList.contains("active")) {
                    item.classList.remove("active");
                }
            });
            button.classList.add("active");
            const mainDiv = document.querySelector(".main");
            mainDiv.replaceChildren();
            const id = button.getAttribute("id");
            if (id === "home") {
                mainDiv.appendChild(loadHome());
            } else if (id === "menu") {
                mainDiv.appendChild(loadMenu());
            } else if (id === "contact") {
                mainDiv.appendChild(loadContacts());
            }
        });
    });
    return navButtons;
}

function createMain(mainContent) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    mainDiv.setAttribute("id", "main");
    mainDiv.appendChild(mainContent);
    return mainDiv;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.textContent = `Copyright © Fredrik B ${new Date().getFullYear()}`;
    return footer;
}

function initializeWebpage() {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
    content.appendChild(createMain(loadHome()));
    content.appendChild(createFooter());
}

export default initializeWebpage;