/**
 * Author: Aswin
 * Desc: Swagger setup
 */
const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "E-Commerce API documentation",
    version: "1.0.0",
    license: {
      name: "MIT",
    },
  },
  servers: [
    {
      url: `http://localhost:5000/api/v1/`,
    },
    {
      url:`https://sampleapi.stackmod.info/api/v1/`
    }
  ],
};

module.exports = swaggerDef;
