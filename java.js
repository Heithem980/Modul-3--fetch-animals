const dogsURL = "https://dog.ceo/api/breeds/image/random";
const catsURL = " http:\/\/aws.random.cat\/meow";
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
      console.log(data)
      showPic.src = data.file;
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
