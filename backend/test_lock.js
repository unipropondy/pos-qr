require('dotenv').config();
const { sql, poolPromise } = require('./config/db');

async function testLock() {
    try {
        const pool = await poolPromise;
        console.log("Checking lock on RestaurantOrderDetailCur...");
        const result = await pool.request()
            .query(`
                SELECT TOP 1 * FROM RestaurantOrderDetailCur WITH (NOWAIT)
            `);
        console.log("No lock! Rows:", result.recordset.length);
    } catch (err) {
        console.error("Lock test failed:", err.message);
    } finally {
        process.exit();
    }
}

testLock();
