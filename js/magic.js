let answers = ["It is certain",
    "Yes", "signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My source say no",
    "outlook not so good",
    "Very Doubtful",
    "reply Hazy, try again",
    "Ask again Later",
    "Better not tell you now",
    "cannot predict now",
    "It is decidedly so",
    "without a doubt",
    "yes difinitely",
    "You may rely on it",
    "As I see it Yes",
    "Most likely",
    "outlook good",
    "concntrate and ask agin"
];

window.onload = function() {
    let Eight = document.getElementById("Eight8ball");
    let answers = document.getElementById("answer");
    let Eight8ball = document.getElementById("Eightball");
    let question = document.getElementById("question");

    Eight8ball.addEventListener("click", function() {
        if (question.Value.length == 0) { alert('Enter a question!'); } else {
            Eight.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answers.innerText = answers[num];
        }


    })
};