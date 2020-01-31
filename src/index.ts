import * as inquirer from "inquirer";
import * as figlet from "figlet";

import { availableTemplates } from "./templates";
import * as questions from "./questions";

async function bootstrap() {
  const title = figlet.textSync("Fulcrum");
  console.log(title);
  const templates = availableTemplates();
  const q = questions.getAll(templates);

  const answers = await inquirer.prompt(q);
  console.log(answers);
}

bootstrap();
