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
        <a className="logo" href={url}>
            <img className="logo__image" src={image} title={title} alt={description} />
        </a>
    );
};

export { Logo };
