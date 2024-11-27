function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Our Menu";
    menuTitle.classList.add('menu-title');

    // Create menu sections
    const sections = [
        {
            title: "Appetizers",
            items: [
                { name: "Guacamole Fresco", price: "$8.99", description: "Fresh avocados with lime, cilantro, and pico de gallo" },
                { name: "Queso Fundido", price: "$7.99", description: "Melted cheese with chorizo and poblano peppers" },
                { name: "Nachos Supreme", price: "$10.99", description: "Loaded with beans, cheese, jalapeños, and sour cream" }
            ]
        },
        {
            title: "Main Dishes",
            items: [
                { name: "Carne Asada", price: "$18.99", description: "Grilled steak with mexican rice and refried beans" },
                { name: "Enchiladas Verdes", price: "$15.99", description: "Three chicken enchiladas with green sauce" },
                { name: "Fish Tacos", price: "$16.99", description: "Three tacos with grilled fish, cabbage slaw, and chipotle sauce" }
            ]
        },
        {
            title: "Desserts",
            items: [
                { name: "Churros", price: "$6.99", description: "With chocolate sauce and dulce de leche" },
                { name: "Flan", price: "$5.99", description: "Classic mexican caramel custard" }
            ]
        }
    ];

    menu.appendChild(menuTitle);

    sections.forEach(section => {
        const menuSection = document.createElement('div');
        menuSection.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;
        menuSection.appendChild(sectionTitle);

        const itemsGrid = document.createElement('div');
        itemsGrid.classList.add('menu-items');

        section.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('price');
            itemPrice.textContent = item.price;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemPrice);
            menuItem.appendChild(itemDescription);

            itemsGrid.appendChild(menuItem);
        });

        menuSection.appendChild(itemsGrid);
        menu.appendChild(menuSection);
    });

    return menu;
}

export default createMenu;