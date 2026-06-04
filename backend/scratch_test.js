require('dotenv').config();
const { poolPromise } = require('./config/db');

async function test() {
  const pool = await poolPromise;
  const res = await pool.request().query(`
    SELECT TOP 5 s.SettlementID, s.DishId, s.OrderDetailId, h.OrderId, h.LegacyOrderId 
    FROM SettlementItemDetail s
    JOIN SettlementHeader h ON s.SettlementID = h.SettlementID
    WHERE h.SettlementID = 'B11C0319-B538-4004-8160-CE4A3EE815FA'
  `);
  console.log(res.recordset);
  
  const res2 = await pool.request().query(`
    SELECT * FROM sysobjects WHERE xtype='U' AND name LIKE '%Order%'
  `);
  console.log(res2.recordset.map(r => r.name));
  process.exit(0);
}
test();
