import React, {FC, HTMLAttributes} from 'react';
import classes from "./ProgramCards.module.scss";
import ProgramCard from "./ProgramCard";
import programCardLogo1 from '../../pictures/programCard1.png'
import programCardLogo2 from '../../pictures/programCard2.png'
import programCardLogo3 from '../../pictures/programCard3.png'
import programCardLogo4 from '../../pictures/programCard4.png'
import clsx from "clsx";
import Slider from "../Slider/Slider";
import {useMediaQuery} from "react-responsive";


interface ProgramCardListProps extends HTMLAttributes<HTMLDivElement> {
}

const ProgramCardList: FC<ProgramCardListProps> = ({id, className}) => {

    const sliderElements: JSX.Element[] = [
        <ProgramCard img={programCardLogo1} variantCard={"primary"} variantButton={"secondary"} href={"#"}>КУРС «STANDART»</ProgramCard>,
        <ProgramCard img={programCardLogo2} variantCard={"secondary"} variantButton={"primary"} href={"##"}>КУРС «TALKY»</ProgramCard>,
        <ProgramCard img={programCardLogo4} variantCard={"primary"} variantButton={"secondary"} href={"####"}>МЕЖДУНАРОДНЫЕ ЭКЗАМЕНЫ</ProgramCard>,
        <ProgramCard img={programCardLogo3} variantCard={"secondary"} variantButton={"primary"} href={"###"}>КУРС «ЕГЭ»</ProgramCard>,
    ]

    const minWidth1201 = useMediaQuery({ query: '(min-width: 1200px)' })
    const maxWidth1200 = useMediaQuery({ query: '(max-width: 1200px)' })
    const minWidth901 = useMediaQuery({ query: '(min-width: 901px)' })
    const maxWidth900 = useMediaQuery({ query: '(max-width: 900px)' })
    const minWidth601 = useMediaQuery({ query: '(min-width: 601px)' })
    const maxWidth600 = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <div className={clsx(className, classes.programCards)} id={id}>
            {minWidth1201 && <div className={classes.programCardList} id={id}>
                <ProgramCard img={programCardLogo1} variantCard={"primary"} variantButton={"secondary"} href={"#"}>КУРС «STANDART»</ProgramCard>
                <ProgramCard img={programCardLogo2} variantCard={"secondary"} variantButton={"primary"} href={"##"}>КУРС «TALKY»</ProgramCard>
                <ProgramCard img={programCardLogo3} variantCard={"secondary"} variantButton={"primary"} href={"###"}>КУРС «ЕГЭ»</ProgramCard>
                <ProgramCard img={programCardLogo4} variantCard={"primary"} variantButton={"secondary"} href={"####"}>МЕЖДУНАРОДНЫЕ ЭКЗАМЕНЫ</ProgramCard>
            </div>}
            {maxWidth1200 && minWidth901 && <Slider className={classes.slider} sliderElements={sliderElements} position={"triple"} buttonSize={"medium"} buttonPosition={"close"}/>}
            {maxWidth900 && minWidth601 && <Slider className={classes.slider} sliderElements={sliderElements} position={"solo"} buttonSize={"large"} buttonPosition={"close"}/>}
            {maxWidth600 && <Slider className={classes.slider} sliderElements={sliderElements} position={"solo"} buttonSize={"large"} buttonPosition={"far"}/>}
        </div>
    );
};


export default ProgramCardList;