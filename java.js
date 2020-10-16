const dogsURL = "https://dog.ceo/api/breeds/image/random";
const catsURL = " https://api.thecatapi.com/v1/images/search";
const foxesURL = "https://randomfox.ca/floof/";

const showPic = document.querySelector(".showPic");

// När "btnDog" klickas: hämta bild från URL och visa
const btnDog = document.querySelector(".btnDog");
btnDog.addEventListener("click", () => {
  fetch(dogsURL)
    .then((blob) => {
      return blob.json();
    })
    .then((data) => {
      showPic.src = data.message;
    });
});

// När "btnCat" klickas: hämta bild från URL och visa
const btnCat = document.querySelector(".btnCat");
btnCat.addEventListener("click", () => {
  fetch(catsURL)
    .then((blob) => {
      return blob.json();
    })
    .then((data) => {
      showPic.src = data.url;
    });
});
// När "btnFox" klickas: hämta bild från URL och visa
const btnFox = document.querySelector(".btnFox");
btnFox.addEventListener("click", () => {
  fetch(foxesURL)
    .then((blob) => {
      return blob.json();
    })
    .then((data) => {
      showPic.src = data.image;
    });
});
