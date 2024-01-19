var patchButButtons = document.querySelectorAll(".Patch_buy_BTN");

patchButButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    window.alert(
      "На даний момент ця функція не доступна. Ви можете перейти на інстаграм-сторінку за ніком @VELCRO_PATHCES_ST або нажавши на логотип інстаграму внизу сторінки"
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all card elements
  const cards = document.querySelectorAll(".card");

  // Find the maximum height among all cards
  let maxHeight = 0;
  cards.forEach((card) => {
    const cardHeight = card.clientHeight;
    if (cardHeight > maxHeight) {
      maxHeight = cardHeight;
    }
  });

  // Set the height of all cards to the maximum height
  cards.forEach((card) => {
    card.style.height = maxHeight + "px";
  });
});
