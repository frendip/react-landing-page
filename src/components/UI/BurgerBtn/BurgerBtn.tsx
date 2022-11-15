import React, {FC} from 'react';
import classes from './BurgerBtn.module.scss'
import clsx from "clsx";

interface BurgerBtnProps {
    menuActive: boolean,
    setMenuActive: React.ComponentState,
}

const BurgerBtn: FC<BurgerBtnProps> = ({menuActive, setMenuActive}) => {
    return (
        <div className={clsx(menuActive && classes.active, classes.burgerBtn)} onClick={() => setMenuActive(!menuActive)}>
            <span></span>
        </div>
    );
};

export default BurgerBtn;