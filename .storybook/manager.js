import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { create } from '@storybook/theming/create';
import json from '../package.json';

const theme = create({
  ...themes.light, 
  base: 'light',
  brandTitle: json.title || json.name,
  brandUrl: 'https://8s.de',
  brandImage: 'https://gitlab.8s.de/uploads/-/system/appearance/logo/1/8s_gitlab_logo.jpg',
});

addons.setConfig({
  theme,
});