import './style.css'
import axios from "axios";

// const searchInput = document.getElementById("search-input");
const results = document.getElementById("quotes-list");


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://thesimpsonsquoteapi.glitch.me/quotes',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error); 
});

document.addEventListener("DOMContentLoaded", function(){
  async function fetchData() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://thesimpsonsquoteapi.glitch.me/quotes',
      headers: { }
    };

    try {
      const resp = await axios.request(config)

      console.log(resp);
      const quotes = resp.data;
      displayQuotes(quotes);
    } catch(error){
      console.log(error);
      results.innerText = "Missing quotes";
    }
  }
  fetchData();
})

function displayQuotes(quotes){
  const quotesList = quotes.map(quote => {
        return `<li class="quote-list"><blockquote>"${quote.quote}"</blockquote><p>${quote.character}</p><img src="${quote.image}" alt="${quote.character}"></li>`;
      }).join ('');
      results.innerHTML = `<ul class="quotes">${quotesList}</ul>`;
}


