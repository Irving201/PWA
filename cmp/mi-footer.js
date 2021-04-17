class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; Velasco Carreto Irving Alfredo`;
  }
}
customElements.define(
  "mi-footer", MiFooter);