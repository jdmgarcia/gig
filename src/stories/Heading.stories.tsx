import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading, HeadingTag } from '../components';


storiesOf('Components/Heading', module)
    .add('Heading', () => {
        return (
            <section className="heading-container">
                <h3>Our heading options are:</h3>
                <ul className="sb">
                    <li><Heading tag={HeadingTag.H1}>Heading H1</Heading></li>
                    <li><Heading tag={HeadingTag.H2}>Heading H2</Heading></li>
                    <li><Heading tag={HeadingTag.H3}>Heading H3</Heading></li>
                    <li><Heading tag={HeadingTag.H4}>Heading H4</Heading></li>
                    <li><Heading tag={HeadingTag.H5}>Heading H5</Heading></li>
                    <li><Heading tag={HeadingTag.H6}>Heading H6</Heading></li>
                </ul>                
            </section>
        );
    });
