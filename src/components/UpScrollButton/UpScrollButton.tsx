import React, {useEffect, useState} from 'react';
import {Link as ScrollLink} from "react-scroll";
import classes from "./UpScrollButton.module.scss";
import clsx from "clsx";

const UpScrollButton = () => {

    const [scroll, setScroll] = useState(0);

    const handleScroll = (): void => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ScrollLink to="main" spy={true} smooth={true} offset={-50} duration={500}>
            <button className={clsx(classes.upScrollButton, scroll < 100 && classes.upScrollButton__hide)}/>
        </ScrollLink>
    );
};

export default UpScrollButton;