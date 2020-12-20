const path = require('path');

module.exports = {
  description: 'Add component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }
        return 'name is required';
      },
    },
    {
      type: 'confirm',
      name: 'useRouter',
      default: true,
      message: 'Do you want a connected component to memory router?',
    },
    {
      type: 'input',
      name: 'relativePath',
      message: 'Folder',
    },
  ],
  actions: data => {
    let componentTemplate = path.resolve(__dirname, 'base.tsx.hbs');
    let story = path.resolve(__dirname, 'story.tsx.hbs');
    let spec = path.resolve(__dirname, 'test.tsx.hbs');
    let relativePath = data.relativePath
      ? 'src/' + data.relativePath + '/{{properCase name}}/'
      : 'src/atoms/{{properCase name}}/';

    return [
      {
        type: 'add',
        path: path.resolve(process.cwd(), relativePath + 'index.tsx'),
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.resolve(
          process.cwd(),
          relativePath + `{{properCase name}}.spec.tsx`
        ),
        templateFile: spec,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.resolve(
          process.cwd(),
          relativePath + `{{properCase name}}.stories.tsx`
        ),
        templateFile: story,
        abortOnFail: true,
      },
    ];
  },
};
