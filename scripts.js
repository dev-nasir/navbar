const container = document.createElement("div");

const navbar = document.createElement("div");
navbar.classList.add("navbar");

const h2 = document.createElement("h2");
h2.innerHTML = "Brand logo";

const ul = document.createElement("ul");

const a1 = document.createElement("a");
a1.innerHTML = "Home";
const li1 = document.createElement("li");
li1.appendChild(a1);
ul.appendChild(li1);

const a2 = document.createElement("a");
a2.innerHTML = "About";
const li2 = document.createElement("li");
li2.appendChild(a2);
ul.appendChild(li2);

const a3 = document.createElement("a");
a3.innerHTML = "Services";
const li3 = document.createElement("li");
li3.appendChild(a3);
ul.appendChild(li3);

const a4 = document.createElement("a");
a4.innerHTML = "Contact";
const li4 = document.createElement("li");
li4.appendChild(a4);
ul.appendChild(li4);

navbar.appendChild(h2);
navbar.appendChild(ul);
container.appendChild(navbar);
document.body.appendChild(container);
