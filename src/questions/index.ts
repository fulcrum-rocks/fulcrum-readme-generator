export function getAll(templates: any) {
  return [
    {
      name: "template",
      type: "list",
      message: "What README.md template would you like to generate?",
      choices: templates
    },
    {
      name: "name",
      type: "input",
      message: "Project name:"
    },
    {
      name: "description",
      type: "input",
      message: "Project description:"
    },
    {
      name: "logo",
      type: "input",
      message: "Link to project logo:"
    }
  ];
}
