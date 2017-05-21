class CardViewFactory {

  constructor() {
    this._contador = 0;
    this._elemento = '';
  }

  criarCardView(elemento) {
    this._contador++;
    this._elemento = elemento;
    console.log(this._contador + "--");
    return new CardView(this._elemento, this._contador);
  }

  get contador() {
    return this._contador;
  }

}
