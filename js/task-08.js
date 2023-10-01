// Pobieramy referencję do formularza logowania o klasie "login-form" i przypisujemy ją do zmiennej `loginForm`.
const loginForm = document.querySelector(".login-form");

// Dodajemy nasłuchiwanie na zdarzenie "submit" formularza.
loginForm.addEventListener("submit", function (event) {
  // Zapobiegamy domyślnemu zachowaniu formularza, czyli jego wysłaniu i przeładowaniu strony.
  event.preventDefault();

  // Pobieramy referencje do pól email i password z formularza.
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Sprawdzamy, czy pole email lub pole hasła są puste.
  if (!emailInput.value || !passwordInput.value) {
    // Jeśli któreś z pól jest puste, wyświetlamy alert z komunikatem.
    alert("Wypełnij wszystkie pola formularza.");
  } else {
    // Jeśli oba pola są wypełnione, tworzymy obiekt `formData` zawierający wartości z pól email i password.
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Wyświetlamy dane z formularza w konsoli.
    console.log("Dane formularza:", formData);

    // Resetujemy zawartość formularza, czyli usuwamy wprowadzone dane.
    loginForm.reset();
  }
});

//to jest bardzo wazne, naucz sie pisac inaczej reset

// // Resetujemy zawartość formularza, czyli usuwamy wprowadzone dane.
// clearFormFields(loginForm);
// }
// });

// // Funkcja do czyszczenia zawartości pól formularza.
// function clearFormFields(form) {
// const formFields = form.querySelectorAll("input");
// formFields.forEach((field) => {
//   field.value = "";
// });
// }
