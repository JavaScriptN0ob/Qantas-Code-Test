/* eslint-disable import/no-extraneous-dependencies */

import initStoryshots from '@storybook/addon-storyshots';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

registerRequireContextHook();

initStoryshots({});
