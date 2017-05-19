class Card {

  constructor(titulo, texto) {
    this._titulo = titulo;
    this._texto = texto;
  }

  get titulo() {
    return this._titulo;
  }

  get texto() {
    return this._texto;
  }

}
