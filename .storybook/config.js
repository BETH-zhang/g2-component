import { configure } from '@storybook/react';
import './index.less'

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
