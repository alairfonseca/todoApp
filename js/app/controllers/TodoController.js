class TodoController {

  constructor() {
    let $ = document.querySelector.bind(document);
    this._cards = [];
    this._cardViews = [];
    this._cardViewFactory = new CardViewFactory();
    this._todoColumn = $("#todo");

    console.log();
  }

  adicionaCard(event) {
    event.preventDefault();
    let card = new Card("", "");
    let cardView = this._cardViewFactory.criarCardView(this._todoColumn);
    cardView.update(card);
  }

  allowDrop(event) {
    event.preventDefault();
    console.log('allow!');
  }

  drag(event) {
    event.dataTransfer.setData("text/html", event.target.id);
    console.log(event.target.id);
    console.log('dragou!');
  }

  drop(event) {
    console.log('dropou!');
    event.preventDefault();
    var data = event.dataTransfer.getData("text/html");
    console.log(document.getElementById(data));
    event.target.appendChild(document.getElementById(data));
  }

}
