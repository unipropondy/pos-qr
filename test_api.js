const http = require('http');

http.get('http://localhost:8000/api/orders/cart/2', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data);
    process.exit(0);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
  process.exit(1);
});
