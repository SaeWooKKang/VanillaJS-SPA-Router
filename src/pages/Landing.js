import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function LandingPage() {
  const $landing = document.createElement('div');
  $landing.setAttribute('id', 'landingPage');

  $landing.append(
    Header(),
    'Landing Page!',
    Footer(),
  );

  return $landing;
};

export default LandingPage;