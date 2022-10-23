import React, {FC, HTMLAttributes} from 'react';
import classes from './Faq.module.scss'
import FaqItem from "./FaqItem";
import clsx from "clsx";

interface FaqProps extends HTMLAttributes<HTMLDivElement> {

}

const Faq: FC<FaqProps> = ({id, className}) => {
    return (
        <div className={clsx(className, classes.faq)} id={id}>
            <h2 className={classes.faq__title}>Frequently asked questions</h2>
            <FaqItem number={"01"} title={"Что представляет из себя пробный урок?"} text={"Пробный урок — это вводное занятие, длительность которого составляет 45 минут. В течение пробного занятия вы пройдете тест на знание английского языка, получите рекомендации по выбору курса. Также наши преподаватели ответят на все интересующие вас вопросы и расскажут о процессе обучения."}
                variantFaqItem={"secondary"} sideFaqItem={"left"}/>
            <FaqItem number={"02"} title={"Что делать, если не получается прийти на занятие?"} text={"У вас есть возможность отменить занятие не позднее чем за 4 часа до его начала. Вы сможете переназначить его на другое время. В ином случае урок будет аннулирован."}
                variantFaqItem={"primary"} sideFaqItem={"right"}/>
            <FaqItem number={"03"} title={"Сколько длится один урок?"} text={"Длительность пробного урока составляет 45 минут, остальные занятия - 60 минут."}
                variantFaqItem={"secondary"} sideFaqItem={"left"}/>
            <FaqItem number={"04"} title={"Как присоединиться в команду преподавателей?"} text={"Отправьте свое резюме на почту “название почты”, после чего с Вами свяжется администратор и расскажет о дальнейших действиях."}
                variantFaqItem={"primary"} sideFaqItem={"right"}/>
        </div>
    );
};

export default Faq;