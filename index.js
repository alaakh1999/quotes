var btn = document.getElementById("btn")

btn.onclick = function () {
    displayQuote()
}

var quotesArr =
    [
        {
            'author': ' Dr. Seuss',
            'quote': 'You know you are in love when you can not fall asleep because reality is finally better than your dreams.'
        },
        {
            'author': 'Mae West',
            'quote': 'You only live once, but if you do it right, once is enough.'
        },
        {
            'author': 'Robert Frost',
            'quote': 'In three words I can sum up everything I have learned about life: it goes on.'
        },
        {
            'author': 'Mark Twain',
            'quote': 'If you tell the truth, you dont have to remember anything.'

        },
        {
            'author': ' Elbert Hubbard',
            'quote': 'A friend is someone who knows all about you and still loves you.'
        },
        {
            'author': 'Stephen Chbosky',
            'quote': 'We accept the love we think we deserve.'
        },
    ];
// function displayQuote() 
// {
//     var random =Math.floor(Math.random()*quotesArr.length + 1);
//     document.getElementById("quoteTxt").innerHTML =`"${quotesArr[random].quote}"`;
//     document.getElementById("authorName").innerHTML =`--${quotesArr[random].author}`;

// }
var lastNumber = 0;

function displayQuote() {

    var randomNum = function () {
        var getRandomNum = Math.floor(Math.random() * (quotesArr.length));
        if (getRandomNum != lastNumber) {
            document.getElementById("quoteTxt").innerHTML = `"${quotesArr[getRandomNum].quote}"`;
            document.getElementById("authorName").innerHTML = `--${quotesArr[getRandomNum].author}`;
            lastNumber = getRandomNum;
            console.log(getRandomNum)
        } else {
            randomNum();
        }
    };

    randomNum();
}

