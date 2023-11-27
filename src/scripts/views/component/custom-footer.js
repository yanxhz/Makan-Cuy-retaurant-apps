/* eslint-disable require-jsdoc */
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
      <p>Copyright © 2022 - MAKAN CUYY!!</p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
