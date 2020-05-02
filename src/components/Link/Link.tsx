import React from 'react';

export interface ILinkProps {
    label: string;
    url: string;
}

const Link = (props: ILinkProps): JSX.Element => {
    const {label, url} = props;

    return (
        <a className="link" href={url}>{label}</a>
    );
};

export { Link };
