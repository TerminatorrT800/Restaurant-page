
const Menu = function (contentDiv) {

    contentDiv.innerHTML ="";

    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");

    const heading = document.createElement("div");
    heading.classList.add('heading');

    const h1Heading = document.createElement('h1');
    h1Heading.innerText = "Meni";

    heading.appendChild(h1Heading);
    headingContainer.appendChild(heading);
    
    contentDiv.appendChild(headingContainer);

    var naslovi = ["Beverages", 'Sides', "Main dishes"];
    var patern = [[{ title: "Honey Tea", text: 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!', price: "2$" },
    { title: "Beary tea", text: "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", price: "3$" }],
    [{ title: "Toast Jam", text: "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.", price: "1$" },
    { title: "Fresh fruit", text: "A small bowl of fresh fruit, whatever we find at the market for the day.", price: "3$" }],
    [{ title: "Pancakes", text: "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.", price: "4$" },
    { title: "French Toast", text: "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.", price: "5$" }, 
    { title: "Beary Veggie Sandwitch", text: "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.", price: "8$" }]
    ];

    let i = 0;
    patern.forEach(element => {
        const miniHeadingContainer = document.createElement('div');
        miniHeadingContainer.classList.add('mini-heading-container');

        const miniHeading = document.createElement("div");
        miniHeading.classList.add('mini-heading');

        miniHeading.insertAdjacentHTML('beforeend', `<h1>${naslovi[i]}</h1>`);
        miniHeadingContainer.appendChild(miniHeading);
        contentDiv.appendChild(miniHeadingContainer);

        element.forEach(el =>{
            const menuContainer = document.createElement('div');
            menuContainer.classList.add('menu-container');
    
            const menu = document.createElement('div');
            menu.classList.add('menu-content');
            menuContainer.appendChild(menu);
            menu.insertAdjacentHTML('beforeend', `<h3>${el.title}</h3>`);
            menu.insertAdjacentHTML('beforeend', `<p>${el.text}</p>`);
            menu.insertAdjacentHTML('beforeend', `<div><p>${el.price}</p><img class="menu-img" width = "260px" height="360px"></div>`);
            contentDiv.appendChild(menuContainer);
            
        })

        
        i++;

    })

}

export default Menu;