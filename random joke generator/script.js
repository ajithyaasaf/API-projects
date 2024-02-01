function fetchRandomJoke() {
    document.getElementById('jokeContainer').innerHTML
    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then((res) => res.json())
        .then((data) => {
            const jokeContainer = document.getElementById('jokeContainer');         
            if (data.type === 'twopart') {
                jokeContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
            } else {
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            }
        })
        .catch((err) => console.log(err));
}
document.getElementById('generateJoke').addEventListener('click', fetchRandomJoke);
