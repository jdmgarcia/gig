import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Components/Principles', module)
    .add('Principles', () => {
        return (
            <section className="principles">
                <p>A fundamental truth and proposition that serves as the foundation for GIG.</p>
                <p><blockquote className="sb">'cause GIGER is more than GIG</blockquote></p>
                <ul className="principles-content">
                    <li>
                        <h2>Easy</h2>
                        <p>Easy to build, easy to use, easy to learn</p>
                    </li>
                    <li>
                        <h2>Themify</h2>
                        <p>
                            The theme of this DS is based on Global: &nbsp;
                            <a href="https://www.packlink.com">https://www.packlink.com</a>
                        </p>
                    </li>
                    <li>
                        <h2>Performance</h2>
                        <p>To build it as fast as possible, this DS is only for desktop.</p>
                    </li>
                    <li>
                        <h2>Kharma</h2>
                        <p>Don't think. Just do it!</p>
                    </li>
                </ul>
            </section>
        );
    });
