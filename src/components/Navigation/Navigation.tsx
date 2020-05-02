import React from 'react';

import { Link, ILinkProps } from '..';

export interface INavigationProps {
    /** List of the links */
    links: ILinkProps[];
}

const Navigation = (props: INavigationProps): JSX.Element => {
    const { links } = props;

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {links.map((link, index) => (
                    <li key={index} className="navigation__item">
                        <Link label={link.label} url={link.url} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export { Navigation };
