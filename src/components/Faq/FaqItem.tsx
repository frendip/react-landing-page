import React, {FC} from 'react';
import classes from './Faq.module.scss'
import clsx from "clsx";

interface FaqItemProps {
    number: string,
    title: string,
    text: string,
    variantFaqItem?: "primary" | "secondary",
    sideFaqItem?: "left" | "right",
}

const variantFaqItemStyle = {
    primary: classes.faqItem__primary,
    secondary: classes.faqItem__secondary,
}

const sideFaqItemStyle = {
    left: classes.faqItem__left,
    right: classes.faqItem__right,
}

const FaqItem: FC<FaqItemProps> = ({number, title, text, variantFaqItem = "primary",
                                   sideFaqItem = "left"}) => {
    return (
        <div className={clsx(classes.faqItem, variantFaqItemStyle[variantFaqItem], sideFaqItemStyle[sideFaqItem])}>
            <div className={classes.faqItem__number}><span>{number}</span></div>
            <div className={classes.faqItem__info}>
                <h3 className={classes.faqItem__title}>{title}</h3>
                <div className={classes.faqItem__text}><span>{text}</span></div>
            </div>
        </div>
    );
};

export default FaqItem;