async function run() {
  console.log("Fetching...");
  try {
    const res = await fetch('http://localhost:9119/api/orders/save-cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tableId: "test", userId: "test", items: [] })
    });
    console.log("Status:", res.status);
    console.log("Text:", await res.text());
  } catch (e) {
    console.error("Error:", e);
  }
}
run();
