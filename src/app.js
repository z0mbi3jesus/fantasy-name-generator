const firstNames = ["Aragorn", "Legolas", "Gimli", "Frodo", "Samwise", "Gandalf", "Sauron", "Bilbo"];
const lastNames = ["Baggins", "Oakenshield", "Greenleaf", "Stormcrow", "Brandybuck", "Dumbledore", "Took", "Gryffindor"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateFantasyName() {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    return `${firstName} ${lastName}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate-button");
    const nameDisplay = document.getElementById("name-display");

    generateButton.addEventListener("click", () => {
        const fantasyName = generateFantasyName();
        nameDisplay.textContent = fantasyName;
    });
});