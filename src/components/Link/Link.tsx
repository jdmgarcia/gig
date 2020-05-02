import React from 'react';

export interface ILinkProps {
    label: string;
    url: string;
}

const Link = (props: ILinkProps): JSX.Element => {
    const {label, url} = props;

    return (
        <a href={url} className="link">{label}</a>
    );
};

export { Link };
