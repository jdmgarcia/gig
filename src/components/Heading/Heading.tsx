import React from 'react';

export enum HeadingTag {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export interface IHeadingProps {
    tag: HeadingTag;
    children?: React.ReactNode;
}

const Heading = (props: IHeadingProps): JSX.Element => {
    const {tag, children} = props;
    const className = `heading heading--${tag}`;

    return React.createElement(tag as string, {
        children: (
            <>
                {!!children && children}
            </>
        ),
        className,
    });
};

export { Heading };
