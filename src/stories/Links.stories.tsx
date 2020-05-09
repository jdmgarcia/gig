import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Link, ILinkProps } from '../components';

const link: ILinkProps = {
    label: 'Help',
    url: '/'
};

storiesOf('Components/Link', module)
    .add('Link', () => {
        return (
            <Link {...link} />
        );
    });
