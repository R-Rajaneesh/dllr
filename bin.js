#!/usr/bin/env node

import process from "process";
import child from "child_process";
const command = process.argv.filter((v, i) => i !== 0);
command.shift();
try {
  console.log(child.execSync(command.join(" ")).toString());
} catch (error) {}
