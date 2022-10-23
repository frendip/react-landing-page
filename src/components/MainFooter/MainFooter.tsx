import React from 'react';
import classes from './MainFooter.module.scss'
import instIcon from '../../pictures/inst-icon.svg'
import vkIcon from '../../pictures/vk-icon.svg'
import telegramIcon from '../../pictures/telegram-icon.svg'

const MainFooter = () => {
    return (
        <section className={classes.footer}>
            <div className={classes.footer__wrapper}>
                <div className={classes.footer__info}>
                    <div className={classes.footer__logoTitle}>
                        <div className={classes.footer__logo}></div>
                        <div className={classes.footer__title}>НАЗВАНИЕ</div>
                    </div>
                    <div className={classes.footer__mailIcons}>
                        <div className={classes.footer__mail}>onlineschool.nazvanie@mail.ru</div>
                        <div className={classes.footer__icons}>
                            <a href="#"><div className={classes.footer__icon}>
                                <img src={instIcon} alt="inst"/>
                            </div></a>
                            <a href="#"><div className={classes.footer__icon}>
                                <img src={vkIcon} alt="vk"/>
                            </div></a>
                            <a href="#"><div className={classes.footer__icon}>
                                <img src={telegramIcon} alt="telegram"/>
                            </div></a>
                        </div>
                    </div>
                </div>
                <div className={classes.footer__copyright}>
                    Copyright © 2022. Онлайн-школа. Название.
                </div>
            </div>
        </section>
    );
};

export default MainFooter;