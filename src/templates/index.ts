import * as fs from "fs";
import * as path from "path";

export function availableTemplates() {
  const data = fs.readdirSync(path.join(__dirname, "..", "..", "templates"));

  return data;
}
