import React, {useState} from 'react';
import classes from "./Navbar.module.scss"
import {Link as ScrollLink} from "react-scroll";
import UpScrollButton from "../../UpScrollButton/UpScrollButton";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import clsx from "clsx";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className={classes.navbar}>
            <nav className={clsx(menuActive && classes.navbar__active, classes.navbar__body)}>
                <ul className={classes.navbar__list}>
                    <li className={classes.navbar__item}>
                        <ScrollLink to="main" spy={true} smooth={true} offset={0} duration={500} onClick={() => setMenuActive(!menuActive)}>Главная</ScrollLink>
                    </li>
                    <li className={classes.navbar__item}>
                        <ScrollLink to="about-us" spy={true} smooth={true} offset={-250} duration={500} onClick={() => setMenuActive(!menuActive)}>О нас</ScrollLink>
                    </li>
                    <li className={classes.navbar__item}>
                        <ScrollLink to="prices" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenuActive(!menuActive)}>Курсы и цены</ScrollLink>
                    </li>
                    <li className={classes.navbar__item}>
                        <ScrollLink to="lessons" spy={true} smooth={true} offset={-250} duration={500} onClick={() => setMenuActive(!menuActive)}>Как проходят занятия?</ScrollLink>
                    </li>
                    <li className={classes.navbar__item}>
                        <ScrollLink to="offers" spy={true} smooth={true} offset={-75} duration={500} onClick={() => setMenuActive(!menuActive)}>Актуальные предложения</ScrollLink>
                    </li>
                    <li className={classes.navbar__item}>
                        <ScrollLink to="faq" spy={true} smooth={true} offset={-20} duration={500} onClick={() => setMenuActive(!menuActive)}>FAQ</ScrollLink>
                    </li>
                </ul>
            </nav>
            <BurgerBtn menuActive={menuActive} setMenuActive={setMenuActive}/>
            <UpScrollButton/>
        </div>
    );
};

export default Navbar;