class VanillaComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Vanilla component</p>`;
  }
}

customElements.define('vanilla-comp', VanillaComp);
