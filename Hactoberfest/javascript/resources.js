var cards = document.querySelectorAll(".card");
var cardsDescription = document.querySelectorAll(".card-description");
for (let i = 0; i < cards.length; i++) {
  cards[i].onclick = function () {
    cardsDescription[i].classList.remove("d-none");
  };
}
