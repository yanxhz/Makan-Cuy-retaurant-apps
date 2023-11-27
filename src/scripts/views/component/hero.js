/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), ">
    <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
        <img src='./images/hero-image_4-xlarge.jpg' alt="hero picture">
      </picture>
    <div class="hero__inner">
        <h1 class="hero__title">MAKAN CUY!!</h1>
        <p class="hero__tagline">Makan Keliling Indonesia.</p>
    </div>
</div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
