import React from 'react';
import classes from "./MainBody.module.scss";
import BodySection from "../BodySection/BodySection";
import ProgramCardList from "../ProgramCards/ProgramCardList";
import PromotionList from "../Promotions/PromotionList";
import clsx from "clsx";
import Faq from "../Faq/Faq";

const MainBody = () => {
    return (
        <section className={classes.body}>
            <div className={classes.body__wrapper}>
                <BodySection className={clsx(classes.bodySectionPositioning, classes.positioning)} id={"about-us"} title={"Welcome to НАЗВАНИЕ"}
                             subtitle={"Что такое «Название»? «Название» — это современная онлайн школа английского языка, использующая прогрессивные и интерактивные методы обучения, в основе которой лежит система подписок. Мы предоставляем различные программы обучения, каждую из которых Вы можете выбрать исходя из своих предпочтений"}
                             href={"#"} buttonText={"Смотреть курсы"}/>
                <ProgramCardList className={classes.positioning} id={"prices"}/>
                <BodySection className={clsx(classes.bodySectionPositioning, classes.positioning)} id={"lessons"} title={"Как проходят занятия?"}
                             subtitle={"Занятия проводятся на онлайн - платформах Google Meet или Zoom в мини - группах до 5 человек. Длительность занятия составляет 60 минут."}
                             href={"#"} buttonText={"Смотреть курсы"}/>
                <PromotionList className={classes.positioning} id={"offers"}/>
                <Faq className={classes.positioning} id={"faq"}/>
            </div>
        </section>
    );
};

export default MainBody;