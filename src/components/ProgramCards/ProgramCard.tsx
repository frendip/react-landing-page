import React, {FC} from 'react';
import classes from "./ProgramCards.module.css";
import Button from "../UI/Button/Button";
import clsx from "clsx";

interface ProgramCardProps {
    children: React.ReactNode,
    variantCard?: "primary" | "secondary",
    variantButton?: "primary" | "secondary",
    img: string,
    href: string,
}

const variantCardStyle = {
    primary: classes.programCard__primary,
    secondary: classes.programCard__secondary,
}

const ProgramCard: FC<ProgramCardProps> = ({children, variantCard = "primary", variantButton= "secondary", img, href}) => {
    return (
        <div className={clsx(classes.programCard, variantCardStyle[variantCard])}>
            <div className={classes.programCard__row}>
                <div className={classes.programCard__logo}><img src={img} alt="#"/></div>
                <h2 className={classes.programCard__title}>{children}</h2>
            </div>
            <a href={href}><Button tabIndex={0} variant={variantButton}>Подробнее</Button></a>
        </div>
    );
};

export default ProgramCard;