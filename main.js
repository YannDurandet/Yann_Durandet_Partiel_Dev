// ceci n'est absolument pas le même dark mode utilisé pour mon site vitrine en novembre dernier, vous faite une hallucination.
let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "darkTheme"
  } else {
    document.body.classList.remove("darkTheme")
  }
}


const button = document.getElementById('toggleButton');
const article = document.getElementById('article');

button.addEventListener('click', function() {
  if (article.style.display === 'none') {
    article.style.display = 'block';
  } else {
    article.style.display = 'none';
  }
});

const button2 = document.getElementById('toggleButton2');
const article2 = document.getElementById('article2');

button2.addEventListener('click', function() {
  if (article2.style.display === 'none') {
    article2.style.display = 'block';
  } else {
    article2.style.display = 'none';
  }
});

const button3 = document.getElementById('toggleButton3');
const article3 = document.getElementById('article3');

button3.addEventListener('click', function() {
  if (article3.style.display === 'none') {
    article3.style.display = 'block';
  } else {
    article3.style.display = 'none';
  }
});