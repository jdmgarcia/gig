import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import React from 'react';

// TODO: [FRON-201] remove this hack to remove warning
React.useLayoutEffect = React.useEffect;

registerRequireContextHook();
configure({ adapter: new Adapter() });

window.matchMedia = window.matchMedia || (() => {
    return {
        matches: false,
        addListener: () => {},
        removeListener: () => {}
    };
});
