module.exports = {
  port: process.env.PORT || 3000, // the server port
  psql: process.env.PSQL || 'postgres://localhost:5432/alikespace',
  environment: process.env.ENVIRONMENT || 'development'
};