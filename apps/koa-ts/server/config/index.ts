import { readFileSync } from "fs";
import { resolve } from "path";
import { networkInterfaces } from "os";

const buffer = readFileSync(resolve("package.json"));
const packages = JSON.parse(buffer.toString());

const networks = networkInterfaces();
const networkList:  string[] = [];
Object.keys(networks).forEach(key => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  networks[key] = networks[key].filter(item => item.family === 'IPv4');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  networks[key] = networks[key].map(item => item.address);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  networkList.push(networks[key][0]);
});

export const project = packages.name;
export const host = networkList;
