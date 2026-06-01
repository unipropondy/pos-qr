const sql = require('mssql');
const { poolPromise } = require('./backend/config/db');

poolPromise.then(pool => {
  return pool.request().query("SELECT d.OrderDetailId, d.DishName, d.Quantity, d.isSettlement, d.StatusCode FROM RestaurantOrderDetailCur d WHERE d.OrderId = '25B246E3-3EC5-4644-B453-0ADA2D7C7F34'");
}).then(res => {
  console.log(JSON.stringify(res.recordset, null, 2));
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
