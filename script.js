const quote = document.querySelector('.textBox');
const newQuoteButton = document.getElementById('quoteButton');
const authorName = document.querySelector('.author .authorName');

function newQuote() {
  fetch('https://api.quotable.io/random')
    .then((respone) => respone.json())
    .then((result) => {
      console.log(result);
      quote.innerText = result.content;
      authorName.innerText = result.author;
    });
}

newQuoteButton.addEventListener('click', newQuote);
