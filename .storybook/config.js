import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import '../src/styles/main.scss';

import packageJson from '../package.json';

addDecorator(
    withInfo({
        inline: true,
        styles: {
            infoBody: {
                border: '0'
            },
            infoStory: {
                padding: '0 40px'
            },
            propTableHead: {
                visibility: 'hidden',
                margin: '-20px'
            }
        }
    })
);

addParameters({
    options: {
        theme: create({
            brandTitle: `GIG ${packageJson.version}`,
            brandUrl: 'https://packlink.es',
        }),
    }
});

addDecorator(withKnobs);
addDecorator(withA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.(js|tsx)$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
