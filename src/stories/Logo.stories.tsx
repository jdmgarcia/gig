import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Logo, ILogoProps } from '../components';

const packlinkLogo: ILogoProps = {
    url: '/',
    image: 'https://cdn.packlink.com/apps/giger/logos/packlink.svg',
    title: 'Packlink',
    description: 'Packlink logo'
};

storiesOf('Components/Logo', module)
    .add('Packlink', () => {
        return (
            <Logo {...packlinkLogo} />
        );
    });
