// Początek deklaracji zmiennej `ingredients` - tablica zawierająca różne składniki.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];
// Pobranie referencji do elementu HTML o id "ingredients" i przypisanie go do zmiennej `ingredientsList`.
const ingredientsList = document.getElementById("ingredients");
// Utworzenie pustego fragmentu dokumentu, który będzie używany do efektywnego dodawania elementów do DOM.
const fragment = document.createDocumentFragment();
// Rozpoczęcie iteracji przez elementy tablicy `ingredients` za pomocą pętli forEach.
ingredients.forEach((ingredient) => {
  // Wewnątrz pętli dla każdego składnika:
  // Utworzenie nowego elementu <li>.
  const liElement = document.createElement("li");
  // Ustawienie zawartości tekstowej elementu <li> na nazwę bieżącego składnika.
  liElement.textContent = ingredient;
  // Dodanie klasy "item" do elementu <li> w celu nadania mu odpowiedniego stylu (opcjonalne).
  liElement.classList.add("item");
  // Dodanie stworzonego elementu <li> do fragmentu dokumentu.
  fragment.append(liElement);
});
// Po zakończeniu pętli wszystkie elementy <li> znajdujące się w fragmencie dokumentu są przyłączane do listy <ul id="ingredients">.
ingredientsList.appendChild(fragment);
