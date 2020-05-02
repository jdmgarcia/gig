import React from 'react';

export interface IHeaderProps {
    /** Children to be render in the content */
    children: React.ReactNode;
}

const Header = (props: IHeaderProps): JSX.Element => {
    const {children} = props;

    return (
        <header className="header">
            {children}
        </header>
    );
};

export { Header };
