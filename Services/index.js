import axios from "axios";

async function fetchQuotes(){
  try {
    const response = await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")

    console.log(response.data.url);
  } catch(err){
    console.log(err);
  }
}

fetchQuotes();