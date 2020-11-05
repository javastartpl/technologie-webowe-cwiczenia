const title = "Kurs programowania";
const h1 = "Kurs programowania w JavaScript";
const p = "Ucz się na praktycznych przykładach, rozwiązując dziesiątki zadań.";
const price = 299;

let html = "<html>"
html += "<head><title>" + title + "</title></head>";
html += "<body>";
html += "<h1>" + h1 + "</h1>";
html += "<p>" + p + "</p>";
html += "<p>Cena kursu: " + price + "zł</p>";
html += "</body>";
html += "</html>";

console.log(html);
