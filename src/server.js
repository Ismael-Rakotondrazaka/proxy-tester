import dotenv from "dotenv";

import { app } from "./app.js";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log("listening on port " + port);
});
