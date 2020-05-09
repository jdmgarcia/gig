import classNames from 'classnames';
import React from 'react';

export enum TextTag {
    CAPTION = 'caption',
    CITE = 'cite',
    CODE = 'code',
    EM = 'em',
    P = 'p',
    SMALL = 'small',
    STRONG = 'strong',
    SUB = 'sub',
}

export type TextSize = 1 | 2 | 3 | 4;

export interface ITextProps {
    tag: TextTag;
    size?: TextSize;
    children?: React.ReactNode;
}

const Text = (props: ITextProps): JSX.Element => {
    const {tag, children, size} = props;
    const className = classNames({
        [`${tag}`]: true,
        [`${tag}--${size}`]: size,
    });

    return React.createElement(tag as string, {
        children: (
            <>
                {!!children && children}
            </>
        ),
        className,
    });
};

export { Text };
