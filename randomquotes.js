/* First the dataset for randomisation is defined in a variable. The variable is an object with key:value sets. As you can see the object is somewhat complex as there are nested objects present. This allows for the value:key delineation of the quotes into separate text and author properties. You could of course customise this as you see fit to describe dogs, cats, frankfurters and peppers, for example, with any number of value:key sets. */

var randomQuotes = {
    quoteOne: {
        text: 'Be yourself, everyone else is already taken.',
        author: 'Oscar Wilde'
},
    quoteTwo: {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: 'Marilyn Monroe'
},
    quoteThree: {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: 'Albert Einstein'
},
    quoteFour: {
    text: 'So many books, so little time',
    author: 'Frank Zappa'
},
    quoteFive: {
    text: "A room without books is like a body without a soul.",
    author: 'Marcus Tullius Cicero'
},
    quoteSix: {
    text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: 'Bernard M. Baruch'
},

};

/* Now the Javascript begins to call a function. This function assigns a numeric to each nested object in the obj passed to it. The numerics begin at 0 and describe the position of the passed obj as in an array. This function returns this array i.e. [0, 1, 2] with a length of 3. This is useful because it allows our randomisation to act upon the quantitative, which is essential. */
function getArrayOfQuotes(obj) {
return Object.keys(obj)
};

var arrayOfQuotes = (getArrayOfQuotes(randomQuotes));


/* Now variables are called to store the data output of a few computations. In the first instance there is a scaleable lottery for selecting a single nested object from our complex object. In the second and third instances, the components of these nested objected are separated and assigned to a variable to provide an ease of access in later functions. */
var arraySelector = arrayOfQuotes[(Math.floor(Math.random() * arrayOfQuotes.length))];
var selectedText = randomQuotes[arraySelector].text;
var selectedAuthor = randomQuotes[arraySelector].author;

/* These simple functions print text into the corresponding HTML element per the .html document */
function firstQuoteText() {
    document.getElementById('text').innerHTML = (selectedText);
}

function firstQuoteAuthor() {
    document.getElementById('author').innerHTML = (selectedAuthor);
}


/* Here is the random button's function. There is nothing new here however as the random button uses an on click event it is cleaner code to include the function in the .js file and simply invoke the single-line function in the HTML document. The reason that you do not do something similar with the initial quote retrieval is because of the fact that you can't call .js 'on load' for a div HTML element. Therefore best practice is to call the script directly in the HTML using <script> tags and either immediately after the element or at the end of the body to ensure the page loads before Javascript has an opportunity to slow down the loading. */
function getAnotherQuote() {
    var arraySelector = arrayOfQuotes[(Math.floor(Math.random() * arrayOfQuotes.length))];
    var selectedText = randomQuotes[arraySelector].text;
    var selectedAuthor = randomQuotes[arraySelector].author;
    document.getElementById('text').innerHTML = (selectedText);
    document.getElementById('author').innerHTML = (selectedAuthor);
    }
