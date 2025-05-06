let quotes = [
    {quote: "Единственный способ делать отличную работу — любить то, что ты делаешь", author: "Стив Джобс"},
    {quote: "Успех — это не ключ к счастью. Счастье — ключ к успеху", author: "Альберт Швейцер"},
    {quote: "Посреди каждой трудности скрыта возможность", author: "Альберт Эйнштейн"},
    {quote: "Поверь в себя, и ты уже на полпути", author: "Теодор Рузвельт"}
];
function addQuote() {
    let quote = document.getElementsByClassName("inputquote")[0].value;
    let author = document.getElementsByClassName("inputauthor")[0].value;
    if (quote !== "") {
        if (author === "") {
            author = "Неизвестный";
        }
        quotes.push({quote: quote, author: author});
        document.getElementsByClassName("inputquote")[0].value = "";
        document.getElementsByClassName("inputauthor")[0].value = "";
    }
}
function showQuote() {
    document.getElementById("quoteDisplay").style.opacity = "0";
    document.getElementById("quoteDisplay").style.transition = "top 500ms ease-in-out, opacity 500ms ease-in-out, outline 500ms ease-in-out, outline-offset 500ms ease-in-out, background-color 500ms ease-in-out";
    let randomQuote = Math.floor(Math.random() * quotes.length);
    let fullQuote = `"${quotes[randomQuote].quote}" ©${quotes[randomQuote].author}`;
    let showquoteButton = document.getElementsByClassName("quotes-button")
    showquoteButton[0].disabled = true;
    showquoteButton[1].disabled = true;
    setTimeout(() => {
        document.getElementById("quoteDisplay").textContent = "";
        for (let i = 0; i < fullQuote.length; i++) {
            setTimeout(() => {
                document.getElementById("quoteDisplay").textContent += fullQuote[i];
            }, 50 * i);
        }
        document.getElementById("quoteDisplay").style.opacity = 1;
        document.getElementById("quoteDisplay").style.transition = "top 500ms ease-in-out, opacity 2s ease-in-out, outline 500ms ease-in-out, outline-offset 500ms ease-in-out, background-color 500ms ease-in-out";
    }, 500)
    setTimeout(() => {
        showquoteButton[0].disabled = false;
        showquoteButton[1].disabled = false;
    }, 55 * fullQuote.length);
}

function sceneTransition() {
    document.getElementsByTagName('body')[0].classList.toggle('window-active');
    document.getElementsByClassName('scene-transition')[0].classList.toggle('scene-transition-transition');
    setTimeout(() => {
        document.getElementsByClassName('scene-transition')[0].classList.toggle('scene-transition-transition');
        let sceneTransition = document.getElementsByClassName('scene-transition')[0].textContent;
        if (sceneTransition === "Закрыть") {
            document.getElementsByClassName('scene-transition')[0].textContent = "Начать";
        } else {
            document.getElementsByClassName('scene-transition')[0].textContent = "Закрыть";
        }
    }, 500)
}

function clearQuotes() {
    quotes = []
    document.getElementById("quoteDisplay").textContent = "Цитаты удалены!";
}