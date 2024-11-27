function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const hero = document.createElement('div');
    hero.classList.add('hero');
    
    const headline = document.createElement('h1');
    headline.textContent = "Amy's Mexican Grill";
    
    const tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.textContent = "Authentic Mexican Flavors in Every Bite";
    
    hero.appendChild(headline);
    hero.appendChild(tagline);

    const about = document.createElement('div');
    about.classList.add('about-section');
    
    const aboutText = document.createElement('p');
    aboutText.textContent = "Welcome to Amy's Mexican Grill, where traditional recipes meet modern culinary excellence. Our family-owned restaurant brings you the authentic tastes of Mexico, carefully crafted with fresh, local ingredients and served with love.";
    
    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = `
        <h2>Hours</h2>
        <p>Monday - Thursday: 11am - 9pm</p>
        <p>Friday - Saturday: 11am - 10pm</p>
        <p>Sunday: 12pm - 8pm</p>
    `;

    about.appendChild(aboutText);
    about.appendChild(hours);

    home.appendChild(hero);
    home.appendChild(about);

    return home;
}

export default createHome;