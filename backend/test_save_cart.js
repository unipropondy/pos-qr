const fetch = require('node-fetch'); // Assuming node-fetch is available, wait, we can just use native fetch in node 18+

async function testSaveCart() {
  try {
    const res = await fetch('http://localhost:3000/api/orders/save-cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tableId: "00000000-0000-0000-0000-000000000001", // dummy
        userId: "00000000-0000-0000-0000-000000000001",
        version: 1,
        items: [
          {
            id: "2ED11A13-EDAD-436A-8A19-002F446344FF", // Assuming valid or fallback
            qty: 1,
            price: 100,
            status: "NEW",
            name: "Test Dish"
          }
        ]
      })
    });
    
    const text = await res.text();
    console.log("Response Status:", res.status);
    console.log("Response Body:", text);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

testSaveCart();
