require('dotenv').config();

const getDevelopmentMongoServer = () => process.env.MONGODB_DEVELOPMENT_URL;

const getEnvironmentStatus = () => process.env.ENVIRONMENT;

const getBasicAuthUsername = () => process.env.BASIC_AUTH_USERNAME;
const getBasicAuthPassword = () => process.env.BASIC_AUTH_PASSWORD;

const getPrivateKey = () => process.env.JWT_PRIVATE_KEY;
const getPublicKey = () => process.env.JWT_PUBLIC_KEY;

const getJWTIssuer = () => process.env.JWT_ISSUER;
const getJWTaudience = () => process.env.JWT_AUDIENCE;

module.exports = {
  getDevelopmentMongoServer,
  getEnvironmentStatus,
  getBasicAuthUsername,
  getBasicAuthPassword,
  getPublicKey,
  getPrivateKey,
  getJWTIssuer,
  getJWTaudience

};
