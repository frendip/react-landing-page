import React, {FC, HTMLAttributes} from 'react';
import clsx from "clsx";
import classes from "./Promotions.module.scss";
import promotion1 from "../../pictures/promotion1.png"
import promotion2 from "../../pictures/promotion2.png"
import Promotion from "./Promotion";

interface PromotionListProps extends HTMLAttributes<HTMLDivElement> {

}

const PromotionList: FC<PromotionListProps> = ({id, className}) => {
    return (
        <div className={clsx(className, classes.promotionList)} id={id}>
            <Promotion variantButton={"primary"} variantText={"primary"} title={"Скидка 10%"} subtitle={"Для Вас и Ваших друзей"} info={"Познакомьте своих друзей с нашей онлайн-школой и подарите им скидку 10% на их первый заказ. Кроме того, за каждого успешно приглашённого друга мы дарим вам скидку 10% на ваш следующий заказ в качестве благодарности."}
                       img={promotion1} href={"#"}/>
            <Promotion variantButton={"secondary"} variantText={"secondary"} title={"Скидка 15%"} subtitle={"При покупке 2-х разных курсов"} info={"При покупке двух разных курсов, например, курс «talky» и курс «standard», вы получаете скидку 15%."}
                       img={promotion2} href={"#"}/>
        </div>
    );
};

export default PromotionList;