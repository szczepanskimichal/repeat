// Pobieramy referencję do elementu suwaka o id "font-size-control" i przypisujemy ją do zmiennej `fontSizeControl`.
const fontSizeControl = document.getElementById("font-size-control");
// Pobieramy referencję do elementu tekstu o id "text" i przypisujemy ją do zmiennej `textElement`.
const textElement = document.getElementById("text");
// Dodajemy nasłuchiwanie zdarzenia "input" na elemencie suwaka.
fontSizeControl.addEventListener("input", () => {
  // Gdy użytkownik zmienia wartość suwaka, ustawiamy wielkość czcionki obszaru tekstu na podstawie wartości suwaka.
  textElement.style.fontSize = fontSizeControl.value + "px";
});
// Na początku ustawiamy początkową wielkość czcionki obszaru tekstu na podstawie początkowej wartości suwaka.
textElement.style.fontSize = fontSizeControl.value + "px";
