function displayAnime (response) {
    new Typewriter("#anime", {
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
    let context = "You are an anime expert and enjoy recommending anime. Your mission is to generate five best anime in a specific genre or year in basic html. Separate each line with a <br/> and number each line. Make sure to follow the user instructions. Sign the anime with  'SheCodes AI' inside a <strong> element.";
    let prompt = `User instructions: List the best anime in ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayAnime);

}

