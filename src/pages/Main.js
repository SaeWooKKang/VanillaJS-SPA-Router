import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function MainPage() {
  const $main = document.createElement('div');
  $main.setAttribute('id', 'mainPage');

  $main.append(
    Header(),
    'Main Page!',
    Footer(),
  );

  return $main;
};

export default MainPage;