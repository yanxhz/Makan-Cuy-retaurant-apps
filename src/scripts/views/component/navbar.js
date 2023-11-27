/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="block_navbar_menu">
    <button href="#" id="menu" class="navbar__menu" aria-label="tombol menu">☰</button>
    <img class="logo" src="./images/Logo-xlarge.jpg" alt="Makan Cuy!! logo" > 


</div>

<nav id="drawer" class="nav">
    <img class="logo" src="./images/Logo-xlarge.jpg" alt="Makan Cuy!! logo" > 

    <ul class="nav__list">
        <li class="nav__item"><a href="#">Home</a></li>        
        <li   class="nav__item"><a href="#/favorite">Favorite</a></li>
        <li  class="nav__item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adrian-michael-duha-03560b206/">About Us</a></li>
    </ul>
</nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
