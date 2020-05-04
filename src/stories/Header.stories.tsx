import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Logo, ILogoProps } from '../components';
import { Header, Navigation, ILinkProps } from '../components';
import { Button, ButtonTheme } from '@packlink/giger';

const packlinkLogo: ILogoProps = {
    url: '/',
    image: 'https://cdn.packlink.com/apps/giger/logos/packlink.svg',
    title: 'Packlink',
    description: 'Packlink logo'
};

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

storiesOf('Components/Header', module)
    .add('Header', () => {
        return (
            <Header>
                <Logo {...packlinkLogo} />
                <Navigation links={navigationLinks} />
                <Button label="Do you have an online store?" theme={ButtonTheme.SECONDARY} />
            </Header>
        );
    });
