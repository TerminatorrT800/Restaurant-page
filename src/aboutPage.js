
const About = function (contentDiv) {

    contentDiv.innerHTML = "";

    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container-about");

    const heading = document.createElement("div");
    heading.classList.add('heading-about');

    const h1Heading = document.createElement('h1');
    h1Heading.innerText = "Contact";

    heading.appendChild(h1Heading);
    headingContainer.appendChild(heading);

    contentDiv.appendChild(headingContainer);

    var contacts = [{name:"Mama Bear", title:"Chef", number:"555-555-5554", email:"totallyRealEmail@notFake.com"},
        {name:"Papa Bear", title:"Manager", number:"555-555-5555", email:"perfectlyRealEmail@notFake.com"},
        {name:"Baby bear", title:"Waiter", number:"555-555-5556", email:"totallyRealEmail@notFake.com"},
    ]

    contacts.forEach(element => {

        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container");

        const contactInner = document.createElement("div");
        contactInner.classList.add("contact-inner");

        contactContainer.appendChild(contactInner);

        contactInner.insertAdjacentHTML("beforeend", `<h3>${element.name}</h3>`);
        contactInner.insertAdjacentHTML("beforeend", `<p>${element.title}</p>`);
        contactInner.insertAdjacentHTML("beforeend", `<p>${element.number}</p>`);
        contactInner.insertAdjacentHTML("beforeend", `<p>${element.email}</p>`);
        
        contentDiv.appendChild(contactContainer);



    });
    



}


export default About;