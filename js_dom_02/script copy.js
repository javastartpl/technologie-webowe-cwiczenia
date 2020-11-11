class Game {
    constructor(title, rating, description) {
        this.title = title;
        this.rating = rating;
        this.description = description;
    }
}

let games = [];

function addTableRow(game) {
    let tableBody = document.getElementById("game-table-body");
    let tableRow = tableBody.insertRow();
    let titleCell = tableRow.insertCell();
    titleCell.appendChild(document.createTextNode(game.title));
    let ratingCell = tableRow.insertCell();
    ratingCell.appendChild(document.createTextNode(game.rating));
    let detailsCell = tableRow.insertCell();
    detailsCell.appendChild(createDetailsButton());
    let deleteCell = tableRow.insertCell();
    deleteCell.appendChild(createDeleteButton());
}

function createDetailsButton() {
    let detailsButton = createButton("Pokaż szczegóły");
    detailsButton.onclick = () => {
        let rowIndex = detailsButton.parentNode.parentNode.rowIndex - 1;
        let game = games[rowIndex];
        let gameDetailsParagraph = document.getElementById("game-details");
        gameDetailsParagraph.textContent = `Opis gry: ${game.description}`;
    };
    return detailsButton;
}

function createDeleteButton() {
    let deleteButton = createButton("Usuń");
    deleteButton.onclick = () => {
        let tableRow = deleteButton.parentNode.parentNode;
        let tableBody = tableRow.parentNode;
        tableBody.deleteRow(tableRow.rowIndex - 1);
    };
    return deleteButton;
}

function createButton(text) {
    let button = document.createElement("button");
    let buttonBody = document.createTextNode(text);
    button.appendChild(buttonBody);
    return button;
}

(function exampleGames() {
    games.push(new Game("Wiedźmin 3", 10, "Fantastyczna gra o walce z potworami i jeżdzeniu na koniu."));
    games.push(new Game("Starcraft", 7, "Walki kosmitów i różnych ras."));
    games.push(new Game("The Sims", 8, "Buduj domy, rozwijaj relacje. Prawdziwe życie w realnym świecie."));
    games.forEach(game => addTableRow(game));
})();