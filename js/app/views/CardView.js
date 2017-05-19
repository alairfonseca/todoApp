class CardView extends View {

  constructor(elemento, contador) {
    super(elemento);
    this._contador = contador;
  }

  template(model) {
    return `
            <div id="card${this._contador}" class="row" draggable="true" ondragstart="todoController.drag(event)">
              <div class="card card-inverse card-primary mb-3 text-center">
                 <div class="card-block">
                 <blockquote class="card-blockquote">
                 <p>${model.titulo}</p>
                 <footer><cite title="Source Title">${model.texto}</cite></footer>
                 </blockquote>
                 </div>
              </div>
            </div>
           `;
  }

}
