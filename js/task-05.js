// Pobieramy referencję do elementu input o id "name-input" i przypisujemy ją do zmiennej `nameInput`.
const nameInput = document.getElementById("name-input");
// Pobieramy referencję do elementu wyjściowego o id "name-output" i przypisujemy ją do zmiennej `nameOutput`.
const nameOutput = document.getElementById("name-output");
// Funkcja `updateNameOutput` jest wywoływana, gdy użytkownik wprowadza tekst w polu input.
function updateNameOutput() {
  // Pobieramy wprowadzony tekst z pola input i usuwamy zbędne spacje na początku i końcu za pomocą `trim()`.
  const name = nameInput.value.trim();
  // Aktualizujemy zawartość elementu wyjściowego na podstawie wprowadzonego tekstu lub wyświetlamy "Anonymous", jeśli pole jest puste.
  nameOutput.textContent = name || "Anonymous";
}
const h1 = document.getElementsByTagName("h2");

// Dodajemy nasłuchiwanie zdarzenia "input" na polu input. Gdy użytkownik wprowadza tekst, wywoływana jest funkcja `updateNameOutput`.
nameInput.addEventListener("input", updateNameOutput);
