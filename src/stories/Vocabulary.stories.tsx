import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Components/Vocabulary', module)
    .add('Vocabulary', () => {
        return (
            <section className="vocabulary">
                <p>The body of words used in the GIG language.</p>
                <dl className="vocabulary-content">
                    <dt><abbr title="Design System">DS</abbr></dt>
                    <dd>Acronym of Design System.</dd>
                    <dt>GIG</dt>
                    <dd>The name of this DS. It's always presented in uppercase: <strong>GIG</strong>.</dd>
                </dl>
            </section>
        );
    });
