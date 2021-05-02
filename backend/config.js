require('dotenv/config')

module.exports = {
   db: {
      host: process.env.DB_HOST || 'http://localhost',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || 'user',
      password: process.env.DB_NAME || 'password',
   },
}
