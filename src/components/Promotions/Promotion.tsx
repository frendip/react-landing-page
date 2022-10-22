import React, {FC} from 'react';
import classes from './Promotions.module.scss';
import Button from "../UI/Button/Button";
import clsx from "clsx";

interface PromotionProps {
    variantButton?: "primary" | "secondary",
    variantText?: "primary" | "secondary",
    title: string,
    subtitle: string,
    info: string,
    img: string,
    href: string,
}

const variantTextStyle = {
    primary: classes.promotion__primary,
    secondary: classes.promotion__secondary,
}

const Promotion: FC<PromotionProps> = ({variantButton = "primary", variantText= "primary", title, subtitle, info, img, href}) => {
    return (
        <div className={classes.promotion}>
            <div className={classes.promotion__header}>
                <div className={classes.promotion__logo}><img src={img} alt="prom"/></div>
                <a href={href}><Button className={classes.promotion__button} tabIndex={0} variant={variantButton} size={"large"}>Получить</Button></a>
            </div>
            <h3 className={clsx(classes.promotion__title, variantTextStyle[variantText])}>{title}</h3>
            <div className={clsx(classes.promotion__subtitle, variantTextStyle[variantText])}>{subtitle}</div>
            <div className={classes.promotion__info}>{info}</div>
            <div className={classes.promotion__note}>*скидки не суммируются</div>
        </div>
    );
};

export default Promotion;