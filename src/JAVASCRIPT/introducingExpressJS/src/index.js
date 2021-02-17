const express = require("express");
const bodyParser = require("body-parser");
const customerRouter = require("./routers/customerRouter");
const loginRouter = require("./routers/loginRouter");
const loginMiddleware = require("./middlewares/loginMiddleware");
const app = express();
const port = 3000;

//Plugins
app.use(bodyParser.json());

//middleware
app.use(loginMiddleware);

//Routers
app.use("/customer", customerRouter);
app.use("/auth", loginRouter);

//configuration
app.listen(port, () => {
    console.log(`example at http://localhost:${port}`)
});