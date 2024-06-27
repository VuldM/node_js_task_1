const http = require("http");
count1 = 0;
count2 = 0;
const server = http.createServer((req, res) => {
  console.log("Запрос получен");

  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    count1++;
    res.end(`<a href="/about">Переход на страницу "about"</a>
    <p>Вы посетили страницу ${count1} раз</p>`);
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    count2++;
    res.end(`<a href="/">Переход на страницу "Главная"</a>
    <p>Вы посетили страницу ${count2} раз</p>`);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Страница не найдена</h1>");
    res.end('<a href="/">Переход на страницу "Главная"</a>');
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Запущен сервер на ${port} порту!`);
});
