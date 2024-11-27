function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    
    const locationInfo = document.createElement('div');
    locationInfo.classList.add('location-info');
    locationInfo.innerHTML = `
        <h2>Location</h2>
        <p>123 Mexican Food Street</p>
        <p>Foodtown, FD 12345</p>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@amysmexicangrill.com</p>
    `;

    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.innerHTML = `
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
    `;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    contactInfo.appendChild(title);
    contactInfo.appendChild(locationInfo);
    contact.appendChild(contactInfo);
    contact.appendChild(form);

    return contact;
}

export default createContact;