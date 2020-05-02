import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Header, Navigation, ILinkProps } from '../components';
// import { Button, ButtonTheme } from '@packlink/giger';

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
                <Navigation links={navigationLinks} />
                {/* <Button label="Do you have an online store?" theme={ButtonTheme.SECONDARY} /> */}
            </Header>
        );
    });
