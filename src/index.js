function displayAnime (response) {
    new Typewriter("#show-anime", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateAnime(event) {

    event.preventDefault();

    let instructionInput = document.querySelector("#instructions");
    
    let apiKey = "e0ec6b874369tb90f96386aaf483o95a";
    let context = "You are an anime expert and enjoy recommending anime. Your mission is to generate five best anime in a specific genre or year in basic html. Separate each line with a <br/> and number each line. Make sure to follow the user instructions. Sign the end of the list with  'SheCodes AI' inside a <strong> element. Add a title";
    let prompt = `User instructions: List the best anime in ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let animeElement = document.querySelector("#show-anime");
    animeElement.classList.remove("hidden");
    animeElement.innerHTML = `<div class="blink">Generating your list</div>`;

    axios.get(apiUrl).then(displayAnime);

}

let animeFormElement = document.querySelector("#form");
animeFormElement.addEventListener("submit", generateAnime);
