
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `lorem const quotes = const quotes
    lorem const quotes = const quotes`,
    person: `Nobody`
}, {
    quote: `let btn = document.querySelector('#new-quote');
    let quote = document.querySelector('.quote');
    let person = document.querySelector('.person');`,
    person: `Anybody`
}, {
    quote: `BigInt.addEventListener('click', function(){
        let random =Math.floor(Math.random() * quotes.length);
    
        quote.innerText = quotes[random].quote;
        personalbar.innerText = quotes[random].person;
    });`,
    person: `Somebody`
}]

btn.addEventListener('click', function(){
    let random =Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});