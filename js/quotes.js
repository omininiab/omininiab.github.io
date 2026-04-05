const quotes = [
    { text: "There is no such thing as a free lunch.", author: "Milton Friedman" },
    { text: "The first lesson of economics is scarcity: There is never enough of anything to satisfy all those who want it. The first lesson of politics is to disregard the first lesson of economics.", author: "Thomas Sowell" },
    { text: "A society that puts equality before freedom will get neither. A society that puts freedom before equality will get a high degree of both.", author: "Milton Friedman" },
    { text: "The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.", author: "F.A. Hayek" },
    { text: "Government's view of the economy could be summed up in a few short phrases: If it moves, tax it. If it keeps moving, regulate it. And if it stops moving, subsidize it.", author: "Ronald Reagan" },
    { text: "The problem is not that people are taxed too little, the problem is that government spends too much.", author: "Ronald Reagan" },
    { text: "I have never understood why it is 'greed' to want to keep the money you have earned but not greed to want to take somebody else's money.", author: "Thomas Sowell" },
    { text: "Underlying most arguments against the free market is a lack of belief in freedom itself.", author: "Milton Friedman" },
    { text: "It is no crime to be ignorant of economics, which is, after all, a specialized discipline and one that most people consider to be a 'dismal science.' But it is totally irresponsible to have a loud and vociferous opinion on economic subjects while remaining in this state of ignorance.", author: "Murray Rothbard" },
    { text: "If you put the federal government in charge of the Sahara Desert, in 5 years there'd be a shortage of sand.", author: "Milton Friedman" }
];

const quoteObj = quotes[Math.floor(Math.random() * quotes.length)];

const randomQuote = document.querySelector("#randomQuote");
if (randomQuote) {
    randomQuote.textContent = quoteObj.text;
}

const quoteAuthor = document.querySelector("#quoteAuthor");
if (quoteAuthor) {
    quoteAuthor.innerHTML = quoteObj.author;
}

const displayQuote = document.getElementById("displayQuote");
if (displayQuote) {
    displayQuote.style.width = "80%";
    displayQuote.style.maxWidth = "800px";
    displayQuote.style.margin = "0 auto";
}
