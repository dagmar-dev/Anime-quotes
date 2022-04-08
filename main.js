document.querySelector('i').addEventListener('click', refreshButton)

fetch('https://animechan.vercel.app/api/random')
    .then((response) => response.json())
    .then((quote) => {
        document.querySelector('h2').innerText = quote.anime
        document.querySelector('h3').innerText = quote.character
        document.querySelector('p').innerText = quote.quote
    })

function refreshButton() {
    fetch('https://animechan.vercel.app/api/random')
        .then((response) => response.json())
        .then((quote) => {
            document.querySelector('h2').innerText = quote.anime
            document.querySelector('h3').innerText = quote.character
            document.querySelector('p').innerText = quote.quote
        })
}
