// Pobieramy referencję do elementu input, który służy do wprowadzania ilości prostokątów.
const inputAmount = document.querySelector("#controls input");

// Pobieramy referencje do przycisków "Create" (tworzenie) i "Destroy" (usuwanie) oraz do kontenera na prostokąty.
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Funkcja getRandomHexColor generuje losowy kolor w formacie szesnastkowym.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Funkcja createBoxes tworzy i wyświetla prostokąty na stronie w ilości określonej przez `amount`.
function createBoxes(amount) {
  // Wyczyść istniejące prostokąty z kontenera.
  clearBoxes();
  let size = 30; // Początkowy rozmiar prostokątów.

  for (let i = 0; i < amount; i++) {
    // Tworzymy nowy element div reprezentujący prostokąt.
    const box = document.createElement("div");
    box.style.width = size + "px"; // Ustawiamy szerokość prostokąta.
    box.style.height = size + "px"; // Ustawiamy wysokość prostokąta.
    box.style.backgroundColor = getRandomHexColor(); // Ustawiamy losowy kolor tła prostokąta.
    boxesContainer.appendChild(box); // Dodajemy prostokąt do kontenera.
    size += 10; // Zwiększamy rozmiar prostokątów dla kolejnego.
  }
}

// Funkcja clearBoxes usuwa wszystkie prostokąty z kontenera.
function clearBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.lastChild);
  }
}

// Dodajemy nasłuchiwanie na kliknięcie przycisku "Create".
createButton.addEventListener("click", function () {
  const amount = parseInt(inputAmount.value, 10); // Pobieramy ilość prostokątów z pola input.

  // Sprawdzamy, czy ilość jest liczbą większą lub równą 1.
  if (isNaN(amount) || amount < 1) {
    return; // Jeśli ilość nie jest prawidłowa, to przerywamy działanie funkcji.
  }

  createBoxes(amount); // Tworzymy prostokąty na podstawie podanej ilości.
});

// Dodajemy nasłuchiwanie na kliknięcie przycisku "Destroy".
destroyButton.addEventListener("click", function () {
  const amountToDelete = parseInt(inputAmount.value, 10); // Pobieramy ilość do usunięcia z pola input.

  // Sprawdzamy, czy ilość do usunięcia jest liczbą większą lub równą 1.
  if (isNaN(amountToDelete) || amountToDelete < 1) {
    return; // Jeśli ilość nie jest prawidłowa, to przerywamy działanie funkcji.
  }

  const boxes = boxesContainer.querySelectorAll("div"); // Pobieramy wszystkie kwadraty.
  const numberOfBoxes = boxes.length; // Liczba dostępnych kwadratów.

  if (amountToDelete >= numberOfBoxes) {
    // Jeśli wartość jest większa lub równa liczbie dostępnych kwadratów, usuń wszystkie kwadraty.
    clearBoxes();
  } else {
    // Usuń dokładnie tyle kwadratów, ile jest wpisanych w polu input.
    for (let i = 0; i < amountToDelete; i++) {
      boxesContainer.removeChild(boxes[i]);
    }
  }
});
