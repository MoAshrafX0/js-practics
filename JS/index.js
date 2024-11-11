let btn = document.getElementById('btn');
let output = document.getElementById('quote-output');
let quotes = [
    ' “ Be yourself; everyone else is already taken ”     -Oscar Wilde',
    '“A room without books is like a body without a soul.”     -Marcus Tullius Cicero',
    " “In three words I can sum up everything I've learned about life: it goes on.”     - Robert Frost ",
    " “If you tell the truth, you don't have to remember anything.”     ― Mark Twain",
    " “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ― Maya Angelou",
    "“A friend is someone who knows all about you and still loves you.”      ― Elbert Hubbard",
];


btn.addEventListener('click' , function() {
    var redomeQuotes = quotes [Math.floor(Math.random() * quotes.length)]
    output.innerHTML = redomeQuotes;
});