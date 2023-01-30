//RNG in a range
const randomNumber = (minRange, maxRange) => {
    return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
};

// numbers added in order in lottoNumbers array
let nsNumbers = new Set();

while (nsNumbers.size < 5) 
    nsNumbers.add(randomNumber(1, 50));
let getLottoNumbers = [...nsNumbers].sort((a, b) => a - b);

let lottoNumbers = getLottoNumbers.join(', ');


//numbers added in order in starNumbers array
let nsStars = new Set();

while (nsStars.size < 2)
    nsStars.add(randomNumber(1, 12))
let getStarsNumbers = [...nsStars].sort((a, b) => a - b);

let starsNumbers = getStarsNumbers.join(', ');

// Random sentence code block
let sumTotalLotto = getLottoNumbers.reduce((a,b) => a + b, 0);

let randomSentence = ''
if(sumTotalLotto <= 100) {
    randomSentence = 'These numbers are very small. Maybe you should buy another ticket.'
} else if (sumTotalLotto >= 160) {
    randomSentence = 'Oh! Look at these big numbers! You are not gonna win this time.'
} else {
    randomSentence = 'Numbers perfectly balanced. Enjoy your money... nah probably not.'
}

console.log(sumTotalLotto)
   

 const yourLottoTicket = () => {
   return `Hello, these are your lotto numbers: ${lottoNumbers}. Your stars are: ${starsNumbers}. ${randomSentence}`
 }
 
yourLottoTicket();

//DOM elements

let button = document.getElementById('button')
let numbersInWeb = yourLottoTicket();
let tryAgain = document.getElementById('try-again')

const showNumbers = () => {
    document.getElementById('your-numbers').innerHTML = numbersInWeb;
    tryAgain.style.display = 'block';
}

const resetNumbers = () => {
    location.reload();
}

button.addEventListener('click', showNumbers);
tryAgain.addEventListener('click', resetNumbers);


 

 
 