import React from 'react';
import classes from "./MainHeader.module.scss";
import Button from "../UI/Button/Button";
import Slider from "../Slider/Slider";
import slide1 from "../../pictures/slide1.png";
import slide2 from "../../pictures/slide2.png";
import slide3 from "../../pictures/slide3.png";

const MainHeader = () => {
    const sliderElements: JSX.Element[] = [
        <div className={classes.slider__itemInner}>
            <div className={classes.slider__itemLogo}><img src={slide1} alt="sl1"/></div>
            <div className={classes.slider__itemText}>Занятия в Google Meet</div>
        </div>,
        <div className={classes.slider__itemInner}>
            <div className={classes.slider__itemLogo}><img src={slide2} alt="sl2"/></div>
            <div className={classes.slider__itemText}>Молодые преподаватели, студенты ведущих ВУЗов страны</div>
        </div>,
        <div className={classes.slider__itemInner}>
            <div className={classes.slider__itemLogo}><img src={slide3} alt="sl3"/></div>
            <div className={classes.slider__itemText}>Курсы для любого возраста и уровня</div>
        </div>,
    ]

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
                    <Slider className={classes.slider} sliderElements={sliderElements}/>
                </div>
            </div>
        </section>
    );
};

export default MainHeader;