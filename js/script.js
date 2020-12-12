/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Julie Branyan
******************************************/

//Stores quotes to display
const quotes = [
  {
    quote: "I Drink From The Keg Of Glory. Bring Me The Finest Muffins And Bagels In All The Land.",   
    source: "Josh Lyman",   
    citation: "The West Wing",
    year: 1999 
  },
  {
    quote: "Come on, you know how this works. You fail and then you try something else. And you fail \
    again and again, and you fail a thousand times, and you keep trying because maybe the 1,001st idea might work.",   
    source: "Michael",   
    citation: "The Good Place",
    year: 2020   
  },
  {
    quote: "Maybe The Best Thing To Do Is Stop Trying To Figure Out Where You’re Going And Just Enjoy \
    Where You’re At.",  
    source: "John Dorian",
    citation: "Scrubs", 
    year: 2002
  },
  {
    quote: "We need to remember what's important in life. Friends, waffles, and work. Or waffles, friends, \
    work. It doesn't matter. But work is third.",  
    source: "Leslie Knope",
    citation: "Parks and Rec",  
    year: 2011
  },
  {
    quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",  
    source: "Michael Scott",
    citation: "The Office",  
    year: 2006,
    tags: "humor"
  },
  {
    quote: "Hello, IT. Have you tried turning it off and on again?",  
    source: "Roy",
    citation: "IT Crowd",
  }
]

//sets the refresh interval for the quote and page background color
var refreshTime = setInterval(autorefreshQuotes, 6000);

//Assigns a random number in order to select a quote from the array
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//Used to autorefresh the quote and background color displayed on the page
function autorefreshQuotes(){
  printQuote();
}

//Creates a random color
//Source: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function setRandomColor() {
  let randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

//Builds the quote to display on the page and sets the background color
function printQuote(){

  //sets the background color
  document.body.style.backgroundColor = setRandomColor();
  
  //resets the interval timer on button click to enhance user experience
  clearInterval(refreshTime);
  refreshTime = setInterval(autorefreshQuotes, 6000);


  let randomQuote = getRandomQuote();
  let html = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`

  //If the quote has a citation then add it to the html
  if(randomQuote.citation){
    html = html.concat(`<span class="citation"> ${randomQuote.citation} </span>`);
  }
  //If the quote has a year then add it to the html
  if(randomQuote.year){
    html = html.concat(`<span class="year"> ${randomQuote.year} </span>`);
  }
  //If the quote has a tag then add it to the html
  if(randomQuote.tags){
    html = html.concat(`<span class="tags"> ${randomQuote.tags} </span>`);
  }

  //Adds a paragraph tag to the end of the html
  html = html.concat(`</p>`);

  return document.getElementById('quote-box').innerHTML = html; 
}

//Sets the quote when the button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Sets the background color when the button is clicked
document.getElementById('load-quote').addEventListener("click", setRandomColor, false);

