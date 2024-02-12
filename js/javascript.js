const landing = document.getElementById("landing");
let bgImg = ["001.jpg", "002.jpg", "003.jpg"];

setInterval(function () {
  let random = Math.floor(Math.random() * bgImg.length);
  landing.style.backgroundImage = `url(images/${bgImg[random]})`;
}, 5000);
