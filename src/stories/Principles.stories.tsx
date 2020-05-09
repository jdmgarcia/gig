import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Components/Principles', module)
    .add('Principles', () => {
        return (
            <section className="principles">
                <p>A fundamental truth and proposition that serves as the foundation for GIG.</p>
                <p><blockquote className="sb">'cause GIGER is more than GIG</blockquote></p>
                <ul className="sb principles-content">
                    <li>
                        <h3>Easy</h3>
                        <p>Easy to build, easy to use, easy to learn.</p>
                    </li>
                    <li>
                        <h3>Themify</h3>
                        <p>
                            The theme of this DS is based on Global Home Page: &nbsp;
                            <a href="https://www.packlink.com">https://www.packlink.com</a>.
                        </p>
                    </li>
                    <li>
                        <h3>Performance</h3>
                        <p>To build it as fast as possible, this DS is only for desktop.</p>
                    </li>
                    <li>
                        <h3>Kharma</h3>
                        <p>Don't think. Just do it!</p>
                    </li>
                </ul>
            </section>
        );
    });
