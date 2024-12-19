// Fetch the quote and display it
function fetchQuote() {
    fetch('https://quotes-api-self.vercel.app/quote')
        .then(response => response.json())
        .then(data => {
            // Call the generate function after data is retrieved
            generate(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
}

// Elements from the DOM
const blockquote = document.querySelector("blockquote");
const span = document.querySelector("span");
const generateBtn = document.querySelector(".generateBtn");

// Update the DOM with the quote and author
function generate(data) {
    blockquote.innerHTML = data.quote;
    span.innerHTML = data.author;
    document.querySelector(".tweet").innerHTML = `
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(data.quote)} -by ${encodeURIComponent(data.author)}" target="_blank">
            <img src="images/twitter.png" alt="twitter logo">Tweet
        </a>
    `;
}

// Add a click event listener to the button
generateBtn.addEventListener("click", fetchQuote);

// Ensure that the page is ready before interacting with the DOM
document.addEventListener("DOMContentLoaded", () => {
    fetchQuote(); // Fetch a quote when the page is loaded
});
