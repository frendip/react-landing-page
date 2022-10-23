import React from 'react';
import classes from "./Navbar.module.scss"
import {Link as ScrollLink} from "react-scroll";
import UpScrollButton from "../../UpScrollButton/UpScrollButton";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.navbar__menu}>
                <li className={classes.navbar__item}>
                    <ScrollLink to="main" spy={true} smooth={true} offset={0} duration={500}>Главная</ScrollLink>
                </li>
                <li className={classes.navbar__item}>
                    <ScrollLink to="about-us" spy={true} smooth={true} offset={-250} duration={500}>О нас</ScrollLink>
                </li>
                <li className={classes.navbar__item}>
                    <ScrollLink to="prices" spy={true} smooth={true} offset={0} duration={500}>Курсы и цены</ScrollLink>
                </li>
                <li className={classes.navbar__item}>
                    <ScrollLink to="lessons" spy={true} smooth={true} offset={-250} duration={500}>Как проходят занятия?</ScrollLink>
                </li>
                <li className={classes.navbar__item}>
                    <ScrollLink to="offers" spy={true} smooth={true} offset={-75} duration={500}>Актуальные предложения</ScrollLink>
                </li>
                <li className={classes.navbar__item}>
                    <ScrollLink to="faq" spy={true} smooth={true} offset={-20} duration={500}>FAQ</ScrollLink>
                </li>
            </ul>
            <UpScrollButton/>
        </nav>
    );
};

export default Navbar;