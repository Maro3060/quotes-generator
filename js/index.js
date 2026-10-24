var quotes = [
  { quote: "The only way to do great work is to love what you do.", 
    author: "Steve Jobs" },
  { quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela" },
  { quote: "The journey of a thousand miles begins with a single step.", 
    author: "Lao Tzu" },
  { quote: "In the middle of difficulty lies opportunity.", 
    author: "Albert Einstein" },
  { quote: "Whether you think you can, or you think you can't, you're right.", 
    author: "Henry Ford" }
];


function getQoute() {
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("gen-qoute-box").innerHTML = `
    <p class="fs-2">"${quotes[random].quote}"</p>
    <p class="fs-3">${quotes[random].author}</p>
    `
}

getQoute();