const express = require("express");
const cors = require("cors");
const port = process.env.PORT;

require("./db/mongoose");
const messageRouter = require("./routers/messageRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(messageRouter);

app.listen(port, () => {
  console.log("Server connected, port:", port);
});
