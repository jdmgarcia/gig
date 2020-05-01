import * as React from 'react';
import { render } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import initStoryshots from '@storybook/addon-storyshots';

jest.mock('react-modal', () => ({ children }) => (
    <div className="modal">{children}</div>
));

jest.mock('moment', () => {
    const mockMoment = () => ({
        format: () => '2018–01–30T12:34:56+00:00',
        startOf: () => mockMoment(),
        add: () => mockMoment(),
        toDate: () => '2019-02-23'
    });

    return mockMoment;
});

initStoryshots({
    storyKindRegex: /Components/,
    renderer: render,
    snapshotSerializers: [createSerializer()]
});
