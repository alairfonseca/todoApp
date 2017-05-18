class TodoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    let card = new Card("titulo 1", "texto 1");

    let cardView = new CardView($("#todo"));

    cardView.update(card);

    console.log();
  }

}
