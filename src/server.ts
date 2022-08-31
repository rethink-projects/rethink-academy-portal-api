import * as dotenv from "dotenv";
import express from "express";
import chalk from "chalk";
import morgan from "morgan";
import cors from "cors";
import expressStatusMonitor from "express-status-monitor";
import { router } from "./routes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(expressStatusMonitor());

app.use("/api", router);

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(
    chalk.blueBright.bold(
      `
      Yep this is working 🍺 🎉 
      App listen on port: ${PORT} 🥷
      Env: ${NODE_ENV} 🦄
      `
    )
  );
});
