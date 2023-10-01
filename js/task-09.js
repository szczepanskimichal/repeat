// Pobieramy referencję do przycisku o klasie "change-color" i przypisujemy ją do zmiennej `changeColorButton`.
const changeColorButton = document.querySelector(".change-color");
// Pobieramy referencję do elementu o klasie "color" (gdzie wyświetlamy kolor) i przypisujemy ją do zmiennej `colorSpan`.
const colorSpan = document.querySelector(".color");
// Dodajemy nasłuchiwanie na zdarzenie "click" na przycisku "change-color".
changeColorButton.addEventListener("click", () => {
  const randomColor = `#${Math.random().toString(16).slice(2, 8)}`;
  // Ustawiamy tło strony na nowy losowy kolor.
  document.body.style.backgroundColor = randomColor;
  //wyswietlanie koloru
  colorSpan.textContent = randomColor;
});

//-------------------------------------------------
// //this is my old code
// // Funkcja getRandomHexColor generuje losowy kolor w formacie szesnastkowym.
// function getRandomHexColor() {
//     // Generujemy losową liczbę całkowitą od 0 do 16777215 (która reprezentuje wszystkie możliwe kolory w formacie szesnastkowym).
//     const randomColor = Math.floor(Math.random() * 16777215);

//     // Zamieniamy tę liczbę na format szesnastkowy i uzupełniamy ją zerami na początku, aby uzyskać 6 znaków.
//     return `#${randomColor.toString(16).padStart(6, "0")}`;
//   }

//   // Pobieramy referencję do przycisku o klasie "change-color" i przypisujemy ją do zmiennej `changeColorButton`.
//   const changeColorButton = document.querySelector(".change-color");

//   // Pobieramy referencję do elementu o klasie "color" (gdzie wyświetlamy kolor) i przypisujemy ją do zmiennej `colorSpan`.
//   const colorSpan = document.querySelector(".color");

//   // Pobieramy referencję do ciała dokumentu (body) i przypisujemy ją do zmiennej `body`.
//   const body = document.body;

//   // Dodajemy nasłuchiwanie na zdarzenie "click" na przycisku "change-color".
//   changeColorButton.addEventListener("click", function () {
//     // Generujemy nowy losowy kolor, wywołując funkcję getRandomHexColor.
//     const newColor = getRandomHexColor();

//     // Ustawiamy tło strony na nowy kolor.
//     body.style.backgroundColor = newColor;

//     // Wyświetlamy ten kolor w elemencie o klasie "color".
//     colorSpan.textContent = newColor;
//   });
