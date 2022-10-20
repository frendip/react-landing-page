import React, {FC, useState} from 'react';
import clsx from "clsx";
import classes from './Slider.module.scss'
import slide1 from '../../pictures/slide1.png'
import slide2 from '../../pictures/slide2.png'
import slide3 from '../../pictures/slide3.png'

const Slider: FC = () => {
    const sliderElement: JSX.Element[] = [
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

    const [activeIndex, setActiveIndex] = useState<number>(1);

    const goNext = ():void => {
        if (activeIndex === sliderElement.length - 1) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }

    const goPrev = ():void => {
        if (activeIndex === 0) {
            setActiveIndex(sliderElement.length - 1)
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }

    const prevIndex = activeIndex ? activeIndex - 1 : sliderElement.length - 1;
    const nextIndex = activeIndex === sliderElement.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={classes.slider}>
            <button onClick={goPrev} className={clsx(classes.slider__button, classes.slider__buttonLeft)}>{'<'}</button>
            {sliderElement.map((value, index): JSX.Element | undefined => {
                if (index === prevIndex) {
                    return (
                        <div key={index} className={clsx(classes.slider__item, classes.slider__itemPrev)}>
                            {value}
                        </div>)
                } else if (index === activeIndex) {
                    return (
                        <div key={index} className={classes.slider__item}>
                            {value}
                        </div>)
                } else if (index === nextIndex) {
                    return (
                        <div key={index} className={clsx(classes.slider__item, classes.slider__itemNext)}>
                            {sliderElement[nextIndex]}
                        </div>)
                }
                return undefined
            })}

            <button onClick={goNext} className={clsx(classes.slider__button, classes.slider__buttonRight)}>{'>'}</button>
        </div>
    );
};

export default Slider;