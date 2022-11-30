import React, {FC, HTMLAttributes} from 'react';
import classes from "./Promotions.module.scss";
import promotion1 from "../../pictures/promotion1.png"
import promotion2 from "../../pictures/promotion2.png"
import Promotion from "./Promotion";
import {useMediaQuery} from "react-responsive";
import Slider from "../Slider/Slider";

interface PromotionListProps extends HTMLAttributes<HTMLDivElement> {

}

const PromotionList: FC<PromotionListProps> = ({id, className}) => {
    const sliderElements: JSX.Element[] = [
        <Promotion variantButton={"primary"} variantText={"primary"} title={"Скидка 10%"} subtitle={"Для Вас и Ваших друзей"} info={"Познакомьте своих друзей с нашей онлайн-школой и подарите им скидку 10% на их первый заказ. Кроме того, за каждого успешно приглашённого друга мы дарим вам скидку 10% на ваш следующий заказ в качестве благодарности."}
                   img={promotion1} href={"#"}/>,
        <Promotion variantButton={"secondary"} variantText={"secondary"} title={"Скидка 15%"} subtitle={"При покупке 2-х разных курсов"} info={"При покупке двух разных курсов, например, курс «talky» и курс «standard», вы получаете скидку 15%."}
                   img={promotion2} href={"#"}/>,
    ]
    const sliderElements600: JSX.Element[] = [
        <Promotion variantButton={"primary"} buttonSize={"medium"} variantText={"primary"} title={"Скидка 10%"} subtitle={"Для Вас и Ваших друзей"} info={"Познакомьте своих друзей с нашей онлайн-школой и подарите им скидку 10% на их первый заказ. Кроме того, за каждого успешно приглашённого друга мы дарим вам скидку 10% на ваш следующий заказ в качестве благодарности."}
                   img={promotion1} href={"#"}/>,
        <Promotion variantButton={"secondary"} buttonSize={"medium"} variantText={"secondary"} title={"Скидка 15%"} subtitle={"При покупке 2-х разных курсов"} info={"При покупке двух разных курсов, например, курс «talky» и курс «standard», вы получаете скидку 15%."}
                   img={promotion2} href={"#"}/>,
    ]

    const minWidth1201 = useMediaQuery({ query: '(min-width: 1200px)' })
    const maxWidth1200 = useMediaQuery({ query: '(max-width: 1200px)' })
    const minWidth901 = useMediaQuery({ query: '(min-width: 901px)' })
    const maxWidth900 = useMediaQuery({ query: '(max-width: 900px)' })
    const minWidth601 = useMediaQuery({ query: '(min-width: 601px)' })
    const maxWidth600 = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <div className={className} id={id}>
            {minWidth1201 && <div className={classes.promotionList}>
                <Promotion variantButton={"primary"} variantText={"primary"} title={"Скидка 10%"} subtitle={"Для Вас и Ваших друзей"} info={"Познакомьте своих друзей с нашей онлайн-школой и подарите им скидку 10% на их первый заказ. Кроме того, за каждого успешно приглашённого друга мы дарим вам скидку 10% на ваш следующий заказ в качестве благодарности."}
                           img={promotion1} href={"#"}/>
                <Promotion variantButton={"secondary"} variantText={"secondary"} title={"Скидка 15%"} subtitle={"При покупке 2-х разных курсов"} info={"При покупке двух разных курсов, например, курс «talky» и курс «standard», вы получаете скидку 15%."}
                           img={promotion2} href={"#"}/>
            </div>}
            {maxWidth1200 && minWidth901 && <Slider className={classes.slider} sliderElements={sliderElements} position={"solo"} buttonSize={"large"} buttonPosition={"veryClose"}/>}
            {maxWidth900 && minWidth601 && <Slider className={classes.slider} sliderElements={sliderElements} position={"solo"} buttonSize={"large"} buttonPosition={"far"}/>}
            {maxWidth600 && <Slider className={classes.slider} sliderElements={sliderElements600} position={"solo"} buttonSize={"medium"} buttonPosition={"far"}/>}
        </div>
    );
};

export default PromotionList;