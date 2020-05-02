import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Navigation, ILinkProps } from '../components';

const navigationLinks: ILinkProps[] = [
    {
        label: 'Help',
        url: '/'
    },
    {
        label: 'tracking',
        url: '/'
    },
];

storiesOf('Components/Navigation', module)
    .add('Navigation', () => {
        return (
            <Navigation links={navigationLinks} />
        );
    });
