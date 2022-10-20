import React, {FC, HTMLAttributes} from 'react';
import classes from './Button.module.scss'
import clsx from "clsx";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    size?: "small" | "medium" | "large",
    variant?: "primary" | "secondary",
}

const variantStyle = {
    primary: classes.button__primary,
    secondary: classes.button__secondary,
}

const sizeStyle = {
    small: classes.button__small,
    medium: classes.button__small,
    large: classes.button__small,
}

const Button: FC<ButtonProps> = ({ size = "medium", variant = "primary",  ...rest}) => {
    return (
        <button className={clsx(classes.button,variantStyle[variant], sizeStyle[size])} {...rest}/>
    );
};

export default Button;