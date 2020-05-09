import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Heading, HeadingTag, Text, TextTag } from '../components';


storiesOf('Components/Typograpy', module)
    .add('Typograpy', () => {
        return (
            <section className="typography">
                <h3>Our font-family are:</h3>
                <ul className="sb">
                    <li><p className="typography--bold">ProximaNova Bold</p></li>
                    <li><p className="typography--semibold">ProximaNova Semibold</p></li>
                    <li><p className="typography--normal">ProximaNova Normal</p></li>
                </ul>

                <h3>Our body is based on:</h3>
                <dl>
                    <dt>Color:</dt>
                    <dd className="typography--body-color">#5e5e5e - rgb(94, 94, 94)</dd>
                    <dt>Font family:</dt>
                    <dd className="typography--body-normal">ProximaNova Normal</dd>
                    <dt>Font size:</dt>
                    <dd className="typography--body-size">1rem - 16px</dd>
                </dl>

                <h3>Our heading options are:</h3>
                <ul className="sb">
                    <li><Heading tag={HeadingTag.H1}>Heading H1</Heading></li>
                    <li><Heading tag={HeadingTag.H2}>Heading H2</Heading></li>
                    <li><Heading tag={HeadingTag.H3}>Heading H3</Heading></li>
                    <li><Heading tag={HeadingTag.H4}>Heading H4</Heading></li>
                    <li><Heading tag={HeadingTag.H5}>Heading H5</Heading></li>
                    <li><Heading tag={HeadingTag.H6}>Heading H6</Heading></li>
                </ul>

                <h3>Our paragraph options are:</h3>
                <ul className="sb">
                    <li><Text tag={TextTag.P} size={1}>This is some text in a paragraph.</Text></li>
                    <li><Text tag={TextTag.P} size={2}>This is some text in a paragraph.</Text></li>
                    <li><Text tag={TextTag.P} size={3}>This is some text in a paragraph.</Text></li>
                    <li><Text tag={TextTag.P} size={4}>This is some text in a paragraph.</Text></li>
                </ul>
                
            </section>
        );
    });
