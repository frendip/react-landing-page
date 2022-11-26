import React, {FC, HTMLAttributes, useState} from 'react';
import clsx from "clsx";
import classes from './Slider.module.scss'

interface SliderProps extends HTMLAttributes<HTMLDivElement>{
    sliderElements: JSX.Element[];
    position?: "solo" | "triple";
}

const Slider: FC<SliderProps> = ({className, sliderElements, position = "triple"}) => {

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
            {position === "triple" ? <button onClick={goPrev} className={clsx(classes.slider__button, classes.slider__buttonLeftTriple)}>{'<'}</button> :
                <button onClick={goPrev} className={clsx(classes.slider__button, classes.slider__buttonLeftSolo)}>{'<'}</button>
            }
            {sliderElements.map((value, index): JSX.Element | undefined => {
                if (index === prevIndex) {
                    if (position === "triple") {
                        return (
                            <div key={index} className={clsx(classes.slider__item, classes.slider__itemPrev)}>
                                {value}
                            </div>)
                    } else {
                        return (
                            <div key={index} className={clsx(classes.slider__item, classes.slider__itemPrevOut)}>
                                {value}
                            </div>)
                    }
                } else if (index === activeIndex) {
                    if (position === "triple") {
                        return (<div key={index} className={classes.slider__item}>
                            {value}
                        </div>)
                    } else {
                        return (<div key={index} className={clsx(classes.slider__item, classes.slider__itemSolo)}>
                            {value}
                        </div>)
                    }
                } else if (index === nextIndex) {
                    if (position === "triple") {
                        return (
                            <div key={index} className={clsx(classes.slider__item, classes.slider__itemNext)}>
                                {value}
                            </div>)
                    } else {
                        return (
                            <div key={index} className={clsx(classes.slider__item, classes.slider__itemNextOut)}>
                                {value}
                            </div>)
                    }
                }
                return undefined
            })}
            {position === "triple" ? <button onClick={goNext} className={clsx(classes.slider__button, classes.slider__buttonRightTriple)}>{'>'}</button> :
                <button onClick={goNext} className={clsx(classes.slider__button, classes.slider__buttonRightSolo)}>{'>'}</button>}
        </div>
    );
};

export default Slider;