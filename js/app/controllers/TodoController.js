class TodoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    let card = new Card("titulo 1 hsaushaushauheuheuheueuehuehuehueuheuheuhe", "texto 1euhueaheuaheuaheusaheushaeuasheusaheuaseuua");
    this._cardFactory = new CardFactory($("#todo"));

    let cardView = this._cardFactory.criarCardView();

    cardView.update(card);

    console.log();
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
