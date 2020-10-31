const sequelize = require('sequelize');

const db = new sequelize({
  database: 'restApi',
  username: 'postgres',
  password: 'Nhoxkill500',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false
  },
  define: {
    freezeTableName: true
  }
})


db.authenticate()
  .then(() => console.log('DATABASE CONNECTED!'))
  .catch((err) => console.log(err))


module.exports = db
