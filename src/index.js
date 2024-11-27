import './styles.css';
import createHome from './components/home';
import createMenu from './components/menu';
import createContact from './components/contact';

const content = document.getElementById('content');

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

function loadHome() {
    content.innerHTML = '';
    content.appendChild(createHome());
}

function loadMenu() {
    content.innerHTML = '';
    content.appendChild(createMenu());
}

function loadContact() {
    content.innerHTML = '';
    content.appendChild(createContact());
}

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);

loadHome();