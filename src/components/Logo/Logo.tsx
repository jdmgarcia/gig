import React from 'react';

export interface ILogoProps {
    url: string;
    image: string;
    title: string;
    description: string;
}

const Logo = (props: ILogoProps): JSX.Element => {
    const {url, image, title, description} = props;

    return (
        <a href={url} className="logo">
            <img src={image} title={title} alt={description} />
        </a>
    );
};

export { Logo };
