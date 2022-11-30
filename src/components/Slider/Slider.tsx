import React, {FC, HTMLAttributes, useState} from 'react';
import clsx from "clsx";
import classes from './Slider.module.scss'

interface SliderProps extends HTMLAttributes<HTMLDivElement>{
    sliderElements: JSX.Element[];
    position?: "solo" | "triple";
    buttonSize?: "small" | "medium" | "large";
    buttonPosition?: "veryClose" | "close" | "far";
}

const positionStyle = {
    solo: [classes.slider__itemPrevOut, classes.slider__itemSolo, classes.slider__itemNextOut],
    triple: [classes.slider__itemPrev, classes.slider__item, classes.slider__itemNext]
}
const buttonSizeStyle = {
    small: classes.slider__buttonSmall,
    medium: classes.slider__buttonMedium,
    large: classes.slider__buttonLarge,
}
const buttonPositionStyle = {
    veryClose: [classes.slider__buttonVeryCloseLeft, classes.slider__buttonVeryCloseRight],
    close: [classes.slider__buttonCloseLeft, classes.slider__buttonCloseRight],
    far: [classes.slider__buttonFarLeft, classes.slider__buttonFarRight],
}

const Slider: FC<SliderProps> = ({className, sliderElements, position = "triple", buttonSize = "small", buttonPosition = "far"}) => {

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
            <button onClick={goPrev} className={clsx(classes.slider__button, buttonPositionStyle[buttonPosition][0], buttonSizeStyle[buttonSize])}>{'<'}</button>
            {sliderElements.map((value, index): JSX.Element | undefined => {
                if (index === prevIndex) {
                    return (
                        <div key={index} className={clsx(classes.slider__item, positionStyle[position][0])}>
                            {value}
                        </div>)
                } else if (index === activeIndex) {
                    return (<div key={index} className={clsx(classes.slider__item, positionStyle[position][1])}>
                        {value}
                    </div>)
                } else if (index === nextIndex) {
                    return (
                        <div key={index} className={clsx(classes.slider__item, positionStyle[position][2])}>
                            {value}
                        </div>)
                }
                return (
                    <div key={index} className={clsx(classes.slider__item, classes.slider__itemNextOut)}>
                        {value}
                    </div>)
            })}
            <button onClick={goNext} className={clsx(classes.slider__button, buttonPositionStyle[buttonPosition][1], buttonSizeStyle[buttonSize])}>{'>'}</button>
        </div>
    );
};

export default Slider;