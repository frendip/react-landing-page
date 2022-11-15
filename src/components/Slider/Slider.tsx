import React, {FC, HTMLAttributes, useState} from 'react';
import clsx from "clsx";
import classes from './Slider.module.scss'

interface SliderProps extends HTMLAttributes<HTMLDivElement>{
    sliderElements: JSX.Element[];
}

const Slider: FC<SliderProps> = ({className, sliderElements}) => {

    const [activeIndex, setActiveIndex] = useState<number>(1);

    const goNext = ():void => {
        if (activeIndex === sliderElements.length - 1) {
            setActiveIndex(0)
        } else {
            setActiveIndex(activeIndex + 1);
        }
    }

    const goPrev = ():void => {
        if (activeIndex === 0) {
            setActiveIndex(sliderElements.length - 1)
        } else {
            setActiveIndex(activeIndex - 1);
        }
    }

    const prevIndex = activeIndex ? activeIndex - 1 : sliderElements.length - 1;
    const nextIndex = activeIndex === sliderElements.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={clsx(className, classes.slider)}>
            <button onClick={goPrev} className={clsx(classes.slider__button, classes.slider__buttonLeft)}>{'<'}</button>
            {sliderElements.map((value, index): JSX.Element | undefined => {
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
                            {sliderElements[nextIndex]}
                        </div>)
                }
                return undefined
            })}

            <button onClick={goNext} className={clsx(classes.slider__button, classes.slider__buttonRight)}>{'>'}</button>
        </div>
    );
};

export default Slider;