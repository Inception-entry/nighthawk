import "module-alias/register";
import chalk from "chalk";
import dayjs from "dayjs";

import "@/tools/env";
import App from "@/app";
import cors from "koa-cors";
import { project, host } from "@/config";
import { AppDataSource } from "./data-source"
import router from "./routes/content";
import bodyParser from "koa-bodyparser";
import fs from "fs";


AppDataSource.initialize().then(async () => {
  //中间件
  App.use(cors());
  App.use(bodyParser());
  App.use(router.routes());
  App.use(router.allowedMethods());
  App.use(async (ctx, next) => {
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.createReadStream("./page/build/index.html");
  });

  App.listen(process.env.SERVER_ROOT, () => {
    const server = `${project} runnig success!`;
    console.log(chalk.bgGray.bold(server));
    console.log(chalk.green('\tRunning sucess time:'));
    console.log(`\t\t${dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")}`);
    
    switch(process.env.NODE_ENV) {
      case "development":
        console.log(chalk.green("\tNetwork"));
        host.forEach((ipv4: string) => {
          console.log(`\t\thttp://${ipv4}:${process.env.SERVER_PORT}`);
        });
        break;
      case "production":
        console.log(chalk.green("\tProduction address:"));
        console.log(`\t\t${process.env.PRODUCTION_ADDRESS}`);
        break;
      default:
        console.log("error: Lack of environment diffrentiation (NODE_ENV)");
    }
    console.log(chalk.bgGray.bold(server.split("").reduce((pre) => `${pre}+`, "")));
  });
}).catch((error: any) => console.log(error))
