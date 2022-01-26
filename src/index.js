const express = require("express");
const routesUser = require("./routes/routes.user");
const routesLink = require("./routes/routes.link");
const routesCategory = require("./routes/routes.category");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./api.yaml");
const helmet = require("helmet");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(helmet());

app.use(routesUser);
app.use(routesCategory);
app.use(routesLink);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log("Server Start...");
});
