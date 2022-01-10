function loadMenu() {
    const returnDiv = document.createElement("div");
    returnDiv.classList.add("menu");
    returnDiv.setAttribute("id", "main-content");

    const item1 = makeItem("Quattro Formaggi", "A pizza topped with a combination of four kinds of cheese, perfect for a particularly cheesy meal. Taste traditional Italy in one perfectly cooked dish now, with quattro formaggi!");
    returnDiv.appendChild(item1);

    const item2 = makeItem("Margherita", "\"The queen of the table\", some call her. a true classic, simply topped with mozzarella cheese, tomato sauce and basil. There's nothing to say, it's simple perfection.")
    returnDiv.appendChild(item2);

    const item3 = makeItem("Quattro Stagioni", "Another fan favorite, the quattro stagioni always makes an impression. It's common to find ham, mushrooms, olives and other toppings, as long as it has its own quarter anything goes!")
    returnDiv.appendChild(item3);

    return returnDiv;
}

function makeItem(header, description) {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemHeader = document.createElement("h2");
    itemHeader.textContent = header;
    item.appendChild(itemHeader);

    const itemPara = document.createElement("p");
    itemPara.textContent = description;
    item.appendChild(itemPara);
    return item;
}

export default loadMenu;