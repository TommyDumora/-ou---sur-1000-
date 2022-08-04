let randomNumber = Math.floor(Math.random() * 1000);

let btn = document.querySelector("#btn").addEventListener("click", () => {

    let userNumber = parseInt(document.querySelector("#input").value);
    let result = document.querySelector("#result").innerHTML;

    if (userNumber === randomNumber) {
        result = "<p>Bravo !!</p>"
    } else if (userNumber < randomNumber) {
        result = "<p>C'est plus !!</p>"
    } else if (userNumber > randomNumber) {
        result = "<p>C'est moins !!</p>"
    }

    document.querySelector("#result").innerHTML = result;

});