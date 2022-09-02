import { navigate } from '../utils/index.js';

function Header() {
  const $header = document.createElement('header');

  const template = `
    <nav>
      <ul id='navigation'>
        <li><a href='/'>Landing Page</a></li>
        <li><a href='/main'>Main</a></li>
      </ul>
    </nav>
  `;

  $header.innerHTML = template;

  $header.addEventListener('click', clickLink)

  return $header;
};

export default Header;

const clickLink = e => {
  if (!e.target.matches('#navigation > li > a')) return;

  navigate(e);
};

