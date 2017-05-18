class CardFactory {

  constructor(elemento) {
    this._contador = 0;
    this._elemento = elemento;
    console.log("hue" + this._elemento);
  }

  criarCardView() {
    this._contador++;
    return new CardView(this._elemento, this._contador);
  }

  get contador() {
    return this._contador;
  }

}
