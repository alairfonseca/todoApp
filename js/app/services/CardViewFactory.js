class CardViewFactory {

  constructor(elemento) {
    this._contador = 0;
    this._elemento = elemento;
  }

  criarCardView() {
    this._contador++;
    return new CardView(this._elemento, this._contador);
  }

  get contador() {
    return this._contador;
  }

}
