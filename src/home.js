import chefJPG from "./pizzachef.jpg";

function loadHome() {
    const returnDiv = document.createElement("div");
    returnDiv.classList.add("home");
    returnDiv.setAttribute("id", "main-content")
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    para1.textContent = "Pizza made with pazzion";
    para2.textContent = "A taste of Italian tradition and love";
    para3.textContent = "Visit today!";

    const img = document.createElement("img");
    img.src = chefJPG;


    returnDiv.appendChild(para1);
    returnDiv.appendChild(para2);
    returnDiv.appendChild(img);
    returnDiv.appendChild(para3);

    return returnDiv;
}




export default loadHome;