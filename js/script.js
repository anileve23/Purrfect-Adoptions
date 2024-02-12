// žodžiai kuriuos galima atspėti
const words = [
    "dramblys",
    "gyvatė",
    "šuo",
    "katė",
    "sraigė",
    "zebras",
    "krokodilas",
    "karvė",
];

// Išrenkamas random žodis spėjimui
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);

// Atrenkamos raidės kurias jau spėjote
let guessedlist = [];

// Pradinis žodžio parodymas
let displayWord = "";
for (let i = 0; i < selectedWord.length; i++) {
    displayWord += "_ ";
}
document.getElementById("displayWord").textContent = displayWord;

// Funkcija patikrinanti spėjamą raidę
function guessLetter() {
    let inputElement =
        document.getElementById("letter-input");

    // Patikrina jei nebuvo įvesta raidė
    if (!inputElement.value) {
        alert("Įveskite raidę!");
        return;
    }

    let letter = inputElement.value.toLowerCase();

    // Išvalo visas reikšmes
    inputElement.value = "";

    // Patikrina ar raidė jau buvo spėta
    if (guessedlist.includes(letter)) {
        alert("Tu jau bandei šią raidę!");
        return;
    }

    // Patikrina ar raidė yra žodyje
    if (!selectedWord.includes(letter)) {
        alert("Šios raidės šiame žodyje nėra!");
    }

    // Prideda raidę prie jau spėtų raidžių
    guessedlist.push(letter);

    // Atnaujinamas žodžio pateikimas pagal atspėtas raides
    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedlist.includes(selectedWord[i])) {
            updatedDisplay += selectedWord[i] + " ";
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
    }
    document.getElementById("displayWord")
        .textContent = updatedDisplay;

    // Patikrina ar visos raidės buvo atspėtos
    if (allLettersGuessed) {
        alert("Sveikinu, tu atspėjai žodį!");
        resetGame(); // Reset the game
    }
}

// Function to reset the game
function resetGame() {
    // Išrenkamas naujas random žodis spėjimui
    randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];

    // Atrenkamos raidės kurias jau spėjote
    guessedlist = [];

    // Pradinis žodžio parodymas
    let displayWord = "";
    for (let i = 0; i < selectedWord.length; i++) {
        displayWord += "_ ";
    }
    document.getElementById("displayWord").textContent = displayWord;
}
