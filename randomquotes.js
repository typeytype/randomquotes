let randomQuotes = {
    quoteOne: {
        text: 'This works.',
        author: 'Linford Christie'
},
    quoteTwo: {
        text: 'Working hard!',
        author: 'Archimedes'
},
    quoteThree: {
        text: 'Hardly working...',
        author: 'Socrates'
},

};


function getArrayOfQuotes(obj) {
return Object.keys(obj)
};
var arrayOfQuotes = (getArrayOfQuotes(randomQuotes));

var arraySelector = arrayOfQuotes[(Math.floor(Math.random() * arrayOfQuotes.length))];
var selectedText = randomQuotes[arraySelector].text;
var selectedAuthor = randomQuotes[arraySelector].author;