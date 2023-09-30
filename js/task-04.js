// Pobieramy referencję do elementu HTML o id "value" i przypisujemy ją do zmiennej `valueElement`.
const valueElement = document.getElementById("value");

// Pobieramy referencję do przycisku o atrybucie "data-action" ustawionym na "decrement" i przypisujemy ją do zmiennej `decrementButton`.
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);

// Pobieramy referencję do przycisku o atrybucie "data-action" ustawionym na "increment" i przypisujemy ją do zmiennej `incrementButton`.
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);

// Inicjalizujemy zmienną `counterValue` na wartość 0. Będzie przechowywać aktualną wartość licznika.
let counterValue = 0;

// Funkcja `incrementCounter` zwiększa wartość `counterValue` o 1 i aktualizuje widok.
function incrementCounter() {
  counterValue++;
  updateView();
}

// Funkcja `decrementCounter` zmniejsza wartość `counterValue` o 1 i aktualizuje widok.
function decrementCounter() {
  counterValue--;
  updateView();
}

// Funkcja `updateView` aktualizuje zawartość elementu o id "value" na bieżącą wartość `counterValue`.
function updateView() {
  valueElement.textContent = counterValue;
}

// Dodajemy nasłuchiwanie zdarzeń na przyciskach: po kliknięciu na przycisku "Decrement" wywołuje się funkcja `decrementCounter`, a na przycisku "Increment" wywołuje się funkcja `incrementCounter`.
decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

// Wywołujemy funkcję `updateView` po pierwszym załadowaniu strony, aby wyświetlić początkową wartość licznika.
updateView();
