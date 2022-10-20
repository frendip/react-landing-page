import React, {FC, HTMLAttributes} from 'react';
import classes from './BodySection.module.scss'
import Button from "../UI/Button/Button";
import clsx from "clsx";

interface TitleTextButtonProps extends HTMLAttributes<HTMLDivElement>{
    title: string,
    subtitle: string,
    href: string,
    buttonText: string,
}

const BodySection: FC<TitleTextButtonProps> = ({id, className, title,
                                                   subtitle, href, buttonText}) => {
    return (
        <div className={clsx(className, classes.bodySection)} id={id}>
            <h2 className={classes.bodySection__title}>{title}</h2>
            <div className={classes.bodySection__subtitle}>{subtitle}</div>
            <a href={href}><Button tabIndex={0} size={"small"} variant={"primary"}>{buttonText}</Button></a>
        </div>
    );
};

export default BodySection;