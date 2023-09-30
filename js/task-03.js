const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// // Pobranie referencji do elementu z klasą "gallery" w dokumencie HTML.
// const galleryList = document.querySelector(".gallery");
// // Iteracja przez elementy w tablicy `images` za pomocą pętli forEach.
// images.forEach((image) => {
//   // Tworzenie nowego elementu <li> reprezentującego pojedynczy obraz w galerii.
//   const li = document.createElement("li");
//   // Nadawanie nowemu elementowi klasę "gallery-item".
//   li.className = "gallery-item";
//   // Tworzenie elementu <img> reprezentującego obraz.
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   // Dodawanie elementu <img> do elementu <li>.
//   li.appendChild(img);
//   // Dodawanie elementu <li> do listy galerii.
//   galleryList.appendChild(li);
// });
//--------------------------------------
// Pobierz referencję do listy galerii <ul> z klasą "gallery".
const galleryList = document.querySelector(".gallery");

// Przejdź przez tablicę `images` i dla każdego obiektu utwórz odpowiednią zawartość HTML i dodaj ją do listy galerii.
images.forEach((image) => {
  // Utwórz znacznik <li> z zawartością HTML zawierającą obraz i jego atrybuty.
  const imageHTML = `
    <li class="gallery-item">
      <img src="${image.url}" alt="${image.alt}" />
    </li>
  `;

  // Dodaj zawartość HTML do listy galerii za pomocą metody insertAdjacentHTML().
  galleryList.insertAdjacentHTML("beforeend", imageHTML);
});
