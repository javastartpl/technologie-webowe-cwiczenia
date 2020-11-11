<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>JavaCzat</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
    <h1>Witaj na JavaCzacie!</h1>
    <p>Poniżej widzisz historię konwersacji, możesz do niej dołączyć</p>
</header>
<main>
    <ul class="message-list">
        <li>piotrek: cześć chłopaki! co słychać?</li>
        <li>marcin: siemka. Uczę się Javy, nieźle mi idzie.</li>
        <li>karol: elegancko, powodzenia :)</li>
    </ul>
    <form action="" method="post">
        <textarea name="message" placeholder="Twoja wiadomość" rows="5" required></textarea>
        <input name="author" placeholder="Twoja nazwa" required>
        <button>Wyślij</button>
    </form>
</main>
</body>
</html>
