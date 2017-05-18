class CardView extends View {

  constructor(elemento, contador) {
    super(elemento);
    this._contador = contador;
  }

  template() {
    return `
            <div id="card + '${this._contador}'" class="row" draggable="true" ondragstart="todoController.drag(event)">
              <div class="card card-outline-primary mb-3 text-center">
                <div class="card-block">
                <blockquote class="card-blockquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                </div>
              </div>
            </div>
           `;
  }

}
