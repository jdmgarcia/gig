import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Components/Spacing', module)
    .add('Spacing', () => {
        return (
            <section className="spacing">
                <p>The amount of space between successive components.</p>
                <div className="spacing-content">
                    <h2>Cornerstone:</h2>
                    <p>Value: <strong>0.5rem</strong> <em>// 8px</em>.</p>
                    <p>All the spacings are building as multiplier of this cornerstone.</p>
                </div>
            </section>
        );
    });
