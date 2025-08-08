const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bllsrl6sosgorleuiyni-mysql.services.clever-cloud.com',
  user: 'unq0hhfukjamgmfl',
  password: 'W8zDCVT3F1mpPa27mHIp',
  database: 'bllsrl6sosgorleuiyni',
});

module.exports = pool.promise();