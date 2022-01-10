function loadContacts() {
    const returnDiv = document.createElement("div");
    returnDiv.classList.add("contacts");
    returnDiv.setAttribute("id", "main-content");

    const contact1 = makeContact("Fredrik Broccoli", "555-666-777-8", "fredrik@pizzamancy.org", "Head Pizzamancer");
    const contact2 = makeContact("Lala Pepperoni", "666-777-888-9", "lala@pizzamancy.org", "Pizzamancy Overlord");
    const contact3 = makeContact("John \"Pizza\" Italy", "123-456-789-0", "john@pizzamancy.org", "He's Italian");

    const contacts = [contact1, contact2, contact3];
    contacts.forEach(contact => {
        contact.classList.add("contact-item");
        returnDiv.appendChild(contact);
    });

    return returnDiv;
}

function makeContact(name, number, email, specialty) {
    const contact = document.createElement("div");
    contact.classList.add("contact-item");
    const contactName = makeItem("h3", name);
    const contactNumber = makeItem("p", number);
    const contactEmail = makeItem("p", email);
    const contactSpecialty = makeItem("p", specialty);

    contact.appendChild(contactName);
    contact.appendChild(contactSpecialty);
    contact.appendChild(contactNumber);
    contact.appendChild(contactEmail);
    

    return contact;
}

function makeItem(element, text) {
    const item = document.createElement(element);
    item.textContent = text;
    return item;
}

export default loadContacts;