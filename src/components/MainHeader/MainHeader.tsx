import React from 'react';
import classes from "./MainHeader.module.scss";
import Button from "../UI/Button/Button";
import Slider from "../Slider/Slider";

const MainHeader = () => {
    return (
        <section className={classes.header} id={"main"}>
            <div className={classes.header__bg}></div>
            <div className={classes.header__wrapper}>
                <div className={classes.header__info}>
                    <h2 className={classes.header__preTitle}>WE ARE HERE TO TEACH YOU</h2>
                    <h1 className={classes.header__title}>НАЗВАНИЕ</h1>
                    <ul className={classes.header__text}>
                        <li>Онлайн-школа английского языка для учеников любого уровня и возраста.</li>
                        <li>Подготовка к ЕГЭ, международным экзаменам и совершенствование вашего иностранного языка.</li>
                    </ul>
                    <a href="#" className={classes.header__link}><Button tabIndex={0} size={"small"} variant={"primary"}>Записаться</Button></a>
                </div>
                <div className={classes.header__slider}>
                    <div className={classes.header__sliderText}>
                        УДОБНАЯ ПЛАТФОРМА ДЛЯ ИЗУЧЕНИЯ ЯЗЫКА
                    </div>
                    <Slider/>
                </div>
            </div>
        </section>
    );
};

export default MainHeader;