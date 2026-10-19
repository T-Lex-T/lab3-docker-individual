const http = require('http');

const HOST = '0.0.0.0';
const PORT = 8080;

const expenses = [
  { category: 'Alimente', amount: 850 },
  { category: 'Transport', amount: 300 },
  { category: 'Studii', amount: 500 }
];

const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

const rows = expenses.map(expense =>
  `<tr><td>${expense.category}</td><td>${expense.amount} MDL</td></tr>`
).join('');

const html = `
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Expense Tracker</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 700px; margin: 40px auto; padding: 20px; background: #f4f6f8; }
    main { background: white; padding: 24px; border-radius: 12px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
    .total { font-size: 1.4em; font-weight: bold; margin-top: 24px; }
  </style>
</head>
<body>
  <main>
    <h1>Expense Tracker</h1>
    <p>Lista cheltuielilor pentru proiectul individual.</p>
    <table>
      <thead><tr><th>Categoria</th><th>Suma</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <p class="total">Total: ${total} MDL</p>
  </main>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Pagina nu a fost gasita');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Expense Tracker ruleaza pe portul ${PORT}`);
});
