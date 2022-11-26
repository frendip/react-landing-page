import React, {FC, HTMLAttributes} from 'react';
import classes from "./ProgramCards.module.scss";
import ProgramCard from "./ProgramCard";
import programCardLogo1 from '../../pictures/programCard1.png'
import programCardLogo2 from '../../pictures/programCard2.png'
import programCardLogo3 from '../../pictures/programCard3.png'
import programCardLogo4 from '../../pictures/programCard4.png'
import clsx from "clsx";


interface ProgramCardListProps extends HTMLAttributes<HTMLDivElement> {
}

const ProgramCardList: FC<ProgramCardListProps> = ({id, className}) => {

    const sliderElements: JSX.Element[] = [
        <ProgramCard img={programCardLogo1} variantCard={"primary"} variantButton={"secondary"} href={"#"}>КУРС «STANDART»</ProgramCard>,
        <ProgramCard img={programCardLogo2} variantCard={"secondary"} variantButton={"primary"} href={"#"}>КУРС «TALKY»</ProgramCard>,
        <ProgramCard img={programCardLogo3} variantCard={"secondary"} variantButton={"primary"} href={"#"}>КУРС «ЕГЭ»</ProgramCard>,
        <ProgramCard img={programCardLogo4} variantCard={"primary"} variantButton={"secondary"} href={"#"}>МЕЖДУНАРОДНЫЕ ЭКЗАМЕНЫ</ProgramCard>,
    ]

    return (
        <div className={clsx(className, classes.programCardList)} id={id}>
            {sliderElements.map((value) => value)}
        </div>
    );
};

export default ProgramCardList;